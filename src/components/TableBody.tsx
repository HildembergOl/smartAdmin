type PropsValue = { value: string | number }
type PropsTable = { children: React.ReactNode }
type PropsTableRow = {
    children: React.ReactNode
    rowId: number
}

export function TableBodyRowValue({ value }: PropsValue) {
    return <th className="table-cell">{value}</th>
}

export function TableBodyRow({ children, rowId }: PropsTableRow) {
    return (
        <tr
            table-row-id={rowId}
            className="my-[2px] table-row border-separate  border-zinc-400 bg-slate-200 p-1 text-xs shadow-sm hover:border-y-[0.5px] hover:bg-slate-300"
        >
            {children}
        </tr>
    )
}

export function TableBody({ children }: PropsTable) {
    return (
        <tbody className="table-row-group cursor-pointer bg-slate-200 font-normal text-gray-600 max-sm:text-[0.5rem] max-sm:font-normal">
            {children}
        </tbody>
    )
}
