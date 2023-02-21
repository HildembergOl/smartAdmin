/* eslint-disable @typescript-eslint/no-explicit-any */
type PropsType = {
    id: string
    name: string
    type: string
    onChangeValue: (e: any) => void
}

export function LabelFilterText({ id, name, type, onChangeValue }: PropsType) {
    return (
        <label htmlFor={id} className="flex h-auto w-full flex-col">
            <p className="pb-1 text-sm font-semibold text-gray-800">{name}</p>
            <input
                type={type}
                id={id}
                onChange={onChangeValue}
                className="rounded bg-slate-300 py-1 pl-3 shadow-sm shadow-slate-500 focus:no-underline focus:outline-none"
            />
        </label>
    )
}

export function LabelFilterSelect() {
    return (
        <label htmlFor="situation" className="flex h-auto w-full flex-col">
            <p className="text-sm font-semibold text-gray-800">Situação</p>
            <select
                id="situacao"
                className="m-1 rounded bg-slate-300 font-semibold text-gray-700 shadow-sm shadow-slate-500 focus:no-underline focus:outline-none"
            >
                <option value="">Todos</option>
                <option value="active">Ativos</option>
                <option value="inactive">Inativos</option>
                <option value="blocked">Bloqueados</option>
            </select>
        </label>
    )
}
