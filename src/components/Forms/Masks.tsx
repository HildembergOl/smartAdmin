/* eslint-disable no-console */
import { ChangeEvent } from 'react'
import { ValueParse } from '../../constants'

type PropsMask = {
    eventInput: ChangeEvent<HTMLInputElement>
    type: string
}

export const MasksConfig = {
    CEP: (e: ChangeEvent<HTMLInputElement>) => {
        e.currentTarget.maxLength = 10
        let { value } = e.currentTarget
        value = value.replace(/\D/g, '')
        value = value.replace(/^(\d{2})(\d)/, '$1.$2')
        value = value.replace(/(\d{3})(\d)/, '$1-$2')
        value = value.replace(/(\d{3})(\d)/, '$1')
        e.currentTarget.value = value
        return e
    },
    CNPJ: (e: ChangeEvent<HTMLInputElement>) => {
        e.currentTarget.maxLength = 18
        let { value } = e.currentTarget

        value = value.replace(/\D/g, '')
        value = value.replace(/(\d{2})(\d)/, '$1.$2')
        value = value.replace(/(\d{3})(\d)/, '$1.$2')
        value = value.replace(/(\d{3})(\d)/, '$1/$2')
        value = value.replace(/(\d{4})(\d)/, '$1-$2')
        value = value.replace(/(-\d{2})\d+?$/, '$1')

        e.currentTarget.value = value
        return e
    },
    CPF: (e: ChangeEvent<HTMLInputElement>) => {
        e.currentTarget.maxLength = 14
        let { value } = e.currentTarget

        value = value.replace(/\D/g, '')
        value = value.replace(/(\d{3})(\d)/, '$1.$2')
        value = value.replace(/(\d{3})(\d)/, '$1.$2')
        value = value.replace(/(\d{3})(\d)/, '$1-$2')
        value = value.replace(/(-\d{2})\d+?$/, '$1')

        e.currentTarget.value = value
        return e
    },
    PHONE: (e: ChangeEvent<HTMLInputElement>) => {
        e.currentTarget.maxLength = 15
        let { value } = e.currentTarget
        if (value.length < 15) {
            value = value.replace(/\D/g, '')
            value = value.replace(/(\d{2})(\d)/, '($1) $2')
            value = value.replace(/(\d{4})(\d)/, '$1-$2')
            value = value.replace(/(-\d{4})\d+?$/, '$1')
        }
        if (value.length === 15) {
            value = value.replace(/\D/g, '')
            value = value.replace(/(\d{2})(\d)/, '($1) $2')
            value = value.replace(/(\d{5})(\d)/, '$1-$2')
            value = value.replace(/(-\d{4})\d+?$/, '$1')
        }

        e.currentTarget.value = value
        return e
    },
    CPF_CNPJ: (e: ChangeEvent<HTMLInputElement>) => {
        e.currentTarget.maxLength = 18
        let { value } = e.currentTarget
        if (value.length < 14) {
            value = value.replace(/\D/g, '')
            value = value.replace(/(\d{3})(\d)/, '$1.$2')
            value = value.replace(/(\d{3})(\d)/, '$1.$2')
            value = value.replace(/(\d{3})(\d)/, '$1-$2')
            value = value.replace(/(-\d{2})\d+?$/, '$1')
        }
        if (value.length > 14) {
            value = value.replace(/\D/g, '')
            value = value.replace(/(\d{2})(\d)/, '$1.$2')
            value = value.replace(/(\d{3})(\d)/, '$1.$2')
            value = value.replace(/(\d{3})(\d)/, '$1/$2')
            value = value.replace(/(\d{4})(\d)/, '$1-$2')
            value = value.replace(/(-\d{2})\d+?$/, '$1')
        }

        e.currentTarget.value = value
        return e
    },
    VALOR: (e: ChangeEvent<HTMLInputElement>) => {
        e.currentTarget.maxLength = 15
        let { value } = e.currentTarget
        value = value.replace('R$ ', '')
        e.currentTarget.value = value
        return e
    },
}
export function Masks({ eventInput, type }: PropsMask) {
    if (type === 'CEP') {
        return MasksConfig.CEP(eventInput)
    }
    if (type === 'CNPJ') {
        return MasksConfig.CNPJ(eventInput)
    }
    if (type === 'CPF') {
        return MasksConfig.CPF(eventInput)
    }
    if (type === 'PHONE') {
        return MasksConfig.PHONE(eventInput)
    }
    if (type === 'CPF_CNPJ') {
        return MasksConfig.CPF_CNPJ(eventInput)
    }
    if (type === 'VALOR') {
        return MasksConfig.VALOR(eventInput)
    }
    return eventInput
}
