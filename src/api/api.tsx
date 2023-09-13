/* eslint-disable no-console */
import axios from 'axios'

const token = `Bearer ${localStorage.getItem('TOKEN_API')}`

const api = axios.create()

api.defaults.baseURL = 'http://localhost:4000/api/'
api.defaults.timeout = 10000
api.defaults.headers.common.Authorization = token

export default api
