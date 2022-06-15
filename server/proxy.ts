import httpProxy from 'http-proxy'

const API_URL = process.env.API_URL

const proxy = httpProxy.createProxyServer({
    target: process.env.API_URL,
    autoRewrite: false,
})


export { proxy, API_URL }
