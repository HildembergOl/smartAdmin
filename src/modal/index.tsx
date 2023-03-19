import { BusinessEntry } from './BusinessEntry'

export function Model(page: string) {
    switch (page) {
        case 'business':
            return BusinessEntry
            break
        default:
            return BusinessEntry
    }
}
