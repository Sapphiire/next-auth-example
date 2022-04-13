import '../styles/globals.css'

import type { AppProps } from 'next/app'
import type { AppContextType } from 'next/dist/shared/lib/utils'
import type { Router } from 'next/router'
import { getCookie } from 'cookies-next'


const App = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />
}

App.getInitialProps = async (ctx: AppContextType<Router>) => {
    const { req, res } = ctx
    const token = getCookie('token', { res, req })

    console.log(token)

    if (token) {
    }

    return {

    }
}

export default App
