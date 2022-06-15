import { useCallback } from 'react'
import { useRouter } from 'next/router'

import { useAppSelector } from '@src/store'
import {
    useLoginMutation,
    useRegisterMutation,
    useLogoutMutation,
    LoginRequest,
} from '@src/services/auth/api'
import { selectCurrentUser } from '@src/services/auth/selectors'
import { DASHBOARD_PATHNAME, LANDING_PATHNAME } from '@src/services/auth/constants'


const useUser = () => {
    const router = useRouter()

    const user = useAppSelector(selectCurrentUser)

    const [login, { isLoading: isLoginLoading }] = useLoginMutation()
    const [register, { isLoading: isRegisterLoading }] = useRegisterMutation()
    const [logout, { isLoading: isLogoutLoading }] = useLogoutMutation()

    const handleLogin = useCallback((credentials: LoginRequest): void => {
        login(credentials)
            .then(async () => {
                if (user)
                    await router.push(DASHBOARD_PATHNAME)
                else
                    // TODO: action to push notification
                    router.reload()
            })
    }, [login, router, user])

    const handleLogout = useCallback((): void => {
        logout()
            .then(async () => {
                if (!user)
                    await router.push(LANDING_PATHNAME)
                else
                    // TODO: action to push notification
                    router.reload()
            })
    }, [logout, router, user])


    return {
        isLoadingSign: isLoginLoading || isRegisterLoading || isLogoutLoading,
        login: handleLogin,
        logout: handleLogout,
        user,
        register
    }
}


export { useUser }
