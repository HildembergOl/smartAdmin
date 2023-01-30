import React, { createContext, useMemo, useReducer } from 'react'
import { mainReducer } from '../reducers'
import { sidebarInitialState } from '../reducers/SidebarReducer'
import { systemInitialState } from '../reducers/SystemReducer'
import { userInitialState } from '../reducers/UserReducer'
import { ContextType, InitialStateType } from '../types'

const initialState: InitialStateType = {
    user: userInitialState,
    sidebar: sidebarInitialState,
    system: systemInitialState,
}

export const Context = createContext<ContextType>({
    state: initialState,
    dispatch: () => null,
})

type ChildenProps = { children: React.ReactNode }

export function ContextProvider({ children }: ChildenProps) {
    const [state, dispatch] = useReducer(mainReducer, initialState)

    const reducer = useMemo(() => ({ state, dispatch }), [state, dispatch])

    return <Context.Provider value={reducer}>{children}</Context.Provider>
}
