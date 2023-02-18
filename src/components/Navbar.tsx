import { useContext } from 'react'
import { Context } from '../contexts'
import { HamburguerMenu } from './HamburguerMenu'

export function Navbar() {
    const date: Date = new Date()
    const year: string = date.getFullYear().toString()
    const month: string = (date.getMonth() + 1).toString().padStart(2, '0')
    const day: string = date.getDate().toString().padStart(2, '0')
    const dateFormated = `${day}/${month}/${year}`

    const { state } = useContext(Context)
    return (
        <nav className="w-full rounded-br-md bg-slate-700 shadow-lg  ">
            <div className="mx-auto px-4 ">
                <div className="relative flex h-16 items-center justify-between">
                    <HamburguerMenu />
                    <img
                        className="m-1 block h-24 w-auto"
                        src="../../public/icons/logo.png"
                        alt="Your Company"
                    />
                    <div className="h-auto w-auto break-all p-2 text-xs font-bold text-slate-300">
                        <p>Usuário: {state.user.user}</p>
                        <p>Data: {dateFormated}</p>
                        <p>Versão: {state.system.version}</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}
