import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'

type PropsChildren = { children: React.ReactNode }

export function MainPage({ children }: PropsChildren) {
    return (
        <div
            id="MainPage"
            className="fixed m-0 flex h-screen w-screen flex-col p-0 "
        >
            <Navbar />
            <div
                id="MiddlePage"
                className="flex h-full max-h-[calc(100%-4rem)] w-full max-w-full flex-row bg-slate-200"
            >
                <Sidebar />
                <div id="RightSide" className="flex h-full w-full flex-col p-3">
                    {children}
                </div>
            </div>
        </div>
    )
}
