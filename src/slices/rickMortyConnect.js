import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { gql, request, ClientError } from "graphql-request";

const graphqlBaseQuery =
  ({ baseUrl }) =>
  async ({ body }) => {
    try {
      const result = await request(baseUrl, body);
      console.log("result", result);
      return { data: result };
    } catch (error) {
      if (error instanceof ClientError) {
        return { error: { status: error.response.status, data: error } };
      }
      return { error: { status: 500, data: error } };
    }
  };

export const rickMortyApi = createApi({
  reducerPath: "rickMortyApi",
  baseQuery: graphqlBaseQuery({
    baseUrl: "https://rickandmortyapi.com/graphql",
  }),
  tagTypes: ["List", "Character"],
  endpoints: (builder) => ({
    getCharactersByPage: builder.query({
      query: (page) => ({
        body: gql`
          query {
            characters(page: ${page}) {
              info {
                count
                pages
                next
                prev
              }
              results {
                id
                name
                image
                gender
                species
              }
            }
          }
        `,
      }),
      /*           
          builder.query({
      query: (page) => `characters=${page}`, */
      refetchOnMountOrArgChange: 86400, // refetch if 24 hours have passed
      providesTags: (result, error, arg) =>
        result ? [{ type: "List", result }] : ["List"],
    }),
    getByCharacter: builder.query({
      query: (id) => `/${id}`,
      refetchOnMountOrArgChange: 86400,
      providesTags: (result, error, id) =>
        result ? [{ type: "Character", result }] : ["Character"],
    }),
  }),
});

// Export hooks based on the defined endpoints
export const { useGetCharactersByPageQuery, useGetCharactersByCharacterQuery } =
  rickMortyApi;
