import {type Action, type ThunkAction, type AnyAction, combineReducers, configureStore } from '@reduxjs/toolkit'
import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { type Context, createWrapper, HYDRATE } from 'next-redux-wrapper'
import logger from 'redux-logger'

import { authSlice } from '@src/services/auth/reducer'


const rootReducer = {
    [authSlice.name]: authSlice.reducer,
}

// const combinedReducer = combineReducers<typeof reducers>(reducers)

export const makeStore = (ctx: Context) => configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware(
        {
            thunk: true,
            immutableCheck: true,
            serializableCheck: true
        }
    ).concat(logger)
})


export type Store = ReturnType<typeof makeStore>

export type RootState = ReturnType<Store['getState']>
export type AppDispatch = Store['dispatch']
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()

export const wrapper = createWrapper<Store>(makeStore, { debug: true })
