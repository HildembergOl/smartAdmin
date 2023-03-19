/* eslint-disable no-console */
import axios from 'axios'
import { PropsValuesBusiness } from '../types'
import api from './api'

export const Business = {
    all: async () => {
        const res = await api.get('business')
        return res
    },
    one: async (id: number) => {
        if (id > 1) {
            const res = await api.get(`business/${id}`)
            return res
        }
        return {}
    },
    update: async (data: PropsValuesBusiness) => {
        const res = await api.put(`business/${data.id}`, data)
        return res
    },
    insert: async (data: PropsValuesBusiness) => {
        const res = await api.post<PropsValuesBusiness>('business', data)
        return res
    },
    delete: async (id: string) => {
        const res = await axios
            .delete(`business/${id}`)
            .then((response) => console.log(response))
            .catch((error) => console.error(error))
        return res
    },
}
