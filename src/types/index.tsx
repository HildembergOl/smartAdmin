/* eslint-disable @typescript-eslint/no-explicit-any */
export type UserType = { name: string; user: string }
export type ActionType = { type: string; payload: { [key: string]: any } }
export type SystemTypes = { version: string; date: string }
export type SidebarType = {
    sidebarOpen: boolean
}
export type ContextType = {
    state: InitialStateType
    dispatch: React.Dispatch<any>
}
export type InitialStateType = {
    user: UserType
    sidebar: SidebarType
    system: SystemTypes
}
