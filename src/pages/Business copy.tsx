/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { SetStateAction, useState } from 'react'
import { DashPage } from '../components/DashPage'
import { MainPage } from '../components/MainPage'
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

export function Business() {
    const dash = dataApiBusiness.dashboard
    const apiData = dataApiBusiness.table
    const perm = dataApiBusiness.businessPermition
    // const { filters } = dataApiBusiness

    const [filter, setFilter] = useState('')
    const [data, setData] = useState(apiData)
    /*
    const params = Object.getOwnPropertyNames(apiData[0])
    const [searchParams] = useState(params)

    const searchData = useCallback(
        (items: any[]) => {
            console.log(items)
            return items.filter((item) => {
                console.log(item)
                return searchParams.forEach((newItem) => {
                    console.log({ newItem, searchParams })
                    return console.log(
                        item[newItem]
                            .toString()
                            .toLowerCase()
                            .includes(filter.toString().toLowerCase())
                    )
                })
            })
        },
        [filter, searchParams]
    )

    useEffect(() => {
        setData(apiData)
    }, [apiData])

    */

    const onChangeValues = (value: SetStateAction<string>) => {
        setFilter(value)
    }

    return (
        <MainPage>
            <DashPage
                visible={dash.visible}
                all={dash.all}
                inactive={dash.inactive}
                active={dash.active}
                atention={dash.atention}
            />
            <FilterArea>
                <LabelFilterText
                    name="business"
                    value="Descrição"
                    type="text"
                    onChangeValue={onChangeValues}
                />
            </FilterArea>
            <span>{filter}</span>
            <TableArea visible>
                <TableHeader>
                    <TableHeaderRow>
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
        </MainPage>
    )
}
