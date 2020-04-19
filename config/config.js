let baseUrl = ""

if (process.env.NODE_ENV === 'development') {
    // 开发环境
    baseUrl = 'http://127.0.0.1:5000/api'
} else {
    // 生产环境
    baseUrl = 'https://web-node-app.herokuapp.com/api'
}

export const BASE_URL = baseUrl
