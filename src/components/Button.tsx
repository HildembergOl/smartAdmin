type PropsButtonAction = {
    handleClick: () => void
}

export function ButtonNew({ handleClick }: PropsButtonAction) {
    return (
        <div
            className="flex h-8 w-16 flex-row items-center justify-center pl-2"
            placeholder="Novo registro"
        >
            <div
                className="mb-1 flex h-6 w-12 items-center justify-center py-2"
                onClick={handleClick}
                aria-hidden
            >
                <div className="flex h-5 w-10 cursor-pointer items-center justify-around rounded bg-[#35b356] p-1 font-semibold text-slate-200 shadow-md duration-200 ease-in-out hover:h-6 hover:w-12">
                    <img
                        className="h-[100%] w-auto"
                        src="../../public/icons/new.png"
                        alt="Novo registro"
                    />
                </div>
            </div>
        </div>
    )
}

export function ButtonEdit({ handleClick }: PropsButtonAction) {
    return (
        <div
            className="mb-1 flex h-6 w-12 items-center justify-center py-2"
            onClick={handleClick}
            aria-hidden
        >
            <div className="flex h-5 w-10 cursor-pointer items-center justify-around rounded bg-[#e9c460] p-1 font-semibold text-slate-200 shadow-md duration-200 ease-in-out hover:h-6 hover:w-12 ">
                <img
                    className="h-[100%] w-auto"
                    src="../../public/icons/edit.png"
                    alt="editar"
                />
            </div>
        </div>
    )
}
export function ButtonDelete({ handleClick }: PropsButtonAction) {
    return (
        <div
            className="mb-1 flex h-6 w-12 items-center justify-center py-2"
            onClick={handleClick}
            aria-hidden
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
