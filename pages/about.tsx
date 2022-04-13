import {GetServerSideProps, NextPage} from 'next'
import Link from 'next/link'
import { getCookie } from 'cookies-next'

import requireIsAuth from 'lib/auth/requireIsAuth'

type AboutPageProps = {
   token: string
}

const AboutPage: NextPage<AboutPageProps> = ({ token }) => {
    return (
        <div>
            <h1>about page</h1>
            <Link href="/">Home</Link>
            <div />
            <code>{token}</code>
            <div />
            <Link href="/login">Login</Link>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = requireIsAuth(async ({ req, res }) => {
    const token = getCookie('token', { req, res })

    return {
        props: {
            token,
        }
    }
}, { isAuth: true, redirect: '/login' })

export default AboutPage