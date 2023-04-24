import { useContext } from 'react'
import { Context } from '../contexts'
import { Menu } from './Menu'
import { ArrowMenu } from './ButtonMenuOpen'

export function Sidebar() {
    const { state } = useContext(Context)

    return (
        <aside
            className={`flex ${
                state.sidebar.sidebarOpen
                    ? 'fixed z-10 w-60 min-w-[15rem] max-sm:w-full'
                    : 'w-16 min-w-[4rem] max-sm:hidden'
            } flex h-full flex-col items-center overflow-auto rounded-r-md bg-zinc-700 shadow-lg`}
            key="aside"
            aria-hidden="false"
        >
            <ArrowMenu />
            <div className="h-full w-full items-center justify-between">
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
