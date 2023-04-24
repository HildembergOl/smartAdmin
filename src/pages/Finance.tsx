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
import {
    PropsGroup,
    PropsValueFinance,
    PropsValuesBusiness,
    PropsValuesPerson,
} from '../types'
import { Loading } from '../components/Loading'
import { financeApi } from '../api/FinanceApi'
import { FinanceEntry } from '../modal/FinanceEntry'
import { DateParse, ValueParse } from '../constants'

export function Finance() {
    const initialData: PropsValueFinance = {
        id: 0,
        type: '',
        status: 0,
        statusV: {} as PropsGroup,
        entry: 0,
        business: 0,
        businessV: {} as PropsValuesBusiness,
        person: 0,
        personV: {} as PropsValuesPerson,
        date: '',
        competence: '',
        expiration: '',
        days: 0,
        payout: '',
        ammount: 0,
        category: 0,
        categoryV: {} as PropsGroup,
        costCenter: 0,
        costCenterV: {} as PropsGroup,
        account: 0,
        accountV: {} as PropsGroup,
        obs: '',
    }
    const [data, setData] = useState<PropsValueFinance[]>([])
    const [loading, setLoading] = useState(true)
    const [refresh, setRefresh] = useState(true)
    const [filter, setFilter] = useState('')
    const [modal, setModal] = useState(false)
    const [modalData, setModalData] = useState<PropsValueFinance>(initialData)
    const [typeModal, setTypeModal] = useState('')

    const datavalue = async () => {
        setLoading(true)
        const result = await financeApi.all()
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
        setTypeModal('Cadastrar Contas')
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
        setTypeModal('Editar Conta')
        setModalData(objUser)
        setModal(!modal)
    }

    const HandleClickDelete = (e: number) => {
        setTypeModal('Excluir Conta')
        setModalData(data[e])
        setModal(!modal)
    }

    const handleClickConfirm = () => {
        setModal(!modal)
    }
    const inactive = 0
    const active = 0
    const atention = 0

    const dash = {
        all: { name: 'Total', value: 0 },
        inactive: { name: 'Vencidos', value: inactive },
        active: { name: 'Vence Hoje', value: active },
        atention: { name: 'Vence Amanhã', value: atention },
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
                    id="financeSearch"
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
                            <TableHeaderRowValue value="Tipo" />
                            <TableHeaderRowValue value="Status" />
                            <TableHeaderRowValue value="Empresa" />
                            <TableHeaderRowValue value="Fornecedor/Cliente" />
                            <TableHeaderRowValue value="Vencimento" />
                            <TableHeaderRowValue value="Dias" />
                            <TableHeaderRowValue value="Valor" />
                            <TableHeaderRowValue value="Categoria" />
                            <TableHeaderRowValue value="Centro de Custo" />
                            <TableHeaderRowValue value="Conta Bancária" />
                        </TableHeaderRow>
                    </TableHeader>
                    <TableBody>
                        {searchData.map((values, index) => {
                            const ammount = ValueParse(values.ammount)
                            const expiration = DateParse(
                                values.expiration,
                                'front'
                            )
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
                                        value={values.type}
                                    />
                                    <TableBodyRowValue
                                        key={`col02-${values.id}`}
                                        value={values.statusV.groupName}
                                    />
                                    <TableBodyRowValue
                                        key={`col03-${values.id}`}
                                        value={`${values.business} - ${values.businessV.nameBusiness}`}
                                    />
                                    <TableBodyRowValue
                                        key={`col04-${values.id}`}
                                        value={`${values.person} - ${values.personV.namePerson}`}
                                    />
                                    <TableBodyRowValue
                                        key={`col05-${values.id}`}
                                        value={expiration}
                                    />
                                    <TableBodyRowValue
                                        key={`col06-${values.id}`}
                                        value={values.days}
                                    />
                                    <TableBodyRowValue
                                        key={`col07-${values.id}`}
                                        value={ammount}
                                    />
                                    <TableBodyRowValue
                                        key={`col08-${values.id}`}
                                        value={values.categoryV.groupName}
                                    />
                                    <TableBodyRowValue
                                        key={`col09-${values.id}`}
                                        value={values.costCenterV.groupName}
                                    />
                                    <TableBodyRowValue
                                        key={`col10-${values.id}`}
                                        value={values.accountV.groupName}
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
                    <FinanceEntry
                        data={modalData}
                        type={typeModal}
                        closeModal={handleClickConfirm}
                    />
                </Modal>
            )}
        </>
    )
}
