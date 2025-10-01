import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const openLibraryApi = createApi({
  reducerPath: 'openLibraryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://openlibrary.org/' }),
  endpoints: (builder) => ({
    searchBooks: builder.query<any, { q: string; page?: number } | void>({
      query: (params) => {
        const q = params?.q || 'the lord of the rings'
        const page = params?.page ?? 1
        return `search.json?q=${encodeURIComponent(q)}&page=${page}&limit=20`
      },
      transformResponse: (response: any) => response,
    }),
    getWork: builder.query<any, string>({
      query: (workId) => `works/${workId}.json`,
    }),
  }),
})

export const { useSearchBooksQuery, useGetWorkQuery } = openLibraryApi