import { useEffect, useState } from 'react'
import { LabelText } from '../components/Forms/LabelText'
import { userApi } from '../api/UserApi'
import { PropsValuesUser } from '../types'
import { Submit } from '../components/Button'
import { LabelSelect } from '../components/Forms/LabelSelect'
import { Alert } from '../components/Alert'
import { DataList } from '../components/Forms/DataList'
import { PersonOptions } from '../constants'

type Props = {
    data: PropsValuesUser
    type: string
    closeModal: () => void
}
export function UserEntry({ data, type, closeModal }: Props) {
    const [values, setValues] = useState<PropsValuesUser>(data)
    const [disabled, setDisabled] = useState(false)
    const [loading, setLoading] = useState(false)

    const submitType = type.split(' ')[0]
    const dataSelect = ['Ativo', 'Inativo']
    const typeUserSelect = ['Administrador', 'User', 'Suporte']
    const [alert, setAlert] = useState(false)
    const [messageAlert, setMessageAlert] = useState('')
    const [colorMessage, setColorMessage] = useState('')

    useEffect(() => {
        setLoading(true)
        setValues(data)
        setLoading(false)
    }, [data])

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
            response = await userApi.update(values)
        }
        if (submitType === 'Cadastrar') {
            response = await userApi.insert(values)
        }
        if (submitType === 'Excluir') {
            response = await userApi.delete(values)
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

    return (
        <>
            <div className="h-min w-full rounded-md bg-slate-400">
                <p className="from-neutral-800 p-2 text-base font-semibold">
                    Dados Básicos
                </p>
                <div className="flex h-full w-full flex-col items-start justify-start p-1">
                    <div className="group-[formBusines]: flex w-full flex-wrap items-start justify-start rounded-md max-sm:flex-col">
                        <LabelText
                            name="Código"
                            endpoint="id"
                            width="small"
                            value={values.id}
                            disabled
                            type="GERAL"
                            page="user"
                            required
                            onChangeValue={changeValues}
                        />
                        <LabelSelect
                            name="Situação"
                            endpoint="status"
                            width="average"
                            value={values.status}
                            disabled={disabled}
                            data={dataSelect}
                            page="user"
                            required
                            onChangeValue={changeValues}
                        />
                        <LabelText
                            name="Login"
                            endpoint="login"
                            width="average"
                            value={values.login}
                            disabled={disabled}
                            type="GERAL"
                            page="user"
                            required
                            onChangeValue={changeValues}
                        />
                        <LabelText
                            name="Senha"
                            endpoint="password"
                            width="average"
                            value=""
                            disabled={disabled}
                            type="text"
                            page="user"
                            required
                            onChangeValue={changeValues}
                        />
                        <span className="flex h-full w-56 items-center justify-start pt-7 text-xs max-sm:ml-2 max-sm:p-0 ">
                            *Para redefinir a senha, digite nova senha e
                            confirme a operação.
                        </span>
                        <LabelText
                            name="E-mail"
                            endpoint="email"
                            width="big"
                            value={values.email}
                            disabled={disabled}
                            type="GERAL"
                            page="user"
                            required
                            onChangeValue={changeValues}
                        />
                        <LabelSelect
                            name="Tipo Usuário"
                            endpoint="userType"
                            width="average"
                            value={values.userType}
                            disabled={false}
                            data={typeUserSelect}
                            page="user"
                            required
                            onChangeValue={changeValues}
                        />
                        <hr className="w-full bg-black" />
                        <DataList
                            name="Pessoa"
                            endpoint="person"
                            column="namePerson"
                            dataValue={values.personId}
                            disabled={disabled}
                            onSelectValue={(e) =>
                                dataListSelection('personId', e)
                            }
                            placeholder="Pesquisar..."
                            options={PersonOptions}
                            required
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
            <Alert
                hidden={alert}
                message={messageAlert}
                type={colorMessage}
                closeAlert={() => setAlert(false)}
            />
        </>
    )
}
