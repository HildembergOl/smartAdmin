import { DateParse } from '../../constants'

/* eslint-disable @typescript-eslint/no-explicit-any */
type PropsLabel = {
    name: string
    endpoint: string
    width: string
    value: string
    disabled: boolean
    type: string
    page: string
    required: boolean
    onChangeValue: (e: any) => void
}

export function LabelDate({
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
    const date = DateParse(value, 'back')
    return (
        <div
            className={`my-2 flex h-auto ${size()} max-w-full flex-col px-2 font-semibold max-sm:w-full`}
        >
            <label
                htmlFor={`${page}_${endpoint}`}
                className="mb-1 h-full w-full"
            >
                {`${name}${required ? '*' : ''}`}
            </label>
            <input
                type={type}
                id={`${page}_${endpoint}`}
                className="m-1 rounded bg-slate-300 pl-3 font-semibold text-gray-700 shadow-sm shadow-slate-500 focus:no-underline focus:outline-none"
                disabled={disabled}
                name={endpoint}
                defaultValue={date}
                required={required}
                onChange={(e) => onChangeValue(e)}
                aria-required
            />
        </div>
    )
}
