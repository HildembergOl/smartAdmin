import { PropsDataSelect } from '../../types'

/* eslint-disable @typescript-eslint/no-explicit-any */
type PropsLabel = {
    name: string
    endpoint: string
    width: string
    value: string | number
    disabled: boolean
    data: PropsDataSelect[]
    page: string
    required: boolean
    onChangeValue: (e: any) => void
}

export function LabelSelect({
    name,
    endpoint,
    width,
    value,
    disabled,
    data,
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
                {`${name}${required ? '*' : ''}`}
            </label>
            <select
                id={`${page}_${endpoint}`}
                className="m-1 min-h-[1.63rem] rounded bg-slate-300 pl-1 font-semibold text-gray-700 shadow-sm shadow-slate-500 focus:no-underline focus:outline-none"
                disabled={disabled}
                name={endpoint}
                defaultValue={value || ''}
                onChange={(e) => onChangeValue(e)}
                required={required}
            >
                <option value="" disabled>
                    --
                </option>
                {data &&
                    data.map((item, index) => {
                        return (
                            <option
                                key={`select-${index * 1}`}
                                value={item.id ? item.id : item.value}
                                defaultValue={item.id ? item.id : item.value}
                            >
                                {item.value}
                            </option>
                        )
                    })}
            </select>
        </div>
    )
}
