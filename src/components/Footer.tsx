import { useContext } from 'react'
import { Context } from '../contexts'

export function Footer() {
    const { state } = useContext(Context)
    return (
        <footer className="flex h-8 w-full justify-start rounded-tr-md bg-slate-700 shadow-lg">
            <div className="my-auto flex h-11 w-[40%] flex-row items-start justify-between p-2 pl-16 text-xs font-semibold text-slate-300 max-sm:w-full max-sm:text-[0.6rem] max-sm:pl-2">
                <p>
                    Código:{' '}
                    {state.system.idBusiness.toString().padStart(5, '0')}
                </p>
                <p>Empresa: {state.system.business}</p>
                <p>Usuário: {state.user.user}</p>
            </div>
        </footer>
    )
}
