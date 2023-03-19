import { SetStateAction, useCallback, useEffect, useState } from 'react'
import { DashPage } from '../components/DashPage'
import {
    TableBody,
    TableBodyRow,
    TableBodyRowValue,
    ButtonActionsArea,
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
import { ButtonNew } from '../components/Button'
import { Modal } from '../components/Modal'
import { BusinessEntry } from '../modal/BusinessEntry'
import api from '../api/api'
import { PropsValuesBusiness } from '../types'

let searchTimer: NodeJS.Timeout

export function Business() {
    const initialData = {
        id: '',
        nameBusiness: '',
        tradeName: '',
        businessCNPJ: '',
        stateRegister: '',
        postCodeBusiness: '',
        addressBusiness: '',
        numberAddressBusiness: '',
        districtBusiness: '',
        cityBusiness: '',
        stateBusiness: '',
    }
    const dash = dataApiBusiness.dashboard
    const perm = dataApiBusiness.businessPermition

    const [data, setData] = useState<PropsValuesBusiness[]>([])
    const [loading, setLoading] = useState(true)
    const [filter, setFilter] = useState('')
    const [modal, setModal] = useState(false)
    const [modalData, setModalData] = useState(initialData)
    const [typeModal, setTypeModal] = useState('')

    const params = Object.getOwnPropertyNames(initialData)
    const [searchParams] = useState(params)

    const datavalue = async () => {
        setLoading(true)
        const result = await api.get('business')
        setData(result.data)
        setLoading(false)
    }

    useEffect(() => {
        datavalue()
    }, [])

    const onChangeValues = (e: {
        target: { value: SetStateAction<string> }
    }) => {
        setFilter(e.target.value)
    }
    const searchData = useCallback(
        (v: { toString: () => string }) => {
            return data.filter(
                (item: { [x: string]: { toString: () => string } }) => {
                    return searchParams.some((newItem) => {
                        return (
                            item[newItem]
                                .toString()
                                .toLowerCase()
                                .indexOf(v.toString().toLowerCase()) > -1
                        )
                    })
                }
            )
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [searchParams]
    )

    useEffect(() => {
        if (filter !== '') {
            clearTimeout(searchTimer)
            searchTimer = setTimeout(() => {
                const filtered = searchData(filter)
                setData(filtered)
            }, 2000)
        } else {
            datavalue()
        }
    }, [filter, searchData])

    const HandleClickButtonNew = () => {
        setTypeModal('Cadastrar Empresa')
        setModalData(initialData)
        setModal(!modal)
    }

    const handleClickCloseModal = (e: { target: { id: string } }) => {
        if (e.target.id === 'modalEntry') {
            setModal(!modal)
            localStorage.removeItem('business')
        }
    }

    const HandleClickEdit = (e: number) => {
        setTypeModal('Editar Empresa')
        setModalData(data[e])
        setModal(!modal)
    }

    const HandleClickDelete = (e: number) => {
        setTypeModal('Excluir Empresa')
        setModalData(data[e])
        setModal(!modal)
    }

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
            <ButtonNew handleClick={HandleClickButtonNew} />
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
                    {data.map((values, index) => {
                        return (
                            <TableBodyRow
                                rowId={values.id}
                                key={`${values.id}-table-row-${values.id}`}
                            >
                                <ButtonActionsArea
                                    id={index}
                                    onClickEdit={(e) => HandleClickEdit(e)}
                                    onClickDelete={(e) => HandleClickDelete(e)}
                                />
                                <TableBodyRowValue
                                    key={`${values.id}-table-row-col-1-${values.id}`}
                                    value={values.id}
                                />
                                <TableBodyRowValue
                                    key={`${values.id}-table-row-col-2-${values.id}`}
                                    value="Empresa"
                                />
                                <TableBodyRowValue
                                    key={`${values.id}-table-row-col-3-${values.id}`}
                                    value={values.nameBusiness}
                                />
                                <TableBodyRowValue
                                    key={`${values.id}-table-row-col-4-${values.id}`}
                                    value={values.businessCNPJ}
                                />
                                <TableBodyRowValue
                                    key={`${values.id}-table-row-col-5-${values.id}`}
                                    value={values.addressBusiness}
                                />
                                <TableBodyRowValue
                                    key={`${values.id}-table-row-col-6-${values.id}`}
                                    value={values.numberAddressBusiness}
                                />
                                <TableBodyRowValue
                                    key={`${values.id}-table-row-col-7-${values.id}`}
                                    value={values.cityBusiness}
                                />
                            </TableBodyRow>
                        )
                    })}
                </TableBody>
            </TableArea>
            <Modal
                hidden={modal}
                handleClickClose={handleClickCloseModal}
                type={typeModal}
            >
                <BusinessEntry data={modalData} type={typeModal} />
            </Modal>
        </>
    )
}
