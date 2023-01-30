import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../contexts'

type PropsChildren = { children: number; stateMenu: boolean }

export function MenuItem({ children, stateMenu }: PropsChildren) {
    const PermissionItemMenu = [
        { id: 1, idMenu: 1, title: 'Dashboard', src: 'dashboard' },
        { id: 2, idMenu: 1, title: 'Dashboard2', src: 'dashboard2' },
        { id: 3, idMenu: 2, title: 'Dashboard2', src: 'dashboard2' },
    ]
    const { state } = useContext(Context)

    return (
        <ul
            className={`${
                (!stateMenu || !state.sidebar.sidebarOpen) && 'hidden'
            } max-w-full flex-none origin-left flex-col pl-16`}
            key={children}
        >
            {PermissionItemMenu.map((data) => {
                if (data.idMenu === children) {
                    return (
                        <li
                            className={`text-sm font-semibold hover:bg-slate-100 hover:text-slate-900 `}
                            key={`6${data.id}`}
                        >
                            <Link to={data.src}>{data.title}</Link>
                        </li>
                    )
                }
                return <li key={`8${data.id}`} />
            })}
        </ul>
    )
}
