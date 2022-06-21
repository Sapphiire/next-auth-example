import type { NextPageContext, GetServerSidePropsContext } from 'next'

import { getToken } from '@server/getToken'
import { jwtDecode } from '@utils/jwt-decode'
import type { nullable } from '@utils/nullable'
import type { User } from '@src/services/auth/constants'


type GetUser = (ctx: NextPageContext | GetServerSidePropsContext) => nullable<User>

const getUser: GetUser = (ctx) => {
    const token = getToken(ctx)
    return token && jwtDecode<User>(token)
}


export { getUser }
export type { GetUser }
