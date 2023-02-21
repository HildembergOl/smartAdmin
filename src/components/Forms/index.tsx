import { LabelText } from './LabelForms'
import { PropsModelValues } from '../../types'

type Props = {
    type: string
    data: PropsModelValues
    page: string
}

export function Label({ type, data, page }: Props) {
    switch (type) {
        case 'text':
            return <LabelText data={data} type={type} page={page} />
            break
        default:
            return <LabelText data={data} type={type} page={page} />
    }
}
