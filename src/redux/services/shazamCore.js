import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 
            '08221f0e07msh9ce2a8ae74c15fbp16a631jsn675a3a8e5553')
            
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world' }),
        getSongDetails: builder.query({query: ({songid}) => `/tracks/details?track_id=${songid}`
    }),
    }),
});


export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
} = shazamCoreApi;