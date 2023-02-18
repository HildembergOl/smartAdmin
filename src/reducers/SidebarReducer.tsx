import { ActionType, SidebarType } from '../types'

export const sidebarInitialState: SidebarType = {
    sidebarOpen: false,
}
export const sidebarReducer = (state: SidebarType, action: ActionType) => {
    switch (action.type) {
        case 'CLOSE_SIDEBAR':
            return {
                ...state,
                sidebarOpen: action.payload.sidebar,
            }
        default:
            return state
    }
}
