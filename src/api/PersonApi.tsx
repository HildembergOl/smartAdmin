/* eslint-disable no-console */
import api from './api'
import { PropsValuesPerson } from '../types'

export const personApi = {
    all: async () => {
        const res = await api.get(`person`)

        return res.data
    },
    one: async (id: number) => {
        if (id > 1) {
            const res = await api.get(`person/${id}`)

            return res.data
        }
        return { error: 'Id not exists' }
    },
    update: async (data: PropsValuesPerson) => {
        const res = await api.put(`person/${data.id}`, data)

        return res.data
    },
    insert: async (data: PropsValuesPerson) => {
        const res = await api
            .post(`person`, data)
            .then((r) => r.data)
            .catch((e) => e)
        return res
    },
    delete: async (data: PropsValuesPerson) => {
        const { id } = data
        const res = await api.delete(`person/${id}`)
        return res.data
    },
    filter: async (value: string | number) => {
        const filtro = value.toString()
        const res = await api.get(`person/filter/${filtro}`)

        return res.data
    },
}
