/* eslint-disable @typescript-eslint/no-explicit-any */
type Props = {
    children: React.ReactNode
    handleClickClose: (e: any) => void
    type: string
}

export function Modal({ children, handleClickClose, type }: Props) {
    return (
        <div
            className="fixed inset-0 z-[100] flex h-full w-full flex-row items-center justify-center  bg-black/70"
            onClick={handleClickClose}
            aria-hidden="true"
            id="modalEntry"
        >
            <div className="h-4/5 w-[70%] overflow-x-auto rounded-2xl bg-slate-300 p-2">
                <div className="flex items-center justify-start rounded-sm rounded-t-2xl bg-slate-300">
                    <p className=" from-neutral-800 p-2 text-xl font-semibold">
                        {type}
                    </p>
                </div>
                {children}
            </div>
        </div>
    )
}
