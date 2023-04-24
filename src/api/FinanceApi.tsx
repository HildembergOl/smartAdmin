import api from './api'
import { PropsValueFinance } from '../types'

export const financeApi = {
    all: async () => {
        const res = await api.get(`finance`)

        return res.data
    },
    one: async (id: number) => {
        if (id > 1) {
            const res = await api.get(`finance/${id}`)

            return res.data
        }
        return { error: 'Id not exists' }
    },
    update: async (data: PropsValueFinance) => {
        const {
            id,
            type,
            status,
            entry,
            business,
            person,
            date,
            competence,
            expiration,
            payout,
            ammount,
            category,
            costCenter,
            account,
            obs,
        } = data
        const value = parseFloat(ammount.toString().replace(',', '.'))

        const res = await api.put(`finance/${data.id}`, {
            id,
            type,
            status,
            entry,
            business,
            person,
            date,
            competence,
            expiration,
            payout,
            ammount: value,
            category,
            costCenter,
            account,
            obs,
        })

        return res.data
    },
    insert: async (data: PropsValueFinance) => {
        const {
            id,
            type,
            status,
            entry,
            business,
            person,
            date,
            competence,
            expiration,
            payout,
            ammount,
            category,
            costCenter,
            account,
            obs,
        } = data
        const value = parseFloat(ammount.toString().replace(',', '.'))
        const res = await api
            .post(`finance`, {
                id,
                type,
                status,
                entry,
                business,
                person,
                date,
                competence,
                expiration,
                payout,
                ammount: value,
                category,
                costCenter,
                account,
                obs,
            })
            .then((r) => r.data)
            .catch((e) => e)
        return res
    },
    delete: async (data: PropsValueFinance) => {
        const { id } = data
        const res = await api.delete(`finance/${id}`)
        return res.data
    },
    filter: async (value: string | number) => {
        const param = { filtro: value.toString() }
        api.defaults.params = param
        const res = await api.get(`finance/filter`)
        return res.data
    },
}
