import api from './api'
import { PropsGroup } from '../types'

export const groupApi = {
    all: async (id: number) => {
        const res = await api.get(`group/${id}`)

        return res.data as PropsGroup[]
    },
    one: async (id: number) => {
        if (id > 1) {
            const res = await api.get(`group/${id}`)

            return res.data
        }
        return { error: 'Id not exists' }
    },
    update: async (data: PropsGroup) => {
        const res = await api.put(`group/${data.id}`, data)

        return res.data
    },
    insert: async (data: PropsGroup) => {
        const res = await api
            .post(`group`, data)
            .then((r) => r.data)
            .catch((e) => e)
        return res
    },
    delete: async (data: PropsGroup) => {
        const { id } = data
        const res = await api.delete(`group/${id}`)
        return res.data
    },
    filter: async (value: string | number) => {
        const param = { filtro: value.toString() }
        api.defaults.params = param
        const res = await api.get(`group/filter`)
        return res.data
    },
}
