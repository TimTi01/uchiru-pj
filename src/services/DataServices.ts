import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const dataAPI = createApi({
    reducerPath: "dataAPI",
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.thecatapi.com/v1'}),
    tagTypes: ['CatsData'],
    endpoints: (build) => ({
        fetchAllData: build.query({
            query: () => ({
                url: `images`
            }),
            providesTags: result => ['CatsData']
        })
    })
})