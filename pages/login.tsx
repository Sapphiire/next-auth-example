import type { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import { getCookie } from 'cookies-next'
import axios from 'axios'

import requireIsAuth from 'lib/auth/requireIsAuth'

type LoginPageProps = {
    token: string
}

const LoginPage: NextPage<LoginPageProps> = ({ token }) => {

    const login = () => {
        const _ = async () => {
            const data = await axios.post('api/login', {
                email: '1234@mail.ru',
                password: '1234'
            })
        }
        _()
    }

    const register = () => {
        const _ = async () => {
            const data = await axios.post('api/register', {
                email: '1234@mail.ru',
                password: '1234'
            })
        }
        _()
    }

    const logout = () => {
        const _ = async () => {
            const data = await axios.post('api/logout')
        }
        _()
    }

    return (
        <div>
            <h1>login page</h1>
            <code>{token}</code>
            <Link href="/">Home</Link>
            <div />
            <Link href="/about">About</Link>
            <button onClick={login}>Login</button>
            <button onClick={register}>Register</button>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = requireIsAuth(async ({ req, res }) => {
    const token = getCookie('token', { req, res }) || null

    return {
        props: {
            token,
        }
    }
}, { isAuth: false, redirect: '/login' })
export default LoginPage