/* eslint-disable no-console */
import { useCallback, useEffect, useState } from 'react'
import { LabelText } from '../components/Forms/LabelForms'
import { Business } from '../api/BusinessApi'

type Props = {
    data: {
        id: string
        nameBusiness: string
        tradeName: string
        businessCNPJ: string
        stateRegister: string
        postCodeBusiness: string
        addressBusiness: string
        numberAddressBusiness: string
        districtBusiness: string
        cityBusiness: string
        stateBusiness: string
    }
    type: string
}

export function BusinessEntry({ data, type }: Props) {
    const [id, setId] = useState('')
    const [nameBusiness, setnameBusiness] = useState('')
    const [tradeName, settradeName] = useState('')
    const [businessCNPJ, setbusinessCNPJ] = useState('')
    const [stateRegister, setstateRegister] = useState('')
    const [postCodeBusiness, setpostCodeBusiness] = useState('')
    const [addressBusiness, setaddressBusiness] = useState('')
    const [numberAddressBusiness, setnumberAddressBusiness] = useState('')
    const [districtBusiness, setdistrictBusiness] = useState('')
    const [cityBusiness, setcityBusiness] = useState('')
    const [stateBusiness, setstateBusiness] = useState('')

    useEffect(() => {
        setId(data.id)
        setnameBusiness(data.nameBusiness)
        settradeName(data.tradeName)
        setbusinessCNPJ(data.businessCNPJ)
        setstateRegister(data.stateRegister)
        setpostCodeBusiness(data.postCodeBusiness)
        setaddressBusiness(data.addressBusiness)
        setnumberAddressBusiness(data.numberAddressBusiness)
        setdistrictBusiness(data.districtBusiness)
        setcityBusiness(data.cityBusiness)
        setstateBusiness(data.stateBusiness)
    }, [
        data.addressBusiness,
        data.businessCNPJ,
        data.cityBusiness,
        data.districtBusiness,
        data.id,
        data.nameBusiness,
        data.numberAddressBusiness,
        data.postCodeBusiness,
        data.stateBusiness,
        data.stateRegister,
        data.tradeName,
    ])

    const handleSubmit = useCallback(async () => {
        const body = {
            id,
            nameBusiness,
            tradeName,
            businessCNPJ,
            stateRegister,
            postCodeBusiness,
            addressBusiness,
            numberAddressBusiness,
            districtBusiness,
            cityBusiness,
            stateBusiness,
        }
        const submitType = type.split(' ')
        if (submitType[0] === 'Editar') {
            await Business.update(body)
        }
        if (submitType[0] === 'Cadastrar') {
            await Business.insert(body)
        }
        if (submitType[0] === 'Excluir') {
            await Business.delete(body.id)
        }
    }, [
        addressBusiness,
        businessCNPJ,
        cityBusiness,
        districtBusiness,
        id,
        nameBusiness,
        numberAddressBusiness,
        postCodeBusiness,
        stateBusiness,
        stateRegister,
        tradeName,
        type,
    ])

    return (
        <div className="h-min w-full rounded-md bg-slate-400">
            <p className="from-neutral-800 p-2 text-base font-semibold">
                Dados Básicos
            </p>
            <div className="flex h-full w-full flex-col items-start justify-start p-1">
                <div className="flex w-full flex-wrap items-start justify-start rounded-md max-sm:flex-col">
                    <LabelText
                        name="Código"
                        endpoint="idBusiness"
                        width="small"
                        value={id}
                        disabled
                        type="text"
                        page="business"
                        required
                        onChangeValue={(e) => {
                            setId(e)
                        }}
                    />
                    <LabelText
                        name="Razão Social"
                        endpoint="nameBusiness"
                        width="big"
                        value={nameBusiness}
                        disabled={false}
                        type="text"
                        page="business"
                        required
                        onChangeValue={(e) => {
                            setnameBusiness(e)
                        }}
                    />
                    <LabelText
                        name="Nome Fantasia"
                        endpoint="tradeName"
                        width="average"
                        value={tradeName}
                        disabled={false}
                        type="text"
                        page="business"
                        required
                        onChangeValue={(e) => {
                            settradeName(e)
                        }}
                    />
                    <LabelText
                        name="CNPJ"
                        endpoint="businessCNPJ"
                        width="average"
                        value={businessCNPJ}
                        disabled={false}
                        type="text"
                        page="business"
                        required
                        onChangeValue={(e) => {
                            setbusinessCNPJ(e)
                        }}
                    />
                    <LabelText
                        name="Inscrição Estadual"
                        endpoint="stateRegister"
                        width="average"
                        value={stateRegister}
                        disabled={false}
                        type="text"
                        page="business"
                        required
                        onChangeValue={(e) => {
                            setstateRegister(e)
                        }}
                    />
                    <LabelText
                        name="CEP"
                        endpoint="postCodeBusiness"
                        width="average"
                        value={postCodeBusiness}
                        disabled={false}
                        type="text"
                        page="business"
                        required
                        onChangeValue={(e) => {
                            setpostCodeBusiness(e)
                        }}
                    />
                    <LabelText
                        name="Endereço"
                        endpoint="addressBusiness"
                        width="big"
                        value={addressBusiness}
                        disabled={false}
                        type="text"
                        page="business"
                        required
                        onChangeValue={(e) => {
                            setaddressBusiness(e)
                        }}
                    />
                    <LabelText
                        name="Número"
                        endpoint="numberAddressBusiness"
                        width="small"
                        value={numberAddressBusiness}
                        disabled={false}
                        type="text"
                        page="business"
                        required
                        onChangeValue={(e) => {
                            setnumberAddressBusiness(e)
                        }}
                    />
                    <LabelText
                        name="Bairro"
                        endpoint="districtBusiness"
                        width="average"
                        value={districtBusiness}
                        disabled={false}
                        type="text"
                        page="business"
                        required
                        onChangeValue={(e) => {
                            setdistrictBusiness(e)
                        }}
                    />
                    <LabelText
                        name="Cidade"
                        endpoint="cityBusiness"
                        width="average"
                        value={cityBusiness}
                        disabled={false}
                        type="text"
                        page="business"
                        required
                        onChangeValue={(e) => {
                            setcityBusiness(e)
                        }}
                    />
                    <LabelText
                        name="Estado"
                        endpoint="stateBusiness"
                        width="average"
                        value={stateBusiness}
                        disabled={false}
                        type="text"
                        page="business"
                        required
                        onChangeValue={(e) => {
                            setstateBusiness(e)
                        }}
                    />
                </div>
                <button type="submit" onClick={handleSubmit}>
                    Confirmar
                </button>
            </div>
        </div>
    )
}
