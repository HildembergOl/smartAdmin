type PropsValue = { value: string }
type PropsTable = { children: React.ReactNode }
type PropsTableArea = { children: React.ReactNode; visible: true }

export function TableHeaderRowValue({ value }: PropsValue) {
    return <th className="table-cell">{value}</th>
}

export function TableHeaderRow({ children }: PropsTable) {
    return (
        <tr className="table-row text-sm max-sm:text-[0.6rem] max-sm:font-normal">
            {children}
        </tr>
    )
}

export function TableHeader({ children }: PropsTable) {
    return (
        <thead className="table-header-group text-gray-700">{children}</thead>
    )
}

export function TableArea({ children, visible }: PropsTableArea) {
    return (
        <table
            className={`${
                visible ? '' : 'hidden'
            } table h-auto w-full overflow-x-auto bg-slate-300`}
        >
            {children}
        </table>
    )
}
