import axios from 'axios'
import * as AxiosLogger from 'axios-logger'
import {getCookie} from 'cookies-next'

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
})

AxiosLogger.setGlobalConfig({
    prefixText: 'AXIOS LOGGER',
    dateFormat: 'HH:MM:ss',
    status: true,
    headers: true,
})

instance.interceptors.request.use(
    AxiosLogger.requestLogger,
    AxiosLogger.errorLogger
)

instance.interceptors.response.use(
    AxiosLogger.responseLogger,
    AxiosLogger.errorLogger
)

export default instance
