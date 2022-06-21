import { useRouter } from 'next/router'

import { DASHBOARD_PATHNAME, LANDING_PATHNAME } from '@utils/route'
import { useAppSelector } from '@src/store'
import {
    signUp,
    signOut,
    signIn, SignInRequest,
} from '@src/services/auth/actions'


const useUser = () => {
    const router = useRouter()
    const { data: user, loading, error } = useAppSelector((state) => state.auth)

    const handleLogin = async (credentials: SignInRequest) => {
        await signIn(credentials)
        await router.push(LANDING_PATHNAME)
    }

    const handleLogout = async () => {
        await signOut()
        await router.push(DASHBOARD_PATHNAME)
    }

    return {
        user,
        loading,
        error,
        signUp,
        signIn: handleLogin,
        signOut: handleLogout,
    }
}


export { useUser }
