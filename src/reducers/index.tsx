import { ActionType, InitialStateType } from '../types'
import { entryReducer } from './EntryReducer'
import { sidebarReducer } from './SidebarReducer'
import { systemReducer } from './SystemReducer'
import { userReducer } from './UserReducer'

export const mainReducer = (state: InitialStateType, action: ActionType) => ({
    system: systemReducer(state.system, action),
    user: userReducer(state.user, action),
    sidebar: sidebarReducer(state.sidebar, action),
    entry: entryReducer(state.entry, action),
})
