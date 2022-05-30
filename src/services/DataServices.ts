import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface IData {
    breeds: [],
    id: string,
    url: string,
    width: number,
    height: number
}

export const dataAPI = createApi({
    reducerPath: "dataAPI",
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.thecatapi.com/v1/images/search'}),
    tagTypes: ['CatsData'],
    endpoints: (build) => ({
        fetchAllData: build.query<IData[], number>({
            query: (limit: number = 15) => ({
                url: ``,
                params: {
                    limit: limit,
                },
            }),
            providesTags: result => ['CatsData']
        })
    })
})