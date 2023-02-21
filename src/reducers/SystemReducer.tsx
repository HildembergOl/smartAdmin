import { ActionType, SystemTypes } from '../types'

export const systemInitialState: SystemTypes = {
    version: '1.0.0',
    idBusiness: 1,
    business: 'Mix Logistica Integrada',
}
export const systemReducer = (state: SystemTypes, action: ActionType) => {
    switch (action.type) {
        case 'CHANGE_VERSION':
            return {
                ...state,
                version: action.payload.version,
            }
            break
        case 'CHANGE_BUSINESS':
            return {
                ...state,
                idBusiness: action.payload.idBusiness,
                business: action.payload.business,
            }
            break
        default:
            return state
    }
}
