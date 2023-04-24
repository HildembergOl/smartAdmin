import { AlertMessage } from '../constants'

type PropsAlert = {
    hidden: boolean
    message: string
    type: string
    closeAlert: () => void
}
export function Alert({ hidden, message, type, closeAlert }: PropsAlert) {
    let color
    let srcImg

    if (type === 'danger') {
        color = 'bg-[#f44336]'
        srcImg = '../../public/icons/danger.png'
    }
    if (type === 'atention') {
        color = 'bg-[#ffa657]'
        srcImg = '../../public/icons/atention.png'
    }
    if (type === 'confirmed') {
        color = 'bg-[#49a74d]'
        srcImg = '../../public/icons/confirmed.png'
    }

    return (
        <div
            className={`my-4 ${
                !hidden ? 'hidden' : ''
            } ${color} flex h-10 w-full flex-row items-center justify-between rounded-md px-4 font-semibold text-white transition ease-in`}
        >
            <img
                className="my-auto h-9 w-auto rounded-full"
                src={srcImg}
                alt="Alerta"
            />
            <div className="w-auto">{AlertMessage[message]}</div>
            <div
                className="cursor-pointer items-center justify-center p-3"
                onClick={closeAlert}
                aria-hidden
            >
                X
            </div>
        </div>
    )
}
