import type { NextApiRequest, NextApiResponse } from 'next'

import axios from 'lib/axios'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { body } = req

    try {
        const { data } = await axios.post(
            '/auth/register',
            {
                email: body.email,
                password: body.password
            }
        )

        return res.status(200).send({ message: 'You are register an account' })
    } catch ({ response: { status, data } }) {
        return res.status(404).json(data)
    }
}

export default handler