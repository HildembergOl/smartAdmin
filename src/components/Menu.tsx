import { useContext, useState } from 'react'
import { Context } from '../contexts'
import { MenuItem } from './MenuItem'

export function Menu() {
    type PropsPermission = { id: number; menu: string; img: string }

    const permissionItem: PropsPermission[] = [
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
    const { state } = useContext(Context)

    const [stateMenu, dispachMenu] = useState(true)

    // const classUL = `pt-6`
    // const classImg = `p-1`
    // classDiv = `bg1`
    return (
        <>
            {permissionItem.map((data) => {
                return (
                    <div key={`1${data.id}`}>
                        <div
                            className="relative flex flex-row py-4 pl-6 hover:bg-gray-600"
                            key={`2${data.id}`}
                            aria-hidden="true"
                        >
                            <img
                                className="h-8 w-auto"
                                key={`3${data.id}`}
                                src={`../../public/${data.img}.png`}
                                alt=""
                            />
                            <div
                                className={`${
                                    !state.sidebar.sidebarOpen && 'hidden'
                                } max-w-full origin-left cursor-pointer rounded-md pl-2 text-base font-semibold text-gray-300 duration-200`}
                                onClick={() => {
                                    dispachMenu(!stateMenu)
                                }}
                                aria-hidden="true"
                                key={`4${data.id}`}
                            >
                                {data.menu}
                            </div>
                        </div>
                        <MenuItem stateMenu={stateMenu}>{data.id}</MenuItem>
                    </div>
                )
            })}
        </>
    )
}
