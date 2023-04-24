import { useEffect, useState } from 'react'
import { LabelText } from '../components/Forms/LabelText'
import { personApi } from '../api/PersonApi'
import { PropsValuesPerson } from '../types'
import { Submit } from '../components/Button'
import { LabelSelect } from '../components/Forms/LabelSelect'
import { Alert } from '../components/Alert'
import { GetCEP } from '../components/Forms/GetCEP'
import { AlertMessage } from '../constants'

type Props = {
    data: PropsValuesPerson
    type: string
    closeModal: () => void
}

export function PersonEntry({ data, type, closeModal }: Props) {
    const [values, setValues] = useState<PropsValuesPerson>(data)
    const [disabled, setDisabled] = useState(false)
    const [loading, setLoading] = useState(false)

    const submitType = type.split(' ')[0]
    const dataSelect = ['Ativo', 'Inativo']
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

        setDisabled(true)
        setLoading(true)
        let response

        if (submitType === 'Editar') {
            response = await personApi.update(values)
        }
        if (submitType === 'Cadastrar') {
            response = await personApi.insert(values)
        }
        if (submitType === 'Excluir') {
            response = await personApi.delete(values)
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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleClickBuscaCEP = (viaCepValues: any) => {
        const { logradouro, bairro, localidade, uf, ibge, erro, complemento } =
            viaCepValues
        if (erro) {
            // eslint-disable-next-line no-alert
            window.alert(AlertMessage['01'])
        } else {
            const viaCepNewValues = {
                ...values,
                address: logradouro.toUpperCase(),
                codDistrict: ibge,
                district: bairro.toUpperCase(),
                city: localidade.toUpperCase(),
                state: uf.toUpperCase(),
                addressComplement: complemento.toUpperCase(),
            }
            setValues(viaCepNewValues)
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
                            page="person"
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
                            page="person"
                            required
                            onChangeValue={changeValues}
                        />
                        <LabelText
                            name="Nome"
                            endpoint="namePerson"
                            width="big"
                            value={values.namePerson}
                            disabled={disabled}
                            type="GERAL"
                            page="person"
                            required
                            onChangeValue={changeValues}
                        />
                        <LabelText
                            name="Documento"
                            endpoint="document"
                            width="average"
                            value={values.document}
                            disabled={disabled}
                            type="CPF_CNPJ"
                            page="person"
                            required
                            onChangeValue={changeValues}
                        />
                        <LabelText
                            name="Fantasia/Apelido"
                            endpoint="tradeName"
                            width="big"
                            value={values.tradeName}
                            disabled={disabled}
                            type="GERAL"
                            page="person"
                            required
                            onChangeValue={changeValues}
                        />
                        <LabelText
                            name={
                                values.document.length > 14
                                    ? 'Inscrição Estadual'
                                    : 'Registro Geral'
                            }
                            endpoint="numberRegister"
                            width="average"
                            value={values.numberRegister}
                            disabled={disabled}
                            type="GERAL"
                            page="person"
                            required
                            onChangeValue={changeValues}
                        />
                        <LabelText
                            name="Telefone"
                            endpoint="phone"
                            width="average"
                            value={values.phone}
                            disabled={disabled}
                            type="PHONE"
                            page="person"
                            required
                            onChangeValue={changeValues}
                        />
                        <hr className="w-full bg-black" />
                        <LabelText
                            name="CEP"
                            endpoint="postCode"
                            width="small"
                            value={values.postCode}
                            disabled={disabled}
                            type="CEP"
                            page="person"
                            required
                            onChangeValue={changeValues}
                        />
                        <GetCEP
                            value={values.postCode}
                            handleClick={(e) => handleClickBuscaCEP(e)}
                        />
                        <LabelText
                            name="Endereço"
                            endpoint="address"
                            width="big"
                            value={values.address}
                            disabled={disabled}
                            type="GERAL"
                            page="person"
                            required
                            onChangeValue={changeValues}
                        />
                        <LabelText
                            name="Número"
                            endpoint="numberAddress"
                            width="small"
                            value={values.numberAddress}
                            disabled={disabled}
                            type="GERAL"
                            page="person"
                            required
                            onChangeValue={changeValues}
                        />
                        <LabelText
                            name="Bairro"
                            endpoint="district"
                            width="average"
                            value={values.district}
                            disabled={disabled}
                            type="GERAL"
                            page="person"
                            required
                            onChangeValue={changeValues}
                        />
                        <LabelText
                            name="Código IBGE"
                            endpoint="codDistrict"
                            width="small"
                            value={values.codDistrict}
                            disabled={disabled}
                            type="GERAL"
                            page="person"
                            required
                            onChangeValue={changeValues}
                        />
                        <LabelText
                            name="Cidade"
                            endpoint="city"
                            width="average"
                            value={values.city}
                            disabled={disabled}
                            type="GERAL"
                            page="person"
                            required
                            onChangeValue={changeValues}
                        />
                        <LabelText
                            name="Estado"
                            endpoint="state"
                            width="small"
                            value={values.state}
                            disabled={disabled}
                            type="GERAL"
                            page="person"
                            required
                            onChangeValue={changeValues}
                        />
                        <LabelText
                            name="Complemento"
                            endpoint="addressComplement"
                            width="big"
                            value={values.addressComplement}
                            disabled={disabled}
                            type="GERAL"
                            page="person"
                            required
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
            <Alert
                hidden={alert}
                message={messageAlert}
                type={colorMessage}
                closeAlert={() => setAlert(false)}
            />
        </>
    )
}
