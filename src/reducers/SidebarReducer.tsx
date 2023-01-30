import { ActionType, SidebarType } from '../types'

export const sidebarInitialState: SidebarType = {
    sidebarOpen: true,
}
export const sidebarReducer = (state: SidebarType, action: ActionType) => {
    switch (action.type) {
        case 'CLOSE_SIDEBAR':
            return {
                ...state,
                sidebarOpen: action.payload.sidebar,
                menuOpen: action.payload.menu,
            }
        default:
            return state
    }
}
