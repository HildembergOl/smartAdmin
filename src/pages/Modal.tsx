import { useLocation } from 'react-router-dom'
import { SetStateAction, useState } from 'react'
import { Model } from '../model'
import { PropsModel } from '../types'
import { Tab, TabArea } from '../components/Tab'

export function Modal() {
    const location = useLocation()
    const urlParams = location.pathname.substring(1).split('/')
    const page = urlParams[0] as string
    const type = urlParams[1] as string
    const id = urlParams[2] as string

    const model: PropsModel = Model(page)

    // eslint-disable-next-line no-console
    console.log(model)

    const cab = () => {
        if (type === 'edit') {
            return `Editar ${model.name}`
        }
        if (type === 'new') {
            return `Cadastrar ${model.name}`
        }
        return ''
    }
    const cabFull = cab()

    const [select, setSelect] = useState(1)

    const handleClick = (value: SetStateAction<number>) => {
        setSelect(value)
    }

    return (
        <>
            {cabFull}
            <TabArea data={model.values} select={select} page={type}>
                {model.tabs.map((t) => {
                    return (
                        <Tab
                            key={`modal-${model.endpoint}-${t.id}`}
                            id={t.id}
                            select={select}
                            handleClick={handleClick}
                        >
                            {t.name}
                        </Tab>
                    )
                })}
            </TabArea>
        </>
    )
}
