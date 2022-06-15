import decode from 'jwt-decode'


export const jwtDecode = <T>(token: string): any => {
    try {
        const { iat, ...res } = decode<T & { iat: number }>(token, { header: false })
        return res
    } catch (err) {
        return null
    }
}