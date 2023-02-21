import { ModelBusiness } from './ModelBusiness'
import { PropsModel } from '../types'

export function Model(page: string): PropsModel {
    switch (page) {
        case 'business':
            return ModelBusiness
            break
        default:
            return ModelBusiness
    }
}
