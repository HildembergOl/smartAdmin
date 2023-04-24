type Props = { name: string; value: number; color: string }

export function Card({ name, value, color }: Props) {
    return (
        <div
            className={`m-0 h-auto w-1/5 items-center rounded-xl ${color} flex flex-col p-1 text-center align-top font-semibold text-stone-900 shadow-md shadow-gray-400 max-sm:h-[70px] max-sm:w-[25%]`}
        >
            <span className="m-0 w-full items-start p-1 text-center max-sm:text-[0.6rem] max-sm:font-bold">
                {name}
            </span>
            <span className="w-full">{value}</span>
        </div>
    )
}
