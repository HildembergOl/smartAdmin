/* eslint-disable no-console */
import api from './api'
import { PropsValuesBusiness } from '../types'

export const businessApi = {
    all: async () => {
        const res = await api.get(`business`)

        return res.data
    },
    one: async (id: number) => {
        if (id > 1) {
            const res = await api.get(`business/${id}`)

            return res.data
        }
        return { error: 'Id not exists' }
    },
    update: async (data: PropsValuesBusiness) => {
        const res = await api.put(`business/${data.id}`, data)

        return res.data
    },
    insert: async (data: PropsValuesBusiness) => {
        const res = await api.post(`business`, data)
        return res.data
    },
    delete: async (data: PropsValuesBusiness) => {
        const { id } = data
        const res = await api.delete(`business/${id}`)
        return res.data
    },
    filter: async (value: string | number) => {
        const param = { filtro: value.toString() }
        api.defaults.params = param
        const res = await api.get(`business/filter`)

        console.log(res)
        return res.data
    },
}
