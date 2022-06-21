import { serialize, parse } from 'cookie'
import type {NextApiRequest, NextApiResponse} from 'next'

import type { nullable } from '@utils/nullable'


const TOKEN_NAME = 'token'

const setTokenCookie = (res: NextApiResponse, token: string): void => {
    const cookie = serialize(TOKEN_NAME, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        sameSite: 'lax',
    })

    res.setHeader('Set-Cookie', cookie)
}

const removeTokenCookie = (res: NextApiResponse): void => {
    const cookie = serialize(TOKEN_NAME, '', {
        maxAge: -1,
        path: '/',
    })

    res.setHeader('Set-Cookie', cookie)
}

const parseCookies = (req: NextApiRequest): Record<string, string> => {
    if (req.cookies) return req.cookies

    const cookie = req.headers?.cookie
    return parse(cookie || '')
}

const getTokenCookie = (req: NextApiRequest): nullable<string> => {
    const cookies = parseCookies(req)
    return cookies[TOKEN_NAME]
}


export { setTokenCookie, removeTokenCookie, parseCookies, getTokenCookie }