import { Link } from 'react-router-dom'

type PropsButtonAction = { id: number }

export function Button() {
    return (
        <div className="ml-3 flex w-1/3 flex-row items-start py-4 max-md:w-full">
            <div className="mr-3 w-20 cursor-pointer items-center rounded-md bg-lime-500 py-[2px] px-4 font-semibold shadow shadow-slate-500">
                NameButton
            </div>
        </div>
    )
}

export function ButtonNew() {
    return (
        <Link to="new">
            <div
                className="flex h-8 w-16 flex-row items-center justify-center pl-2"
                placeholder="Novo registro"
            >
                <div className="mb-1 flex h-6 w-12 items-center justify-center py-2">
                    <div className="flex h-5 w-10 cursor-pointer items-center justify-around rounded bg-[#35b356] p-1 font-semibold text-slate-200 shadow-md duration-200 ease-in-out hover:h-6 hover:w-12">
                        <img
                            className="h-[100%] w-auto"
                            src="../../public/icons/new.png"
                            alt="Novo registro"
                        />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export function ButtonEdit({ id }: PropsButtonAction) {
    return (
        <Link to={`edit/${id}`}>
            <div
                className="mb-1 flex h-6 w-12 items-center justify-center py-2"
                defaultValue={id}
            >
                <div className="flex h-5 w-10 cursor-pointer items-center justify-around rounded bg-[#e9c460] p-1 font-semibold text-slate-200 shadow-md duration-200 ease-in-out hover:h-6 hover:w-12 ">
                    <img
                        className="h-[100%] w-auto"
                        src="../../public/icons/edit.png"
                        alt="editar"
                    />
                </div>
            </div>
        </Link>
    )
}
export function ButtonDelete({ id }: PropsButtonAction) {
    return (
        <div
            className="mb-1 flex h-6 w-12 items-center justify-center py-2"
            defaultValue={id}
        >
            <div className="flex h-5 w-10 cursor-pointer items-center justify-around rounded bg-[#e8564a] p-1 font-semibold text-slate-200 shadow-md duration-200 ease-in-out hover:h-6 hover:w-12">
                <img
                    className="h-[100%] w-auto"
                    src="../../public/icons/delete.png"
                    alt="excluir"
                />
            </div>
        </div>
    )
}
