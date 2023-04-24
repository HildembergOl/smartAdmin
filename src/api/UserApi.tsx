import api from './api'
import { PropsValuesUser } from '../types'

export const userApi = {
    all: async () => {
        const res = await api.get(`users`)

        return res.data
    },
    one: async (id: number) => {
        if (id > 1) {
            const res = await api.get(`user/${id}`)

            return res.data
        }
        return { error: 'Id not exists' }
    },
    update: async (data: PropsValuesUser) => {
        const res = await api.put(`user/${data.id}`, data)

        return res.data
    },
    insert: async (data: PropsValuesUser) => {
        const res = await api
            .post(`users`, data)
            .then((r) => r.data)
            .catch((e) => e)
        return res
    },
    delete: async (data: PropsValuesUser) => {
        const { id } = data
        const res = await api.delete(`user/${id}`)
        return res.data
    },
    filter: async (value: string | number) => {
        const param = { filtro: value.toString() }
        api.defaults.params = param
        const res = await api.get(`user/filter`)
        return res.data
    },
}
