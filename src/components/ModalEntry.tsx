import { useLocation } from 'react-router-dom'
import { Model } from '../model'

export function ModalEntry() {
    const location = useLocation()
    const urlParams = location.pathname.substring(1).split('/')
    const page = urlParams[0] as string
    const type = urlParams[1] as string
    const id = urlParams[2] as string

    const cab = () => {
        if (type === 'edit') {
            return `Editar `
        }
        if (type === 'new') {
            return `Cadastrar`
        }
        return ''
    }
    const cabFull = cab()

    return (
        <div className="flex h-full w-full flex-col p-1">
            <p className="flex w-full flex-row items-center justify-start text-xl font-semibold">
                {cabFull}
            </p>
            {Model(page)}
        </div>
    )
}
