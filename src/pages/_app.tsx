import '@src/styles/globals.css'

import App, { AppProps, AppContext } from 'next/app'

import { wrapper } from '@src/store'
import { getUser } from '@server/getUser'

import { authSlice } from '@src/services/auth/reducer'
import {
    DASHBOARD_PATHNAME,
    LANDING_PATHNAME,
    NOT_AUTH_REQUIRED_URLS
} from '@src/services/auth/constants'
import { AuthLayout } from '@src/components/AuthLayout'


type MyAppProps = {
    isAuth: boolean
}

const MyApp = ({ Component, pageProps, isAuth }: AppProps & MyAppProps) => (
    isAuth ?
        (
            <AuthLayout>
                <Component {...pageProps} />
            </AuthLayout>
        ) :
        <Component {...pageProps} />
)

MyApp.getInitialProps = wrapper.getInitialAppProps((store) =>
    async (appContext: AppContext) => {
        const user = getUser(appContext.ctx)
        const url = appContext.router.pathname
        const isAuthRequired = !NOT_AUTH_REQUIRED_URLS.some(pathname => pathname === url)
        //
        // if (typeof window === 'undefined' && appContext.ctx.res) {
        //     if (!user && isAuthRequired) {
        //         appContext.ctx.res.writeHead(301, { Location: LANDING_PATHNAME })
        //         appContext.ctx.res.end()
        //     }
        //
        //
        //     if (user && !isAuthRequired) {
        //         appContext.ctx.res.writeHead(301, { Location: DASHBOARD_PATHNAME })
        //         appContext.ctx.res.end()
        //     }
        // }
        //
        user && store.dispatch(authSlice.actions.setUser(user))

        const appInitialProps = await App.getInitialProps(appContext)
        return { ...appInitialProps, isAuth: isAuthRequired }
    })


export default wrapper.withRedux(MyApp)
