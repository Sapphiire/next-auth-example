import Cookies from 'cookies'
import type { NextApiRequest, NextApiResponse } from 'next'

import { proxy } from '~/server/proxy'


const handler = (req: NextApiRequest, res: NextApiResponse) => new Promise(
    (resolve, reject) => {
        const cookies = new Cookies(req, res)
        const token = cookies.get('Authorization')

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