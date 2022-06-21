import type { NextApiRequest, NextApiResponse } from 'next'

import { jwtDecode } from '@utils/jwt-decode'
import { setTokenCookie } from '@utils/cookies'
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
                            const { iat, ...user } = jwtDecode<any>(token)

                            if (user) {
                                setTokenCookie(res, token)

                                res.status(200).send({ user })
                                resolve(user)
                            }

                            res.status(404).send(body)
                            resolve(body)
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