/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent } from 'react'
import { Masks } from './Masks'

type PropsLabel = {
    name: string
    endpoint: string
    width: string
    disabled: boolean
    page: string
    required: boolean
}

export function LabelFiles({
    name,
    endpoint,
    width,
    disabled,
    page,
    required,
}: PropsLabel) {
    const size = () => {
        if (width === 'small') {
            return 'w-32'
        }
        if (width === 'average') {
            return 'w-48'
        }
        if (width === 'big') {
            return 'w-80'
        }
        return ''
    }
    return (
        <div
            className={`my-2 flex h-auto ${size()} max-w-full flex-col px-2 font-semibold max-sm:w-full`}
        >
            <label
                htmlFor={`${page}_${endpoint}`}
                className="mb-2 h-full w-full"
            >
                {`${name}${required ? '*' : ''}`}
            </label>
            <input
                type="file"
                id={`${page}_${endpoint}`}
                className="h-auto min-h-[1.63rem] w-full  items-center justify-center rounded bg-slate-300 py-0 pl-3 text-start text-sm font-normal shadow-sm shadow-slate-500 focus:no-underline focus:outline-none"
                disabled={disabled}
                name={endpoint}
                required={required}
                aria-required
                multiple
            />
        </div>
    )
}
