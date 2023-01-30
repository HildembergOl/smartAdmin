import { useContext } from 'react'
import { Context } from '../contexts'

export function HamburguerMenu() {
    const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-slate-300 transition ease transform duration-300`

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
            className="group flex h-8 w-8 flex-col items-center rounded"
            onClick={handleClick}
            aria-hidden="true"
        >
            <div
                className={`${genericHamburgerLine} ${
                    state.sidebar.sidebarOpen
                        ? 'translate-x-3 rotate-180 opacity-50 group-hover:opacity-100'
                        : 'opacity-50 group-hover:opacity-100'
                }`}
            />
            <div
                className={`${genericHamburgerLine} ${
                    state.sidebar.sidebarOpen
                        ? 'opacity-100'
                        : 'opacity-50 group-hover:opacity-100'
                }`}
            />
            <div
                className={`${genericHamburgerLine} ${
                    state.sidebar.sidebarOpen
                        ? 'translate-x-3 -rotate-180 opacity-50 group-hover:opacity-100'
                        : 'opacity-50 group-hover:opacity-100'
                }`}
            />
        </div>
    )
}
