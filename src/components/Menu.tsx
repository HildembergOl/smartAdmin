import { useContext, useState } from 'react'
import { Context } from '../contexts'
import { MenuItem } from './MenuItem'

type MenuProps = { idMenu: number }
type PermissionItem = {
    id: number
    menu: string
    img: string
}

export function Menu({ idMenu }: MenuProps) {
    const permissionItem: PermissionItem[] = [
        { id: 1, menu: 'Dashboard', img: 'dashboard' },
        { id: 2, menu: 'Cadastros', img: 'cadastro' },
        { id: 3, menu: 'Compras', img: 'compras' },
        { id: 4, menu: 'Pedidos', img: 'pedidos' },
        { id: 5, menu: 'Logistica', img: 'logistica' },
        { id: 6, menu: 'Contabilidade', img: 'contabilidade' },
        { id: 7, menu: 'Financeiro', img: 'financeiro' },
        { id: 8, menu: 'Marketing', img: 'marketing' },
        { id: 9, menu: 'Patrimonial', img: 'patrimonial' },
    ]

    const { state, dispatch } = useContext(Context)
    const [stateMenu, dispatchMenu] = useState(false)

    const handleClickMenu = () => {
        dispatchMenu(!stateMenu)
    }
    const handleClickItem = () => {
        dispatchMenu(!stateMenu)
        dispatch({
            type: 'CLOSE_SIDEBAR',
            payload: {
                sidebar: !state.sidebar.sidebarOpen,
                menu: true,
            },
        })
    }
    const menu = permissionItem.find((p) => (p.id === idMenu ? p : false))

    return !menu ? (
        <div className="hidden min-w-min" />
    ) : (
        <div key={`0${idMenu}`}>
            <div
                className="hover: relative flex min-w-min cursor-pointer flex-row items-center py-4 pr-3 pl-4 hover:rounded-r-2xl hover:bg-zinc-500"
                key={`1${idMenu}`}
                onClick={handleClickMenu}
                aria-hidden="true"
            >
                <img
                    className="h-5 w-auto cursor-pointer"
                    key={`2${idMenu}`}
                    src={`../../public/icons/${menu?.img}.png`}
                    alt=""
                />
                <div
                    className={`${
                        !state.sidebar.sidebarOpen && 'hidden'
                    } w-full origin-left cursor-pointer rounded-md pl-2 pr-7 text-sm font-medium text-gray-300 duration-200`}
                    aria-hidden="true"
                    key={`3${idMenu}`}
                >
                    {menu?.menu}
                </div>
            </div>
            <ul
                className={`${
                    (!stateMenu && 'hidden') ||
                    (!state.sidebar.sidebarOpen && 'hidden')
                } max-w-full flex-none origin-left flex-col pl-8`}
                key={`4${menu?.id}`}
            >
                <MenuItem key={`5${idMenu}`} handleCLick={handleClickItem}>
                    {idMenu}
                </MenuItem>
            </ul>
        </div>
    )
}
