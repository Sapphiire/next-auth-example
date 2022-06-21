import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { signIn, signOut, signUp } from './actions'
import type { User } from './constants'


type AuthState = {
    data: User | null,
    loading: boolean,
    error: any,
}

const initialState = {
    data: null,
    loading: false,
    error: null
} as AuthState

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (
            state,
            { payload }: PayloadAction<User>
        ) => ({
            ...state,
            user: payload
        })
    },
    extraReducers: builder => {

    }
})


export { authSlice }
export type { AuthState }
