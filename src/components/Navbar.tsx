import { HamburguerMenu } from './ButtonMenuOpen'

export function Navbar() {
    return (
        <nav className="h-16 w-full rounded-br-md bg-slate-700 shadow-lg  ">
            <div className="mx-auto h-auto w-full px-4 ">
                <div className="flex h-16 items-center justify-between">
                    <HamburguerMenu />
                    <img
                        className="my-auto h-11 w-auto"
                        src="../../public/icons/logo.png"
                        alt="Smart Admin"
                    />
                </div>
            </div>
        </nav>
    )
}
