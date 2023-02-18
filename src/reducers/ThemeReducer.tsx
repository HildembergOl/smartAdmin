import { ActionType, ThemeTypes } from '../types'

export const themeInitialState: ThemeTypes = {
    theme: 'light',
}
export const userReducer = (state: ThemeTypes, action: ActionType) => {
    switch (action.type) {
        case 'CHANGE_THEME':
            return {
                ...state,
                theme: action.payload.theme,
            }
            break
        default:
            return state
    }
}
