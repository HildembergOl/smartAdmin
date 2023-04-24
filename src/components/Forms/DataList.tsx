/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from 'react'
import api from '../../api/api'

type PropsDataList = {
    name: string
    endpoint: string
    column: string
    dataValue: string | number // id-name (FORMAT)
    disabled: boolean
    placeholder: string
    onSelectValue: (e: number) => void
    options: { name: string; endpoint: string }[]
    required: boolean
}

export function DataList({
    name,
    endpoint,
    column,
    dataValue,
    disabled,
    placeholder,
    onSelectValue,
    options,
    required,
}: PropsDataList) {
    const [datalist, setDataList] = useState([])
    const [valueInput, setValueInput] = useState('')

    const handleClickValue = (item: any) => {
        const v = item[column]
        setValueInput(v)
        setDataList([])
        onSelectValue(item.id)
    }

    const getValue = useCallback(async () => {
        if (dataValue) {
            const req = await api.get(`${endpoint}/${dataValue}`)
            return req.data
        }
        return ''
    }, [dataValue, endpoint])

    const getInitialData = useCallback(async () => {
        const req: any = await getValue()
        const vInput = req ? req[column] : ''
        if (vInput) {
            setValueInput(vInput)
        }
    }, [column, getValue])

    useEffect(() => {
        getInitialData()
    }, [getInitialData])

    const onPressKeyValue = async (e: any) => {
        const keyUp = e.target.value
        const filter = await api.get(`${endpoint}/filter/${keyUp}`)
        setDataList(filter.data)
    }

    return (
        <form autoComplete="off">
            <div className="my-2 flex h-auto w-96 max-w-full flex-col px-2 font-semibold max-sm:w-full">
                <label htmlFor={name} className="mb-1 h-full w-full">
                    {`${name}${required ? '*' : ''}`}
                </label>
                <div className="flex flex-row items-center justify-center">
                    <input
                        type="search"
                        name={`search_${endpoint}`}
                        id={`search_${endpoint}`}
                        className="mr-1 h-full min-h-[1rem] w-20 items-center justify-center rounded bg-slate-300 py-1 pl-3 text-start text-sm font-normal shadow-sm shadow-slate-500 focus:no-underline focus:outline-none"
                        disabled={disabled}
                        onKeyUp={(e) => onPressKeyValue(e)}
                        placeholder={placeholder}
                        data-value={dataValue}
                        aria-required
                    />
                    <input
                        list="datalist"
                        type="text"
                        name={endpoint}
                        id={name}
                        value={valueInput}
                        className="h-full w-full items-center justify-center rounded bg-slate-300 py-1 pl-3 text-start font-normal shadow-sm shadow-slate-500 focus:no-underline focus:outline-none"
                        disabled
                    />
                </div>
                <ul className="relative z-auto m-[0.1rem] max-h-[10rem] w-auto overflow-y-auto">
                    {datalist &&
                        datalist.map((item, i) => {
                            return (
                                <li
                                    className="z-[200] mb-[0.1rem] flex h-auto w-[22rem] cursor-pointer flex-wrap rounded bg-slate-300 pl-1 hover:bg-blue-200"
                                    key={`${endpoint}-opt-key-${i * 9}`}
                                    data-values={item}
                                    onClick={() => handleClickValue(item)}
                                    aria-hidden
                                >
                                    <div className="flex w-full flex-wrap items-start justify-start gap-0 text-xs">
                                        {options.map((v) => {
                                            return (
                                                <div
                                                    key={`${endpoint}-item-key-${
                                                        i * 9
                                                    }`}
                                                    className="mr-1 min-w-max"
                                                >
                                                    {`${v.name}: ${
                                                        item[v.endpoint]
                                                    }`}
                                                </div>
                                            )
                                        })}
                                    </div>
                                </li>
                            )
                        })}
                </ul>
            </div>
        </form>
    )
}
