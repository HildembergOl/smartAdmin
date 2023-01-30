import { ActionType, UserType } from '../types'

export const userInitialState: UserType = {
    name: 'Hildemberg Oliveira',
    user: 'Hildemberg',
}
export const userReducer = (state: UserType, action: ActionType) => {
    switch (action.type) {
        case 'CHANGE_USER':
            return {
                ...state,
                name: action.payload.name,
                user: `@${action.payload.name}`,
            }
            break
        default:
            return state
    }
}
