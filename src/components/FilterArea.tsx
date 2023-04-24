import { useState } from 'react'

type PropsChildren = {
    children: React.ReactNode
}
export function FilterArea({ children }: PropsChildren) {
    const [hiddenFilter, setHiddenFilter] = useState(true)

    const handleClickFilter = () => {
        setHiddenFilter(!hiddenFilter)
    }

    return (
        <>
            <span
                className="my-2 ml-4 flex h-auto w-16 flex-row items-center justify-between font-semibold text-zinc-800"
                onClick={handleClickFilter}
                aria-hidden="true"
            >
                <p className="font-semibold text-gray-800">Filtros</p>
                <img
                    className={`h-4 w-auto ${
                        hiddenFilter ? '' : 'rotate-180'
                    } cursor-pointer rounded-full border-[0.5px] p-[2px] duration-300 ease-in-out`}
                    src="../../public/icons/seta.png"
                    alt="abrir/fechar"
                />
            </span>
            <div
                className={`${
                    hiddenFilter ? 'hidden' : false
                } ease mb-2 flex h-auto w-[25vw] flex-row rounded-md bg-slate-400 px-3 py-2 shadow-sm transition-shadow duration-700 max-sm:w-full max-sm:flex-col`}
            >
                {children}
            </div>
        </>
    )
}
