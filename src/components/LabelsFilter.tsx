/* eslint-disable @typescript-eslint/no-explicit-any */
type PropsType = {
    id: string
    name: string
    type: string
    onChangeValue: (e: any) => void
}

export function LabelFilterText({ id, name, type, onChangeValue }: PropsType) {
    /*
    const [value, setValue] = useState('')
    const onChangeValue = (e: {
        target: { value: SetStateAction<string> }
    }) => {
        setValue(e.target.value)
        // eslint-disable-next-line no-console
        console.log(e.target.value)
    } */

    return (
        <label
            htmlFor={id}
            className="m-1 flex h-auto w-1/5 flex-col max-sm:w-[80%]"
        >
            <p className="text-sm font-semibold text-gray-800">{name}</p>
            <input
                type={type}
                id={id}
                onChange={onChangeValue}
                // value={value}
                className="m-1 rounded bg-slate-300 pl-2 shadow-sm shadow-slate-500 focus:no-underline focus:outline-none"
            />
        </label>
    )
}

export function LabelFilterSelect() {
    return (
        <label
            htmlFor="situation"
            className="m-1 flex h-auto w-1/5 flex-col max-sm:w-[80%]"
        >
            <p className="text-sm font-semibold text-gray-800">Situação</p>
            <select
                id="situacao"
                className="m-1 rounded bg-slate-300 pl-2 font-semibold text-gray-700 shadow-sm shadow-slate-500 focus:no-underline focus:outline-none"
            >
                <option value="">Todos</option>
                <option value="active">Ativos</option>
                <option value="inactive">Inativos</option>
                <option value="blocked">Bloqueados</option>
            </select>
        </label>
    )
}
