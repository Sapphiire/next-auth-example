import Cookies from 'cookies'
import jwtDecode from 'jwt-decode'
import type { NextApiRequest, NextApiResponse } from 'next'

import { proxy } from '@server/proxy'


const handler = (req: NextApiRequest, res: NextApiResponse) => new Promise(
    (resolve, reject) =>
        proxy
            .once('proxyRes', proxyRes => {
                let data: Array<any> = []

                proxyRes
                    .on('data', chunk => data.push(chunk))
                    .once('error', reject)
                    .on('end', () => {
                        try {
                            const body = JSON.parse(Buffer.concat(data).toString())
                            const token = body?.access_token
                            const { iat, ...user } = jwtDecode<any>(token, { header: false })

                            if (user) {
                                const cookies = new Cookies(req, res)
                                cookies.set('Authorization', token, {
                                    httpOnly: true,
                                    sameSite: 'lax',
                                })

                                res.status(200).send({ user })
                            } else {
                                res.status(404).send(body)
                            }

                            resolve(user || body)
                        } catch (err) {
                            reject(err)
                        }
                    })
            })
            .once('error', reject)
            .web(req, res, {
                selfHandleResponse: true,
            })
)


export default handler

export const config = {
    api: {
        bodyParser: false,
    },
}