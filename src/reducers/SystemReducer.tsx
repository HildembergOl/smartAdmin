import { ActionType, SystemTypes } from '../types'

export const systemInitialState: SystemTypes = {
    version: '1.0.0',
    date: '',
}
export const systemReducer = (state: SystemTypes, action: ActionType) => {
    switch (action.type) {
        case 'CHANGE_VERSION':
            return {
                ...state,
                version: action.payload.version,
            }
            break
        case 'CHANGE_DATE':
            return {
                ...state,
                date: action.payload.date,
            }
            break
        default:
            return state
    }
}
