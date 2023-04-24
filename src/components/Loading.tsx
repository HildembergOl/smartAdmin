import { useState } from 'react'
import { Navigate, redirect } from 'react-router-dom'

type Props = { width: string; information: boolean }

export function Loading({ width, information }: Props) {
    let widthLoading
    const [notLoad, setNotLoad] = useState(false)

    if (width === 'small') {
        widthLoading = 'h-4'
    }
    if (width === 'average') {
        widthLoading = 'h-5'
    }
    if (width === 'big') {
        widthLoading = 'h-6'
    }
    if (width === 'page') {
        widthLoading = 'h-8'
    }
    setTimeout(() => {
        setNotLoad(true)
    }, 10000)

    return notLoad ? (
        <div className="flex h-full w-full flex-col items-center justify-center">
            <img
                src="../../public/icons/badrequest.png"
                alt="badRequest"
                className={`${widthLoading || 'h-4'} w-auto`}
            />
            {information && (
                <p className="m-5">
                    <p>Tivemos um problema com o servidor de dados,</p>
                    <p>por favor contate o administrador do sistema.</p>
                </p>
            )}
        </div>
    ) : (
        <div className="flex h-full w-full flex-col items-center justify-center">
            <img
                src="../../public/icons/loading.png"
                alt="loading"
                className={`${
                    widthLoading || 'h-4'
                } w-auto animate-spin transition`}
            />
            {information && (
                <p className="m-5">
                    Estamos carregando as informações, aguarde...
                </p>
            )}
        </div>
    )
}
