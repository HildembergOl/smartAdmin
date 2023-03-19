/* eslint-disable no-console */
import axios from 'axios'

const token = `Bearer ${localStorage.getItem('TOKEN_API')}`

const api = axios.create()

api.defaults.baseURL = 'http://localhost:4000/'
api.defaults.timeout = 1000
api.defaults.headers.common['User-Agent'] = 'SmartAdmin/1.0.0'
api.defaults.headers.common.Authorization = token
api.defaults.headers.common['Content-Type'] = 'application/json'
api.defaults.headers.common['Content-Type'] = 'charset=utf-8'
api.defaults.headers.common['Content-Type'] =
    'application/x-www-form-urlencoded'
api.defaults.headers.common['Content-Encoding'] = 'gzip, deflate, br'

export default api
