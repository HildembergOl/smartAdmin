import { useContext } from 'react'
import { Context } from '../contexts'
import { Menu } from './Menu'

export function Sidebar() {
    const { state } = useContext(Context)

    return (
        <aside
            key="_"
            className={`flex w-72 ${
                state.sidebar.sidebarOpen ? 'w-72' : 'w-20'
            } flex h-screen flex-col rounded-r-2xl bg-slate-500 shadow-lg`}
            aria-hidden="true"
        >
            <Menu />
        </aside>
    )
}
