import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type { UserState } from '@src/services/auth/constants'


interface RegisterRequest {
    email: string
    password: string
}

interface LoginRequest {
    email: string
    password: string
}

const api = createApi({
    reducerPath: 'api/auth',
    baseQuery: fetchBaseQuery({
        baseUrl: 'api/auth'
    }),
    endpoints: (builder) => ({
        register: builder.mutation<UserState, RegisterRequest>({
            query: (credentials) => ({
                url: 'register',
                method: 'POST',
                body: credentials,
            }),
        }),
        login: builder.mutation<UserState, LoginRequest>({
            query: (credentials) => ({
                url: 'login',
                method: 'POST',
                body: credentials,
            }),
        }),
        logout: builder.mutation<void, void>({
            query: () => 'logout'
        })
    }),
})


export { api }
export type { RegisterRequest, LoginRequest }
export const { useRegisterMutation, useLoginMutation, useLogoutMutation } = api
