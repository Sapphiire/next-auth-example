import type { NextApiRequest, NextApiResponse } from 'next'
import { checkCookies, removeCookies } from 'cookies-next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (checkCookies('token', {req, res})) {
        removeCookies('token', {req, res})
    }

    return res.status(200).send({ message: 'You are logged out'})
}