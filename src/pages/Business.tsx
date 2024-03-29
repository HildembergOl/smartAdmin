import { SetStateAction, useEffect, useMemo, useState } from 'react'
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
import { FilterArea } from '../components/FilterArea'
import { LabelFilterText } from '../components/LabelsFilter'
import { ButtonActionsPage } from '../components/Button'
import { Modal } from '../components/Modal'
import { BusinessEntry } from '../modal/BusinessEntry'
import { PropsValuesBusiness, PropsGroup } from '../types'
import { Loading } from '../components/Loading'
import { businessApi } from '../api/BusinessApi'

export function Business() {
    const initialData: PropsValuesBusiness = {
        id: 0,
        nameBusiness: '',
        status: '',
        tradeName: '',
        businessCNPJ: '',
        stateRegister: '',
        postCodeBusiness: '',
        addressBusiness: '',
        numberAddressBusiness: '',
        districtBusiness: '',
        cityBusiness: '',
        stateBusiness: '',
        groupId: 0,
        group: {} as PropsGroup,
    }

    const [data, setData] = useState<PropsValuesBusiness[]>([])
    const [loading, setLoading] = useState(true)
    const [refresh, setRefresh] = useState(true)
    const [filter, setFilter] = useState('')
    const [modal, setModal] = useState(false)
    const [modalData, setModalData] = useState<PropsValuesBusiness>(initialData)
    const [typeModal, setTypeModal] = useState('')

    const datavalue = async () => {
        setLoading(true)
        const result = await businessApi.all()
        setData(result)
        setLoading(false)
        setRefresh(false)
    }

    useEffect(() => {
        datavalue()
    }, [modal, refresh])

    // Início do código de pesquisa
    const searchParams = Object.getOwnPropertyNames(initialData)

    const onChangeValues = (e: {
        target: { value: SetStateAction<string> }
    }) => {
        const value = e.target.value.toString().toLowerCase()
        setFilter(value)
    }

    const searchData = useMemo(() => {
        return data.filter(
            (item: { [x: string]: { toString: () => string } }) => {
                return searchParams.some((newItem) => {
                    return (
                        item[newItem].toString().toLowerCase().indexOf(filter) >
                        -1
                    )
                })
            }
        )
    }, [data, filter, searchParams])

    // Fim do código de pesquisa

    const HandleClickButtonNew = () => {
        setTypeModal('Cadastrar Empresa')
        setModalData(initialData)
        setModal(!modal)
    }
    const HandleClickButtonRefresh = () => {
        setRefresh(true)
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

    const handleClickConfirm = () => {
        setModal(!modal)
    }
    const inactive = data.filter((e) => e.status === 'Inativo')
    const active = data.filter((e) => e.status === 'Ativo')
    const atention = data.filter((e) => e.status !== 'Ativo')

    const dash = {
        all: { name: 'Todos', value: data.length || 0 },
        inactive: { name: 'Inativos', value: inactive.length || 0 },
        active: { name: 'Ativos', value: active.length || 0 },
        atention: { name: 'Pendentes', value: atention.length || 0 },
    }
    return (
        <>
            <DashPage
                visible
                all={dash.all}
                inactive={dash.inactive}
                active={dash.active}
                atention={dash.atention}
            />
            <FilterArea>
                <LabelFilterText
                    id="businessSearch"
                    name="Pesquisar"
                    type="search"
                    value={filter}
                    onChangeValue={onChangeValues}
                />
            </FilterArea>
            <ButtonActionsPage
                onClickNew={HandleClickButtonNew}
                onClickRefresh={HandleClickButtonRefresh}
                refresh={refresh}
            />
            {loading ? (
                <Loading width="page" information />
            ) : (
                <TableArea visible>
                    <TableHeader>
                        <TableHeaderRow>
                            <TableHeaderRowValue value="Ações" />
                            <TableHeaderRowValue value="Código" />
                            <TableHeaderRowValue value="Status" />
                            <TableHeaderRowValue value="Razão Social" />
                            <TableHeaderRowValue value="Fantasia" />
                            <TableHeaderRowValue value="CNPJ" />
                            <TableHeaderRowValue value="Endereço" />
                            <TableHeaderRowValue value="Bairro" />
                            <TableHeaderRowValue value="Cidade" />
                            <TableHeaderRowValue value="UF" />
                            <TableHeaderRowValue value="Grupo Empresarial" />
                        </TableHeaderRow>
                    </TableHeader>
                    <TableBody>
                        {searchData.map((values, index) => {
                            return (
                                <TableBodyRow
                                    rowId={values.id}
                                    key={`${values.id}-key-row-${values.id}`}
                                >
                                    <ButtonActionsArea
                                        id={index}
                                        onClickEdit={(e) => HandleClickEdit(e)}
                                        onClickDelete={(e) =>
                                            HandleClickDelete(e)
                                        }
                                    />
                                    <TableBodyRowValue
                                        key={`col01-${values.id}`}
                                        value={values.id}
                                    />
                                    <TableBodyRowValue
                                        key={`col02-${values.id}`}
                                        value={values.status}
                                    />
                                    <TableBodyRowValue
                                        key={`col03-${values.id}`}
                                        value={values.nameBusiness}
                                    />
                                    <TableBodyRowValue
                                        key={`col04-${values.id}`}
                                        value={values.tradeName}
                                    />
                                    <TableBodyRowValue
                                        key={`col05-${values.id}`}
                                        value={values.businessCNPJ}
                                    />
                                    <TableBodyRowValue
                                        key={`col06-${values.id}`}
                                        value={
                                            values.numberAddressBusiness
                                                ? `${values.addressBusiness},${values.numberAddressBusiness}`
                                                : `${values.addressBusiness}`
                                        }
                                    />
                                    <TableBodyRowValue
                                        key={`col07-${values.id}`}
                                        value={values.districtBusiness}
                                    />
                                    <TableBodyRowValue
                                        key={`col08-${values.id}`}
                                        value={values.cityBusiness}
                                    />
                                    <TableBodyRowValue
                                        key={`col09-${values.id}`}
                                        value={values.stateBusiness}
                                    />
                                    <TableBodyRowValue
                                        key={`col10-${values.group.groupName}`}
                                        value={values.group.groupName}
                                    />
                                </TableBodyRow>
                            )
                        })}
                    </TableBody>
                </TableArea>
            )}
            {modal && (
                <Modal
                    handleClickClose={handleClickCloseModal}
                    type={typeModal}
                >
                    <BusinessEntry
                        data={modalData}
                        type={typeModal}
                        closeModal={handleClickConfirm}
                    />
                </Modal>
            )}
        </>
    )
}
