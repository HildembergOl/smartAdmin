import { Link } from 'react-router-dom'

type PropsChildren = { children: number }

export function MenuItem({ children }: PropsChildren) {
    const PermissionItemMenu = [
        { id: 1, idMenu: 1, title: 'Dashboard', src: '' },
        { id: 2, idMenu: 2, title: 'Pessoas', src: 'person' },
        { id: 3, idMenu: 2, title: 'Usuários', src: 'user' },
        { id: 4, idMenu: 2, title: 'Empresas', src: 'business' },
    ]

    return (
        <>
            {PermissionItemMenu.map((data) => {
                if (data.idMenu === children) {
                    return (
                        <Link
                            to={`/${data.src}`}
                            key={`link_${data.id}_${data.idMenu}`}
                            className="flex w-full flex-row justify-center"
                            replace
                        >
                            <img
                                src="../../public/icons/arrow.png"
                                alt="arrow"
                                className="h-5 w-auto"
                                key={`arrow_${data.id}_${data.idMenu}`}
                            />
                            <li
                                className={`w-full py-[2px] pl-1 text-sm font-semibold text-zinc-400 hover:bg-slate-300 hover:font-bold hover:text-slate-900 `}
                                key={`${data.id}_${data.idMenu}`}
                            >
                                {data.title}
                            </li>
                        </Link>
                    )
                }
                return null
            })}
        </>
    )
}
