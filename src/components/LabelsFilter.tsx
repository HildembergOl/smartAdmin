/* eslint-disable @typescript-eslint/no-explicit-any */
type PropsType = {
    id: string
    name: string
    type: string
    onChangeValue: (e: any) => void
    value: string | number
}

export function LabelFilterText({
    id,
    name,
    type,
    onChangeValue,
    value,
}: PropsType) {
    return (
        <label htmlFor={id} className="flex h-auto w-full flex-col">
            <p className="pb-1 text-sm font-semibold text-gray-800">{name}</p>
            <input
                type={type}
                id={id}
                value={value}
                onChange={onChangeValue}
                className="rounded bg-slate-300 py-1 pl-3 shadow-sm shadow-slate-500 focus:no-underline focus:outline-none"
            />
        </label>
    )
}
