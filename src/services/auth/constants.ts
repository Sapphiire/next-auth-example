export const LANDING_PATHNAME = '/'
export const SIGN_PATHNAME = '/sign'
export const DASHBOARD_PATHNAME = '/dashboard'
export const TRANSFER_PATHNAME = '/transfer'

export const NOT_AUTH_REQUIRED_URLS = [ LANDING_PATHNAME, SIGN_PATHNAME, TRANSFER_PATHNAME ]


export interface User {
    _id: string
    email: string
    tariff: number
}

export interface UserState {
    user: User | null
}
