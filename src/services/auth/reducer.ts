import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { api } from '@src/services/auth/api'
import type { UserState, User } from '@src/services/auth/constants'


type AuthState = UserState

const authSlice = createSlice({
    name: 'auth',
    initialState: { user: null } as AuthState,
    reducers: {
        setUser: (
            state,
            { payload }: PayloadAction<User>
        ) => ({
            ...state,
            user: payload
        })
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                api.endpoints.login.matchFulfilled,
                (state, { payload }: { payload: UserState }) => ({
                    ...state,
                    user: payload.user
                })
            )
    },
})


export { authSlice }
export type { AuthState }
