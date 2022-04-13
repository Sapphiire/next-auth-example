import type { GetServerSideProps } from 'next'
import { getCookie } from 'cookies-next'

export type requireOptions = {
    isAuth?: boolean,
    redirect?: string,
}

const requireIsAuth = (fn: GetServerSideProps, options: requireOptions = {}): GetServerSideProps => {
    return async ctx => {
        const { req, res } = ctx
        const { isAuth = true, redirect = '/' } = options

        const token = getCookie('token', {req, res})
        const isRedirect = (isAuth && !token) || (!isAuth && token)

        //console.log(isRedirect)

        if (isRedirect) {
            return {
                redirect: {
                    destination: redirect,
                    statusCode: 301
                }
            }
        }

        return await fn(ctx)
    }
}

export default requireIsAuth
