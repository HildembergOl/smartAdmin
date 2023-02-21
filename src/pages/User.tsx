/* eslint-disable @typescript-eslint/ban-ts-comment */
import { SetStateAction, useCallback, useEffect, useState } from 'react'
import { DashPage } from '../components/DashPage'
import {
    TableBody,
    TableBodyRow,
    TableBodyRowValue,
} from '../components/TableBody'
import {
    TableArea,
    TableHeader,
    TableHeaderRow,
    TableHeaderRowValue,
} from '../components/TableHeader'
import * as dataApiBusiness from '../api/DataBusiness.json'
import { FilterArea } from '../components/FilterArea'
import { LabelFilterText } from '../components/LabelsFilter'

let searchTimer: NodeJS.Timeout

export function User() {
    const dash = dataApiBusiness.dashboard
    const apiData = dataApiBusiness.table
    const perm = dataApiBusiness.businessPermition

    const [data, setData] = useState(apiData)
    const [filter, setFilter] = useState('')

    const params = Object.getOwnPropertyNames(apiData[0])
    const [searchParams] = useState(params)

    const searchData = useCallback(
        (v: { toString: () => string }) => {
            return apiData.filter((item) => {
                return searchParams.some((newItem) => {
                    return (
                        // @ts-ignore
                        item[newItem]
                            ?.toString()
                            ?.toLowerCase()
                            ?.indexOf(v.toString().toLowerCase()) > -1
                    )
                })
            })
        },
        [apiData, searchParams]
    )

    const onChangeValues = (e: {
        target: { value: SetStateAction<string> }
    }) => {
        setFilter(e.target.value)
    }

    useEffect(() => {
        clearTimeout(searchTimer)
        searchTimer = setTimeout(() => {
            const filtered = searchData(filter)
            setData(filtered)
        }, 2000)
    }, [filter, searchData])

    return (
        <>
            <DashPage
                visible={dash.visible}
                all={dash.all}
                inactive={dash.inactive}
                active={dash.active}
                atention={dash.atention}
            />
            <FilterArea>
                <LabelFilterText
                    id="business"
                    name="Pesquisar"
                    type="text"
                    onChangeValue={onChangeValues}
                />
            </FilterArea>
            <TableArea visible>
                <TableHeader>
                    <TableHeaderRow>
                        <TableHeaderRowValue value="Ações" />
                        <TableHeaderRowValue value="Código" />
                        <TableHeaderRowValue value="Tipo" />
                        <TableHeaderRowValue value="Empresa" />
                        <TableHeaderRowValue value="CNPJ" />
                        <TableHeaderRowValue value="Endereço" />
                        <TableHeaderRowValue value="Grupo Empresarial" />
                        <TableHeaderRowValue value="Situação" />
                    </TableHeaderRow>
                </TableHeader>
                <TableBody>
                    {data.map((item) => {
                        return (
                            <TableBodyRow
                                rowId={item.id}
                                key={`${perm.id}-table-row-${item.id}`}
                            >
                                <TableBodyRowValue value="Ações" />
                                <TableBodyRowValue
                                    key={`${perm.id}-table-row-col-1-${item.id}`}
                                    value={item.id}
                                />
                                <TableBodyRowValue
                                    key={`${perm.id}-table-row-col-2-${item.id}`}
                                    value={item.type}
                                />
                                <TableBodyRowValue
                                    key={`${perm.id}-table-row-col-3-${item.id}`}
                                    value={item.business}
                                />
                                <TableBodyRowValue
                                    key={`${perm.id}-table-row-col-4-${item.id}`}
                                    value={item.document}
                                />
                                <TableBodyRowValue
                                    key={`${perm.id}-table-row-col-5-${item.id}`}
                                    value={item.address}
                                />
                                <TableBodyRowValue
                                    key={`${perm.id}-table-row-col-6-${item.id}`}
                                    value={item.businessGroup}
                                />
                                <TableBodyRowValue
                                    key={`${perm.id}-table-row-col-7-${item.id}`}
                                    value={item.situation}
                                />
                            </TableBodyRow>
                        )
                    })}
                </TableBody>
            </TableArea>
        </>
    )
}
