import Cookies from 'cookies'
import type { NextPageContext } from 'next'

import type { nullable } from '@utils/nullable'


type GetToken = (ctx: NextPageContext) => nullable<string>

const getToken: GetToken = ({ req, res }) => {
    const cookies = req && res && new Cookies(req, res)
    return cookies?.get('Authorization')
}


export { getToken }
export type { GetToken }
