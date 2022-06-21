import type { NextApiRequest, NextApiResponse } from 'next'

import { getTokenCookie } from '@utils/cookies'
import { proxy } from '@server/proxy'


const handler = (req: NextApiRequest, res: NextApiResponse) => new Promise(
    (resolve, reject) => {
        const token = getTokenCookie(req)

        req.headers.cookie = ''

        if (token) {
            req.headers.Authorization = `Bearer ${token}`
        }

        proxy
            .once('error', reject)
            .web(req, res)
    })


export default handler

export const config = {
    api: {
        bodyParser: false,
    },
}