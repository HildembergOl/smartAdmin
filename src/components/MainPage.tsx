import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'

type PropsChildren = { children: React.ReactNode }

export function MainPage({ children }: PropsChildren) {
    return (
        <div id="MainPage" className="m-0 p-0 ">
            <Navbar />
            <div
                id="MiddlePage"
                className="flex h-[calc(100vh-4rem)] w-full items-start bg-slate-200"
            >
                <Sidebar />
                <div
                    id="RightSide"
                    className="m-1 flex w-full flex-col break-all"
                >
                    {children}
                </div>
            </div>
        </div>
    )
}
