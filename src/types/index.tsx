/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
export type UserType = { name: string; user: string }
export type ActionType = { type: string; payload: { [key: string]: any } }
export type SystemTypes = {
    version: string
    idBusiness: number
    business: string
}
export type SidebarType = {
    sidebarOpen: boolean
}
export type EntryType = {
    open: boolean
    id: number
}
export type ThemeTypes = { theme: string }
export type ContextType = {
    state: InitialStateType
    dispatch: React.Dispatch<any>
}
export type InitialStateType = {
    user: UserType
    sidebar: SidebarType
    system: SystemTypes
    entry: EntryType
}
export type InitialThemeType = {
    theme: ThemeTypes
}
export type PropsModel = {
    name: string
    endpoint: string
    tabs: PropsModeltabs[]
    values: PropsModelValues[]
}

export type PropsModelValues = {
    id: number
    idTab: number
    width: string
    name: string
    column: string
    atributes: { [key: string]: string | boolean }
    type: string
    values: string | number | []
}

export type PropsModeltabs = { id: number; name: string }

export type PropsValuesBusiness = {
    id: number | string
    status: string
    nameBusiness: string
    tradeName: string
    businessCNPJ: string
    stateRegister: string
    postCodeBusiness: string
    addressBusiness: string
    numberAddressBusiness: string
    districtBusiness: string
    cityBusiness: string
    stateBusiness: string
    groupId: number
    group: PropsGroup
}
export type PropsValuesPerson = {
    id: number | string
    status: string
    namePerson: string
    tradeName: string
    document: string
    numberRegister: string
    phone: string
    postCode: string
    address: string
    numberAddress: string
    codDistrict: number
    district: string
    city: string
    state: string
    addressComplement: string
}
export type BuscaCEPValues = {
    cep: string
    logradouro: string
    complemento: string
    bairro: string
    localidade: string
    uf: string
    ibge: string
    gia: string
    ddd: string
    siafi: string
    erro: boolean
}

export type PropsValuesUser = {
    id: number | string
    status: string
    login: string
    password: string
    email: string
    userType: string
    personId: string
    Person: PropsValuesPerson
}
export type PropsGroup = {
    id: number
    situation: string
    groupName: string
    obs: string
    parent: number
}
export type PropsValueFinance = {
    id: number
    type: string
    status: number
    statusV: PropsGroup
    entry: number
    business: number
    businessV: PropsValuesBusiness
    person: number
    personV: PropsValuesPerson
    date: string
    competence: string
    expiration: string
    days: number
    payout: string
    ammount: number
    category: number
    categoryV: PropsGroup
    costCenter: number
    costCenterV: PropsGroup
    account: number
    accountV: PropsGroup
    obs: string
}

export type PropsDataSelect = {
    id?: number
    value: string
}
