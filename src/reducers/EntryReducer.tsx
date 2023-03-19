import { ActionType, EntryType } from '../types'

export const entryInitialState: EntryType = {
    open: false,
    id: -1,
}
export const entryReducer = (state: EntryType, action: ActionType) => {
    switch (action.type) {
        case 'EDIT_ENTRY':
            return {
                ...state,
                open: action.payload.open,
                id: action.payload.id,
            }
        default:
            return state
    }
}
