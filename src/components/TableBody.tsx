import { ButtonDelete, ButtonEdit } from './Button'

type PropsValue = { value: string | number }
type PropsTable = { children: React.ReactNode }
type PropsTableRow = {
    children: React.ReactNode
    rowId: number | string
}
type PropsButtonAction = {
    id: number
    onClickEdit: (e: number) => void
    onClickDelete: (e: number) => void
}

export function TableBodyRowValue({ value }: PropsValue) {
    return <th className="table-cell cursor-pointer p-4">{value}</th>
}

export function TableBodyRow({ children, rowId }: PropsTableRow) {
    return (
        <tr
            table-row-id={rowId}
            className="table-row min-h-[3rem] border-separate border-zinc-400 bg-slate-200 p-1 text-xs shadow-sm hover:border-y-[0.5px] hover:bg-slate-300"
        >
            {children}
        </tr>
    )
}

export function TableBody({ children }: PropsTable) {
    return (
        <tbody className="table-row-group overflow-x-auto bg-slate-200 text-xs font-normal text-gray-600 max-sm:text-[0.5rem]  max-sm:font-normal">
            {children}
        </tbody>
    )
}

export function ButtonActionsArea({
    id,
    onClickEdit,
    onClickDelete,
}: PropsButtonAction) {
    return (
        <th key={`button-action-${id}`} className="table-cell items-center">
            <div className="flex max-h-[3rem] min-h-[3rem] min-w-[6rem] max-w-[6rem] flex-row content-between items-center justify-between">
                <ButtonEdit handleClick={() => onClickEdit(id)} />
                <ButtonDelete handleClick={() => onClickDelete(id)} />
            </div>
        </th>
    )
}
