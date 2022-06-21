import Cookies from 'cookies'
import type { GetServerSidePropsContext, NextPageContext } from 'next'

import type { nullable } from '@utils/nullable'


type GetToken = (ctx: NextPageContext | GetServerSidePropsContext) => nullable<string>

const getToken: GetToken = ({ req, res }) => {
    const cookies = req && res && new Cookies(req, res)
    return cookies?.get('Authorization')
}


export { getToken }
export type { GetToken }
