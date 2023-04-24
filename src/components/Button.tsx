/* eslint-disable @typescript-eslint/no-explicit-any */
import { Loading } from './Loading'

type PropsButtonAction = {
    handleClick: () => void
}
type PropsButtonRefresh = {
    handleClick: () => void
    refreshing: boolean
}
type PropsButtonSubmit = {
    disabled: boolean
    loading: boolean
    type: string[]
    submit: (e: any) => void
}
type PropsButtonPage = {
    onClickNew: () => void
    onClickRefresh: () => void
    refresh: boolean
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
                <div className="flex h-5 w-10 cursor-pointer items-center justify-around rounded bg-[#35b356] p-1 text-sm font-semibold text-slate-200 shadow-md duration-200 ease-in-out hover:h-6 hover:w-12 hover:text-lg">
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
export function ButtonRefresh({ handleClick, refreshing }: PropsButtonRefresh) {
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
                <div className="flex h-5 w-10 cursor-pointer items-center justify-around rounded bg-[#FEA050] p-1 text-sm font-semibold text-slate-200 shadow-md duration-200 ease-in-out hover:h-6 hover:w-12 hover:text-lg">
                    <img
                        className={`${
                            refreshing ? 'animate-spin' : ''
                        } h-[100%] w-auto`}
                        src="../../public/icons/refresh.png"
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
export function Submit({ disabled, loading, type, submit }: PropsButtonSubmit) {
    const submitType = type[0]
    const typePage = type[1]

    const buttonConfig = () => {
        if (disabled) {
            return 'bg-gray-400 text-gray-600'
        }
        if (submitType === 'Cadastrar') {
            return 'bg-[#35b356] text-slate-200'
        }
        if (submitType === 'Excluir') {
            return 'bg-[#e8564a] text-slate-200'
        }
        if (submitType === 'Editar') {
            return 'bg-[#e9c460] text-slate-200 '
        }
        return null
    }
    const config = buttonConfig()

    return (
        <div className="flex flex-row items-center justify-start">
            <div className="flex h-10 w-28 flex-row items-center justify-center">
                <button
                    disabled={disabled}
                    className={`${
                        loading ? 'w-24 hover:w-28 ' : 'w-20  hover:w-24'
                    }
                    ${config} mt-3 flex h-8 cursor-pointer items-center justify-around rounded p-1 text-sm font-semibold shadow-md duration-200 ease-in-out hover:h-9  hover:text-base`}
                    type="submit"
                    onClick={submit}
                >
                    Confirmar
                    {loading && <Loading width="small" information={false} />}
                </button>
            </div>
            {submitType === 'Cadastrar' && (
                <p className="items-baseline">
                    Ao confirmar você irá realizar o cadastro do(a) {typePage}.
                </p>
            )}
            {submitType === 'Editar' && (
                <p className="items-baseline">
                    Ao confirmar você irá editar o cadastro do(a) {typePage}.
                </p>
            )}
            {submitType === 'Excluir' && (
                <p className="items-baseline">
                    Ao confirmar você irá excluir o cadastro do(a) {typePage}.{' '}
                    <strong>Atenção: Essa ação não poderá ser desfeita.</strong>
                </p>
            )}
        </div>
    )
}

export function ButtonActionsPage({
    onClickNew,
    onClickRefresh,
    refresh,
}: PropsButtonPage) {
    return (
        <div className="flex max-h-[3rem] min-h-[3rem] min-w-[6rem] max-w-[6rem] flex-row content-between items-center justify-between">
            <ButtonNew handleClick={onClickNew} />
            <ButtonRefresh handleClick={onClickRefresh} refreshing={refresh} />
        </div>
    )
}
