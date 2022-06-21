import '@src/styles/globals.css'

import App, { AppProps, AppContext } from 'next/app'
import { ThemeProvider } from 'next-themes'

import { getUser } from '@server/getUser'

import { authSlice } from '@src/services/auth/reducer'
import {
    DASHBOARD_PATHNAME,
    LANDING_PATHNAME,
    NOT_AUTH_REQUIRED_URLS
} from '@utils/route'
import { AuthLayout } from '@src/components/AuthLayout'
import { wrapper } from '@src/store'


const MyApp = ({ Component, pageProps, router }: AppProps) => (
    !NOT_AUTH_REQUIRED_URLS.some(pathname => pathname === router.pathname) ?
        (
            <ThemeProvider enableSystem={true}>
                <AuthLayout>
                    <Component {...pageProps} />
                </AuthLayout>
            </ThemeProvider>
        ) :
        (
            <ThemeProvider>
                <Component {...pageProps} />
            </ThemeProvider>
        )
)

MyApp.getInitialProps = wrapper.getInitialAppProps(store =>
    async (appContext: AppContext) => {
        if (typeof window === 'undefined' && appContext.ctx.res) {
            const user = getUser(appContext.ctx)
            const url = appContext.ctx.req?.url
            const isAuthRequired = !NOT_AUTH_REQUIRED_URLS.some(pathname => pathname === url)

            if (!user && isAuthRequired) {
                appContext.ctx.res.writeHead(301, { Location: LANDING_PATHNAME })
                appContext.ctx.res.end()
            }


            if (user && !isAuthRequired) {
                appContext.ctx.res.writeHead(301, { Location: DASHBOARD_PATHNAME })
                appContext.ctx.res.end()
            }

            user && store.dispatch(authSlice.actions.setUser(user))
        }

        const appInitialProps = await App.getInitialProps(appContext)
        return { ...appInitialProps }
    }
)

export default wrapper.withRedux(MyApp)
