import { useEffect, useState } from 'react'
import { LabelText } from '../components/Forms/LabelText'
import { businessApi } from '../api/BusinessApi'
import { PropsValuesBusiness } from '../types'
import { Submit } from '../components/Button'
import { LabelSelect } from '../components/Forms/LabelSelect'
import { Alert } from '../components/Alert'

type Props = {
    data: PropsValuesBusiness
    type: string
    closeModal: () => void
}

export function BusinessEntry({ data, type, closeModal }: Props) {
    const [values, setValues] = useState<PropsValuesBusiness>(data)
    const [disabled, setDisabled] = useState(false)
    const [loading, setLoading] = useState(false)

    const submitType = type.split(' ')[0]
    const dataSelect = ['Ativo', 'Pendente', 'Bloqueado', 'Inativo']
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

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault()

        const validate = Object.values(values).every((v) => v !== '')

        setDisabled(true)
        setLoading(true)
        let response

        if (submitType === 'Editar') {
            response = await businessApi.update(values)
        }
        if (submitType === 'Cadastrar') {
            response = await businessApi.insert(values)
        }
        if (submitType === 'Excluir') {
            response = await businessApi.delete(values)
        }
        if (!validate && submitType !== 'Excluir') {
            setAlert(true)
            setMessageAlert('Preencha todos os campos antes de continuar')
            setColorMessage('danger')
        }
        if (response.status) {
            closeModal()
            setDisabled(false)
            setLoading(false)
        } else {
            // eslint-disable-next-line no-alert
            window.alert(
                'Preencha todos os campos obrigatórios e tente novamente!'
            )
            closeModal()
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
                    <form className="group-[formBusines]: flex w-full flex-wrap items-start justify-start rounded-md max-sm:flex-col">
                        <LabelText
                            name="Código"
                            endpoint="id"
                            width="small"
                            value={values.id}
                            disabled
                            type="GERAL"
                            page="business"
                            required
                            onChangeValue={changeValues}
                        />
                        <LabelSelect
                            name="Situação"
                            endpoint="status"
                            width="average"
                            value={values.status}
                            disabled={false}
                            data={dataSelect}
                            page="business"
                            required
                            onChangeValue={changeValues}
                        />
                        <LabelText
                            name="Razão Social"
                            endpoint="nameBusiness"
                            width="big"
                            value={values.nameBusiness}
                            disabled={disabled}
                            type="GERAL"
                            page="business"
                            required
                            onChangeValue={changeValues}
                        />
                        <LabelText
                            name="Nome Fantasia"
                            endpoint="tradeName"
                            width="average"
                            value={values.tradeName}
                            disabled={disabled}
                            type="GERAL"
                            page="business"
                            required
                            onChangeValue={changeValues}
                        />
                        <LabelText
                            name="CNPJ"
                            endpoint="businessCNPJ"
                            width="average"
                            value={values.businessCNPJ}
                            disabled={disabled}
                            type="CNPJ"
                            page="business"
                            required
                            onChangeValue={changeValues}
                        />
                        <LabelText
                            name="Inscrição Estadual"
                            endpoint="stateRegister"
                            width="average"
                            value={values.stateRegister}
                            disabled={disabled}
                            type="GERAL"
                            page="business"
                            required
                            onChangeValue={changeValues}
                        />
                        <LabelText
                            name="CEP"
                            endpoint="postCodeBusiness"
                            width="small"
                            value={values.postCodeBusiness}
                            disabled={disabled}
                            type="CEP"
                            page="business"
                            required
                            onChangeValue={changeValues}
                        />
                        <LabelText
                            name="Endereço"
                            endpoint="addressBusiness"
                            width="big"
                            value={values.addressBusiness}
                            disabled={disabled}
                            type="GERAL"
                            page="business"
                            required
                            onChangeValue={changeValues}
                        />
                        <LabelText
                            name="Número"
                            endpoint="numberAddressBusiness"
                            width="small"
                            value={values.numberAddressBusiness}
                            disabled={disabled}
                            type="GERAL"
                            page="business"
                            required
                            onChangeValue={changeValues}
                        />
                        <LabelText
                            name="Bairro"
                            endpoint="districtBusiness"
                            width="average"
                            value={values.districtBusiness}
                            disabled={disabled}
                            type="GERAL"
                            page="business"
                            required
                            onChangeValue={changeValues}
                        />
                        <LabelText
                            name="Cidade"
                            endpoint="cityBusiness"
                            width="average"
                            value={values.cityBusiness}
                            disabled={disabled}
                            type="GERAL"
                            page="business"
                            required
                            onChangeValue={changeValues}
                        />
                        <LabelText
                            name="Estado"
                            endpoint="stateBusiness"
                            width="average"
                            value={values.stateBusiness}
                            disabled={disabled}
                            type="GERAL"
                            page="business"
                            required
                            onChangeValue={changeValues}
                        />
                    </form>
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
