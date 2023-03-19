/* eslint-disable @typescript-eslint/no-explicit-any */
type PropsLabel = {
    name: string
    endpoint: string
    width: string
    value: string | number
    disabled: boolean
    type: string
    page: string
    required: boolean
    onChangeValue: (e: string) => void
}

export function LabelText({
    name,
    endpoint,
    width,
    value,
    disabled,
    type,
    page,
    required,
    onChangeValue,
}: PropsLabel) {
    const size = () => {
        if (width === 'small') {
            return 'w-32'
        }
        if (width === 'average') {
            return 'w-48'
        }
        if (width === 'big') {
            return 'w-96'
        }
        return ''
    }

    return (
        <div
            className={`my-2 flex h-auto ${size()} max-w-full flex-col px-2 font-semibold max-sm:w-full`}
        >
            <label
                htmlFor={`${page}_${endpoint}`}
                className="mb-1 h-full w-full"
            >
                {name}
            </label>
            <input
                type={type}
                id={`${page}_${endpoint}`}
                className="h-full w-full items-center justify-center rounded bg-slate-300 py-1 pl-3 text-start font-normal shadow-sm shadow-slate-500 focus:no-underline focus:outline-none"
                disabled={disabled}
                name={endpoint}
                defaultValue={value}
                required={required}
                onChange={(e) => onChangeValue(e.target.value)}
            />
        </div>
    )
}
