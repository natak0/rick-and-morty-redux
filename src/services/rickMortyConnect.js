import { createApi } from "@reduxjs/toolkit/query/react";
import { gql } from "graphql-request";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";

export const rickMortyApi = createApi({
  reducerPath: "rickMortyApi",
  baseQuery: graphqlRequestBaseQuery({
    url: "https://rickandmortyapi.com/graphql",
  }),
  tagTypes: ["List", "Character"],
  endpoints: (builder) => ({
    getCharactersByPage: builder.query({
      query: ({ page, name, gender }) => ({
        document: gql`
          query ($page: Int = 1, $name: String, $gender: String) {
            characters(page: $page, filter: { name: $name, gender: $gender }) {
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
        variables: { page, name, gender },
      }),
      refetchOnMountOrArgChange: 86400, // refetch if 24 hours have passed
      providesTags: (result, error, arg) =>
        result ? [{ type: "List", result }] : ["List"],
    }),
    getCharacterById: builder.query({
      query: ({ characterId }) => ({
        document: gql`
          query ($characterId: ID! = 1) {
            character(id: $characterId) {
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
        variables: { characterId },
      }),
      refetchOnMountOrArgChange: 86400,
      providesTags: (result, error, id) =>
        result ? [{ type: "Character", result }] : ["Character"],
    }),
  }),
});

// Export hooks based on the defined endpoints
export const { useGetCharactersByPageQuery, useGetCharacterByIdQuery } =
  rickMortyApi;
