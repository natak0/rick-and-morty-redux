import { createApi } from "@reduxjs/toolkit/query/react";
import { gql, request, ClientError } from "graphql-request";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";

/*const graphqlBaseQuery =
  ({ baseUrl }) =>
  async ({ body }) => {
    try {
      const result = await request(baseUrl, body);
      return { data: result };
    } catch (error) {
      if (error instanceof ClientError) {
        return { error: { status: error.response.status, data: error } };
      }
      return { error: { status: 500, data: error } };
    }
  };*/

export const rickMortyApi = createApi({
  reducerPath: "rickMortyApi",
  baseQuery: graphqlRequestBaseQuery({
    url: "https://rickandmortyapi.com/graphql",
  }),
  tagTypes: ["List", "Character"],
  endpoints: (builder) => ({
    getCharactersByPage: builder.query({
      query: ({ page, name, species }) => ({
        document: gql`
          query ($page: Int = 1, $name: String, $species: String) {
            characters(
              page: $page
              filter: { name: $name, species: $species }
            ) {
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
        variables: { page, name, species },
      }),
      refetchOnMountOrArgChange: 86400, // refetch if 24 hours have passed
      providesTags: (result, error, arg) =>
        result ? [{ type: "List", result }] : ["List"],
    }),
    getByCharacter: builder.query({
      query: (id) => ({
        body: gql`
          query {
            character (id: ${id}) {
              id
              name
              status
              type
              image
              gender
              species
              origin {
                name
              }
              location {
                name
              }
            }
          }
        `,
      }),
      refetchOnMountOrArgChange: 86400,
      providesTags: (result, error, id) =>
        result ? [{ type: "Character", result }] : ["Character"],
    }),
  }),
});

// Export hooks based on the defined endpoints
export const { useGetCharactersByPageQuery, useGetByCharacterQuery } =
  rickMortyApi;
