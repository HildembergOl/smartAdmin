import { useCallback, useEffect, useState } from 'react'
import { LabelText } from '../components/Forms/LabelText'
import { financeApi } from '../api/FinanceApi'
import { PropsDataSelect, PropsValueFinance } from '../types'
import { Submit } from '../components/Button'
import { LabelSelect } from '../components/Forms/LabelSelect'
import { Alert } from '../components/Alert'
import { DataList } from '../components/Forms/DataList'
import {
    BusinessOptions,
    PersonOptions,
    Reference,
    ValueParse,
} from '../constants'
import { groupApi } from '../api/GroupsApi'
import { LabelDate } from '../components/Forms/LabelDate'
import { LabelTextArea } from '../components/Forms/LabelTextArea'
import { LabelFiles } from '../components/Forms/LabelFiles'

type Props = {
    data: PropsValueFinance
    type: string
    closeModal: () => void
}
export function FinanceEntry({ data, type, closeModal }: Props) {
    const [values, setValues] = useState<PropsValueFinance>(data)
    const [disabled, setDisabled] = useState(false)
    const [loading, setLoading] = useState(false)
    const [statusSelect, setStatusSelect] = useState<PropsDataSelect[]>([])
    const [category, setCategory] = useState<PropsDataSelect[]>([])
    const [centerCost, setCenterCost] = useState<PropsDataSelect[]>([])
    const [account, setAccount] = useState<PropsDataSelect[]>([])

    const submitType = type.split(' ')[0]
    const typeSelect = [{ value: 'Entrada' }, { value: 'Saida' }]
    const competenceSelect = Reference()

    const [alert, setAlert] = useState(false)
    const [messageAlert, setMessageAlert] = useState('')
    const [colorMessage, setColorMessage] = useState('')

    const api = useCallback(async () => {
        const gp = await groupApi.all(0)
        const sel = gp
            ?.filter((g) => g.parent === -2)
            .map((v) => {
                const arr = {
                    id: v.id,
                    value: v.groupName,
                }
                return arr
            }) as PropsDataSelect[]

        const cat = gp
            ?.filter((g) => g.parent === -3)
            .map((v) => {
                const arr = {
                    id: v.id,
                    value: v.groupName,
                }
                return arr
            }) as PropsDataSelect[]

        const cCost = gp
            ?.filter((g) => g.parent === -4)
            .map((v) => {
                const arr = {
                    id: v.id,
                    value: v.groupName,
                }
                return arr
            }) as PropsDataSelect[]

        const acc = gp
            ?.filter((g) => g.parent === -5)
            .map((v) => {
                const arr = {
                    id: v.id,
                    value: v.groupName,
                }
                return arr
            }) as PropsDataSelect[]

        setCategory(cat)
        setCenterCost(cCost)
        setAccount(acc)
        setStatusSelect(sel)
    }, [])

    useEffect(() => {
        setLoading(true)
        api()
        setValues(data)
        setStatusSelect([{ id: 2, value: 'Aberto' }])
        setLoading(false)
    }, [api, data])

    const changeValues = (e: { target: { name: string; value: string } }) => {
        const value = {
            ...values,
            [e.target.name]: e.target.value,
        }
        setValues(value)
    }
    const dataListSelection = (column: string, e: number) => {
        const value = {
            ...values,
            [column]: e,
        }
        setValues(value)
    }

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        setDisabled(true)
        setLoading(true)
        let response

        if (submitType === 'Editar') {
            response = await financeApi.update(values)
        }
        if (submitType === 'Cadastrar') {
            response = await financeApi.insert(values)
        }
        if (submitType === 'Excluir') {
            response = await financeApi.delete(values)
        }

        if (response.status) {
            closeModal()
            setDisabled(false)
            setLoading(false)
        } else {
            setAlert(true)
            setMessageAlert('00')
            setColorMessage('danger')
            setDisabled(false)
            setLoading(false)
        }
    }
    const ammount = ValueParse(values.ammount)
    return (
        <>
            <Alert
                hidden={alert}
                message={messageAlert}
                type={colorMessage}
                closeAlert={() => setAlert(false)}
            />
            <div className="h-min w-full rounded-md bg-slate-400">
                <p className="from-neutral-800 p-2 text-base font-semibold">
                    Informações da Conta
                </p>
                <div className="flex h-full w-full flex-col items-start justify-start p-1">
                    <div className="flex w-full flex-wrap items-start justify-start rounded-md max-sm:flex-col">
                        <LabelSelect
                            name="Tipo Conta"
                            endpoint="type"
                            width="small"
                            value={values.type}
                            disabled={disabled}
                            data={typeSelect}
                            page="finance"
                            required
                            onChangeValue={changeValues}
                        />
                        <DataList
                            name="Empresa"
                            endpoint="business"
                            column="nameBusiness"
                            dataValue={values.business}
                            disabled={disabled}
                            onSelectValue={(e) =>
                                dataListSelection('business', e)
                            }
                            placeholder="Pesquisar..."
                            options={BusinessOptions}
                            required
                        />
                        <DataList
                            name="Pessoa"
                            endpoint="person"
                            column="namePerson"
                            dataValue={values.person}
                            disabled={disabled}
                            onSelectValue={(e) =>
                                dataListSelection('person', e)
                            }
                            placeholder="Pesquisar..."
                            options={PersonOptions}
                            required
                        />
                        <LabelSelect
                            name="Situação"
                            endpoint="status"
                            width="average"
                            value={values.statusV.groupName || 'Aberto'}
                            disabled={false}
                            data={statusSelect}
                            page="finance"
                            required
                            onChangeValue={changeValues}
                        />
                        <LabelSelect
                            name="Competência"
                            endpoint="competence"
                            width="small"
                            value={values.competence}
                            disabled={false}
                            data={competenceSelect}
                            page="finance"
                            required
                            onChangeValue={changeValues}
                        />
                        <LabelDate
                            name="Data Vencimento"
                            endpoint="expiration"
                            width="average"
                            value={values.expiration}
                            disabled={disabled}
                            type="date"
                            page="finance"
                            required
                            // eslint-disable-next-line no-console
                            onChangeValue={changeValues}
                        />
                        <LabelDate
                            name="Data Pagamento"
                            endpoint="payout"
                            width="average"
                            value={values.payout}
                            disabled
                            type="date"
                            page="finance"
                            required={false}
                            onChangeValue={changeValues}
                        />
                        <LabelText
                            name="Valor"
                            endpoint="ammount"
                            width="average"
                            value={ammount}
                            disabled={disabled}
                            type="VALOR"
                            page="finance"
                            required
                            onChangeValue={changeValues}
                        />
                        <hr className="w-full bg-black" />
                        <LabelSelect
                            name="Categoria"
                            endpoint="category"
                            width="average"
                            value={values.category}
                            disabled={false}
                            data={category}
                            page="finance"
                            required
                            onChangeValue={changeValues}
                        />
                        <LabelSelect
                            name="Centro de Custo"
                            endpoint="costCenter"
                            width="average"
                            value={values.costCenter}
                            disabled={false}
                            data={centerCost}
                            page="finance"
                            required
                            onChangeValue={changeValues}
                        />
                        <LabelSelect
                            name="Conta Bancária"
                            endpoint="account"
                            width="average"
                            value={values.account}
                            disabled={false}
                            data={account}
                            page="finance"
                            required
                            onChangeValue={changeValues}
                        />
                        <LabelFiles
                            name="Anexos"
                            endpoint="attachments"
                            width="big"
                            disabled={disabled}
                            page="finance"
                            required
                        />
                        <LabelTextArea
                            name="Observação"
                            endpoint="ammount"
                            width="full"
                            value={values.obs}
                            disabled={disabled}
                            type="text"
                            page="finance"
                            required={false}
                            onChangeValue={changeValues}
                        />
                    </div>
                </div>
            </div>
            <Submit
                disabled={disabled}
                loading={loading}
                type={type.split(' ')}
                submit={handleSubmit}
            />
        </>
    )
}
