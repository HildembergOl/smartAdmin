/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback } from 'react'
import { Label } from './Forms'
import { PropsModelValues } from '../types'

type PropsTab = {
    children: React.ReactNode
    id: number
    handleClick: (value: any) => void
    select: number
}
type PropsTabArea = {
    children: React.ReactNode
    data: PropsModelValues[]
    select: number
    page: string
}

export function Tab({ children, id, handleClick, select }: PropsTab) {
    return (
        <div
            id={id.toString()}
            className={`${
                select === id ? 'mt-[-1.55rem] ' : 'mt-[-1.65rem] '
            } ml-[0.1rem] flex w-32 cursor-pointer flex-row items-center justify-center rounded-t border-x-[1px] border-t-[1px] border-slate-400 bg-slate-300`}
            onClick={() => handleClick(id)}
            aria-hidden="true"
        >
            <div className="flex flex-row items-center justify-center font-semibold ">
                {children}
            </div>
        </div>
    )
}

export function TabArea({ children, data, select, page }: PropsTabArea) {
    console.log(data)
    return (
        <div className="mt-8 flex h-full w-full flex-col items-start justify-start  rounded-md  border-[1px] border-slate-400 bg-slate-300 shadow-md">
            <div className="flex h-auto w-auto flex-row items-start justify-start">
                {children}
            </div>
            <div className=" flex h-full w-full flex-row items-start justify-start">
                {data.map(
                    useCallback(
                        (k) => {
                            return k.idTab !== select ? (
                                ''
                            ) : (
                                <Label
                                    key={`label-${k.id}`}
                                    type={k.type}
                                    data={k}
                                    page={page}
                                />
                            )
                        },
                        [page, select]
                    )
                )}
            </div>
        </div>
    )
}
