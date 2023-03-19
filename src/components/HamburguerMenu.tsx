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
            className="group mr-4 flex h-5 w-10 flex-col items-start justify-start rounded px-2"
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
