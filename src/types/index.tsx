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
export type ThemeTypes = { theme: string }
export type ContextType = {
    state: InitialStateType
    dispatch: React.Dispatch<any>
}
export type InitialStateType = {
    user: UserType
    sidebar: SidebarType
    system: SystemTypes
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
    name: string
    column: string
    atributes: { [key: string]: string | boolean }
    type: string
    values: string | number | []
}

export type PropsModeltabs = { id: number; name: string }
