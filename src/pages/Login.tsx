/* eslint-disable jsx-a11y/anchor-is-valid */
export function Login() {
    return (
        <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-screen max-w-md space-y-8">
                <div>
                    <img
                        className="mx-auto h-12 w-auto"
                        src="https://lh5.ggpht.com/j1ApuLH0mpiIVUjn8yNjBhEyom0btQM7uky4W7da9lPQBaobEf6UcHyOmjAWCs_thOlY=w300"
                        alt="Smart Admin Logo"
                    />
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Entre na sua conta
                    </h2>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <div className="-space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                e-mail
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="relative block w-full rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="e-mail"
                            />
                        </div>
                        <br />
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Senha
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="relative block w-full rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Senha"
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <span
                                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                    aria-hidden="true"
                                />
                            </span>
                            Entrar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
