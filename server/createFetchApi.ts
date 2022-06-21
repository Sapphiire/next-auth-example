import type { GetServerSidePropsContext } from 'next'
import cfetch from 'cross-fetch'

type CreateFetchApiProps = {
    baseUrl: string,
    pathname: string,
    options: {
        method: 'GET' | 'POST'
    },
    prepare: (ctx: GetServerSidePropsContext, options?: any) => any
}

type CallbackType = (ctx: GetServerSidePropsContext, options?: any) => any

const createFetchApi = ({ baseUrl, pathname, prepare }: CreateFetchApiProps): CallbackType =>
    (ctx: GetServerSidePropsContext, options) => {
        const token = prepare(ctx)
        return cfetch(`${baseUrl}${pathname}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => res.json())
    }


export { createFetchApi }
export type { CreateFetchApiProps }
