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
import { PersonEntry } from '../modal/PersonEntry'
import { PropsValuesPerson } from '../types'
import { Loading } from '../components/Loading'
import { personApi } from '../api/PersonApi'

export function Documents() {
    const initialData: PropsValuesPerson = {
        id: 0,
        status: '',
        namePerson: '',
        tradeName: '',
        document: '',
        numberRegister: '',
        phone: '',
        postCode: '',
        address: '',
        numberAddress: '',
        codDistrict: 0,
        district: '',
        city: '',
        state: '',
        addressComplement: '',
    }

    const [data, setData] = useState<PropsValuesPerson[]>([])
    const [loading, setLoading] = useState(true)
    const [refresh, setRefresh] = useState(true)
    const [filter, setFilter] = useState('')
    const [modal, setModal] = useState(false)
    const [modalData, setModalData] = useState<PropsValuesPerson>(initialData)
    const [typeModal, setTypeModal] = useState('')

    const datavalue = async () => {
        setLoading(true)
        const result = await personApi.all()
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
        setTypeModal('Cadastrar Pessoa')
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
        setTypeModal('Editar Pessoa')
        setModalData(data[e])
        setModal(!modal)
    }

    const HandleClickDelete = (e: number) => {
        setTypeModal('Excluir Pessoa')
        setModalData(data[e])
        setModal(!modal)
    }

    const handleClickConfirm = () => {
        setModal(!modal)
    }
    const inactive = data.filter((e) => e.status === 'Inativo')
    const active = data.filter((e) => e.status === 'Ativo')
    const atention = data.filter(
        (e) => e.status !== 'Ativo' && e.status !== 'Inativo'
    )

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
                    id="personSearch"
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
                            <TableHeaderRowValue value="Nome" />
                            <TableHeaderRowValue value="Documento" />
                            <TableHeaderRowValue value="Endereço" />
                            <TableHeaderRowValue value="Bairro" />
                            <TableHeaderRowValue value="Cidade" />
                            <TableHeaderRowValue value="UF" />
                            <TableHeaderRowValue value="Telefone" />
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
                                        value={values.namePerson}
                                    />
                                    <TableBodyRowValue
                                        key={`col04-${values.id}`}
                                        value={values.document}
                                    />
                                    <TableBodyRowValue
                                        key={`col05-${values.id}`}
                                        value={values.address}
                                    />
                                    <TableBodyRowValue
                                        key={`col06-${values.id}`}
                                        value={values.district}
                                    />
                                    <TableBodyRowValue
                                        key={`col07-${values.id}`}
                                        value={values.city}
                                    />
                                    <TableBodyRowValue
                                        key={`col08-${values.id}`}
                                        value={values.state}
                                    />
                                    <TableBodyRowValue
                                        key={`col09-${values.id}`}
                                        value={values.phone}
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
                    <PersonEntry
                        data={modalData}
                        type={typeModal}
                        closeModal={handleClickConfirm}
                    />
                </Modal>
            )}
        </>
    )
}
