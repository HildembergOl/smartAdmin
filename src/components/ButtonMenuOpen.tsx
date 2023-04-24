import { useContext } from 'react'
import { Context } from '../contexts'

export function HamburguerMenu() {
    const genericHamburgerLine = `h-2 w-full rounded bg-slate-300 transition ease transform duration-300`

    const { state, dispatch } = useContext(Context)

    const handleClick = () => {
        dispatch({
            type: 'CLOSE_SIDEBAR',
            payload: {
                sidebar: !state.sidebar.sidebarOpen,
                menu: true,
            },
        })
    }
    return (
        <div
            className="hidden h-5 w-10 flex-col items-start justify-start rounded px-2 max-md:flex"
            onClick={handleClick}
            aria-hidden="true"
        >
            <div
                className={`${genericHamburgerLine} ${
                    state.sidebar.sidebarOpen
                        ? 'm-0 translate-x-3 rotate-180 opacity-50 group-hover:opacity-100'
                        : 'opacity-50 group-hover:opacity-100'
                }`}
            />
            <div
                className={`my-[0.3rem] ${genericHamburgerLine} ${
                    state.sidebar.sidebarOpen
                        ? 'opacity-100'
                        : 'opacity-50 group-hover:opacity-100'
                }`}
            />
            <div
                className={`${genericHamburgerLine} ${
                    state.sidebar.sidebarOpen
                        ? 'm-0 translate-x-3 -rotate-180 opacity-50 group-hover:opacity-100'
                        : 'opacity-50 group-hover:opacity-100'
                }`}
            />
        </div>
    )
}

export function ArrowMenu() {
    const { state, dispatch } = useContext(Context)
    const handleClick = () => {
        dispatch({
            type: 'CLOSE_SIDEBAR',
            payload: {
                sidebar: !state.sidebar.sidebarOpen,
                menu: true,
            },
        })
    }

    return (
        <div
            className={`fixed z-10 ${
                state.sidebar.sidebarOpen ? '-mr-60' : '-mr-16'
            } mt-4 rounded-full border-none bg-zinc-600 max-md:hidden`}
            onClick={handleClick}
            aria-hidden
        >
            <img
                className={`h-5 w-auto ${
                    state.sidebar.sidebarOpen ? 'rotate-180' : 'rotate-0'
                } cursor-pointer p-1 grayscale duration-300 ease-in-out`}
                src="../../public/icons/fastfoward.png"
                alt="abrir/fechar"
            />
        </div>
    )
}
