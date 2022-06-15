import { type AnyAction, combineReducers, configureStore } from '@reduxjs/toolkit'
import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { type Context, createWrapper, HYDRATE } from 'next-redux-wrapper'

import { api as authApi } from '@src/services/auth/api'
import { authSlice } from '@src/services/auth/reducer'


const combinedReducer = combineReducers({
    [authApi.reducerPath]: authApi.reducer,
    [authSlice.name]: authSlice.reducer,
})

const rootReducer = (state: ReturnType<typeof combinedReducer>, action: AnyAction) => {
    if (action.type === HYDRATE) {
        return {
            ...state,
            ...action.payload,
        }
    }
    return combinedReducer(state, action)
}


const makeStore = (ctx: Context) => configureStore({
    // TODO: Change Types
    // @ts-ignore
    reducer: rootReducer,

    // TODO: Change Types
    // @ts-ignore
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware),

    devTools: true,
})

export type Store = ReturnType<typeof makeStore>

export type RootState = ReturnType<Store['getState']>
export type AppDispatch = Store['dispatch']

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()

export const wrapper = createWrapper<Store>(makeStore, { debug: true })
