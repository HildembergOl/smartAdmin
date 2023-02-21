import { PropsModel } from '../types'

export const ModelBusiness: PropsModel = {
    name: 'Empresa',
    endpoint: 'business',
    tabs: [
        { id: 1, name: 'Dados Básicos' },
        { id: 2, name: 'Empresarial' },
    ],
    values: [
        {
            id: 1,
            idTab: 1,
            name: 'Código Empresa',
            column: 'idBusiness',
            atributes: { disabled: true },
            type: 'text',
            values: '',
        },
        {
            id: 2,
            idTab: 1,
            name: 'Nome Empresa',
            column: 'nameBusiness',
            atributes: { disabled: true },
            type: 'text',
            values: '',
        },
    ],
}
