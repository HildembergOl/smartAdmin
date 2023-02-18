import { useContext } from 'react'
import { Context } from '../contexts'
import { Menu } from './Menu'

export function Sidebar() {
    const { state } = useContext(Context)

    return (
        <aside
            className={`flex ${
                state.sidebar.sidebarOpen ? 'w-60' : 'w-16'
            } flex h-full items-center overflow-y-auto rounded-r-2xl bg-zinc-700  shadow-lg  `}
            key="aside"
            aria-hidden="true"
        >
            <div className="h-full w-full flex-wrap items-center justify-between">
                <Menu idMenu={1} />
                <Menu idMenu={2} />
                <Menu idMenu={3} />
                <Menu idMenu={4} />
                <Menu idMenu={5} />
                <Menu idMenu={6} />
                <Menu idMenu={7} />
                <Menu idMenu={8} />
                <Menu idMenu={9} />
            </div>
        </aside>
    )
}
