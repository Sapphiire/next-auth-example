import { createAsyncThunk } from '@reduxjs/toolkit'


interface SignUpRequest {
    email: string
    password: string
}

interface SignInRequest {
    email: string
    password: string
}


const signIn = createAsyncThunk('auth/login', async (credentials: SignInRequest) => {

})

const signOut = createAsyncThunk('auth/logout', async () => {

})

const signUp = createAsyncThunk('auth/register', async (credentials: SignUpRequest) => {

})


export { signIn, signOut, signUp }
export type { SignUpRequest, SignInRequest }
