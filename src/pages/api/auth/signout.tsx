import type { NextApiRequest, NextApiResponse } from 'next'

import { removeTokenCookie } from '@utils/cookies'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    removeTokenCookie(res)
    res.end()
}


export default handler