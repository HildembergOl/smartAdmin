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
import { UserEntry } from '../modal/UserEntry'
import { PropsValuesUser, PropsValuesPerson } from '../types'
import { Loading } from '../components/Loading'
import { userApi } from '../api/UserApi'

export function User() {
    const initialData: PropsValuesUser = {
        id: 0,
        status: '',
        login: '',
        password: '',
        email: '',
        userType: '',
        personId: '',
        Person: {} as PropsValuesPerson,
    }

    const [data, setData] = useState<PropsValuesUser[]>([])
    const [loading, setLoading] = useState(true)
    const [refresh, setRefresh] = useState(true)
    const [filter, setFilter] = useState('')
    const [modal, setModal] = useState(false)
    const [modalData, setModalData] = useState<PropsValuesUser>(initialData)
    const [typeModal, setTypeModal] = useState('')

    const datavalue = async () => {
        setLoading(true)
        const result = await userApi.all()
        setData(result)
        setLoading(false)
        setRefresh(false)
    }

    useEffect(() => {
        datavalue()
    }, [modal, refresh])

    // Início do código de pesquisa
    const { password, ...params } = initialData
    const searchParams = Object.getOwnPropertyNames(params)

    const onChangeValues = (e: {
        target: { value: SetStateAction<string> }
    }) => {
        const value = e.target.value.toString().toLowerCase()
        setFilter(value)
    }

    const searchData = useMemo(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return data.filter((item: any) => {
            return searchParams.some((newItem) => {
                return (
                    item[newItem].toString().toLowerCase().indexOf(filter) > -1
                )
            })
        })
    }, [data, filter, searchParams])

    // Fim do código de pesquisa

    const HandleClickButtonNew = () => {
        setTypeModal('Cadastrar Usuário')
        setModalData(initialData)
        setModal(!modal)
    }
    const HandleClickButtonRefresh = () => {
        setRefresh(true)
    }

    const handleClickCloseModal = (e: { target: { id: string } }) => {
        if (e.target.id === 'modalEntry') {
            setModal(!modal)
        }
    }

    const HandleClickEdit = (e: number) => {
        const objUser = data[e]
        const newObjUser = { ...objUser, password: '' }
        setTypeModal('Editar Usuário')
        setModalData(newObjUser)
        setModal(!modal)
    }

    const HandleClickDelete = (e: number) => {
        setTypeModal('Excluir Usuário')
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
                            <TableHeaderRowValue value="Login" />
                            <TableHeaderRowValue value="E-mail" />
                            <TableHeaderRowValue value="Tipo Usuário" />
                            <TableHeaderRowValue value="Pessoa" />
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
                                        value={values.login}
                                    />
                                    <TableBodyRowValue
                                        key={`col04-${values.id}`}
                                        value={values.email}
                                    />
                                    <TableBodyRowValue
                                        key={`col05-${values.id}`}
                                        value={values.userType}
                                    />
                                    <TableBodyRowValue
                                        key={`col06-${values.id}`}
                                        value={values.Person.namePerson}
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
                    <UserEntry
                        data={modalData}
                        type={typeModal}
                        closeModal={handleClickConfirm}
                    />
                </Modal>
            )}
        </>
    )
}
