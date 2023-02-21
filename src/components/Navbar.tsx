import { useContext } from 'react'
import { Context } from '../contexts'
import { HamburguerMenu } from './HamburguerMenu'

export function Navbar() {
    const { state } = useContext(Context)
    return (
        <nav className="h-16 w-full rounded-br-md bg-slate-700 shadow-lg  ">
            <div className="mx-auto h-auto w-full px-4 ">
                <div className="flex h-16 items-center justify-between">
                    <HamburguerMenu />
                    <img
                        className="my-auto h-11 w-auto"
                        src="../../public/icons/logo.png"
                        alt="Smart Admin"
                    />
                    <div className="my-auto flex h-11 w-auto flex-col items-start justify-center p-2 text-xs font-semibold text-slate-300">
                        <p>
                            Código:{' '}
                            {state.system.idBusiness
                                .toString()
                                .padStart(5, '0')}
                        </p>
                        <p>Empresa: {state.system.business}</p>
                        <p>Usuário: {state.user.user}</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}
