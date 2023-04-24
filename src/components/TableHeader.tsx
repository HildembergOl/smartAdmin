type PropsValue = { value: string }
type PropsTable = { children: React.ReactNode }
type PropsTableArea = { children: React.ReactNode; visible: boolean }

export function TableHeaderRowValue({ value }: PropsValue) {
    return <th className="table-cell p-4">{value}</th>
}

export function TableHeaderRow({ children }: PropsTable) {
    return <tr className="table-row text-sm ">{children}</tr>
}

export function TableHeader({ children }: PropsTable) {
    return (
        <thead className="table-header-group text-gray-700">{children}</thead>
    )
}

export function TableArea({ children, visible }: PropsTableArea) {
    return (
        <div className="flex h-full min-h-full w-full flex-col overflow-auto">
            <table
                className={`${
                    visible ? '' : 'hidden'
                } table w-full bg-slate-300 p-2`}
            >
                {children}
            </table>
        </div>
    )
}
