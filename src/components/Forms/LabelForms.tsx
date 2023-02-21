/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import { PropsModelValues } from '../../types'

type Props = {
    type: string
    data: PropsModelValues
    page: string
}
export function LabelText({ type, data, page }: Props) {
    const { column, name, values } = data

    const [value, setValue] = useState('')

    const changeValue = (e: any) => {
        setValue(e.target.value)
    }
    const initialValue = page === 'edit' ? values : value
    // eslint-disable-next-line no-console
    console.log(initialValue)
    return (
        <label
            htmlFor={column}
            className="m-2 flex h-16 w-[25vw] flex-col justify-between bg-slate-300"
        >
            <p className="h-full w-full from-neutral-400 font-semibold">
                {name}
            </p>
            <input
                type={type}
                id={column}
                onChange={changeValue}
                value={initialValue}
                className="rounded bg-slate-400 py-1 pl-3 shadow-sm focus:no-underline focus:outline-none"
            />
        </label>
    )
}
