import type { NextPageContext } from 'next'

import { getToken } from '@server/getToken'
import { jwtDecode } from '@utils/jwt-decode'
import type { nullable } from '@utils/nullable'
import type { User } from '@src/services/auth/constants'


type GetUser = (ctx: NextPageContext) => nullable<User>

const getUser: GetUser = (ctx) => {
    const token = getToken(ctx)

    if (!token) {
        return null
    }

    return jwtDecode<User>(token)
}


export { getUser }
export type { GetUser }
