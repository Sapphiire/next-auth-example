import type {GetServerSidePropsContext} from 'next'

import { API_URL } from '@server/proxy'
import { createFetchApi } from '@server/createFetchApi'
import { getToken } from '@server/getToken'


const fetchTransfers = createFetchApi({
    baseUrl: API_URL as string,
    pathname: '/api/transfers',
    options: {
        method: 'GET'
    },
    prepare: (ctx: GetServerSidePropsContext) => getToken(ctx),
})

export { fetchTransfers }