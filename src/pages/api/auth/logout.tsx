import Cookies from 'cookies'
import type { NextApiRequest, NextApiResponse } from 'next'


const handler = (req: NextApiRequest, res: NextApiResponse) => {
    const cookies = new Cookies(req, res)
    cookies.set('Authorization', null)
    res.end()
}


export default handler