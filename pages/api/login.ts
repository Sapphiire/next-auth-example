import type { NextApiRequest, NextApiResponse } from 'next'
import { setCookies } from 'cookies-next'

import axios from 'lib/axios'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { body } = req

    try {
        const { data } = await axios.post(
            '/auth/login',
            {
                email: body.email,
                password: body.password
            }
        )

        setCookies('token', data.access_token, {
            sameSite: true,
            httpOnly: true,
            req, res
        })

        return res.redirect(301, '/about').send({ message: 'You are now logged in' })
    } catch (error) {
        return res.status(500).send({ message: 'Something went wrong on the server' })
    }
}


export default handler