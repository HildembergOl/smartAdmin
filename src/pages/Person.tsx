import { MainPage } from '../components/MainPage'

export function Person() {
    return (
        <MainPage>
            <div
                id="dasboard"
                className="m-auto flex h-auto w-full flex-row items-center justify-between bg-transparent p-1"
            >
                <div
                    id="qtd"
                    className="m-0 h-auto w-1/5 items-center rounded-xl bg-orange-400 p-1 text-center align-top font-semibold text-stone-900 shadow-md shadow-gray-400 max-sm:h-[70px] max-sm:w-[25%]"
                >
                    <span className="m-0 flex flex-row items-center justify-center p-1 text-center max-sm:text-[0.6rem] max-sm:font-bold">
                        Pessoas
                    </span>
                    <span>100</span>
                </div>
                <div
                    id="atv"
                    className="m-0 h-auto w-1/5 items-center rounded-xl bg-green-400 p-1 text-center align-top font-semibold text-stone-900 shadow-md shadow-gray-400 max-sm:h-[70px] max-sm:w-[25%]"
                >
                    <span className="m-0 flex flex-row items-center justify-center p-1 text-center max-sm:text-[0.6rem] max-sm:font-bold">
                        Ativos
                    </span>
                    <span>100</span>
                </div>
                <div
                    id="inv"
                    className="m-0 h-auto w-1/5 items-center rounded-xl bg-red-400 p-1 text-center align-top font-semibold text-stone-900 shadow-md shadow-gray-400 max-sm:h-[70px] max-sm:w-[25%]"
                >
                    <span className="m-0 flex flex-row items-center justify-center p-1 text-center max-sm:text-[0.6rem] max-sm:font-bold">
                        Inativos
                    </span>
                    <span>100</span>
                </div>
                <div
                    id="pdt"
                    className="m-0 h-auto w-1/5 items-center rounded-xl bg-yellow-400 p-1 text-center align-top font-semibold text-stone-900 shadow-md shadow-gray-400 max-sm:h-[70px] max-sm:w-[25%]"
                >
                    <span className="m-0 flex flex-row items-center justify-center p-1 text-center max-sm:text-[0.6rem] max-sm:font-bold">
                        Pendentes
                    </span>
                    <span>100</span>
                </div>
            </div>
            <span className="my-2 ml-4 flex h-auto w-16 flex-row items-center justify-between font-semibold text-zinc-800 ">
                <p className="font-semibold text-gray-800">Filtros</p>
                <img
                    className="h-4 w-auto cursor-pointer rounded-full border-[0.5px] border-gray-800 p-[2px]"
                    src="../../public/icons/seta.png"
                    alt="abrir/fechar"
                />
            </span>
            <div className="flex h-auto w-full flex-row rounded-md bg-slate-400 shadow-sm max-sm:flex-col">
                <label
                    htmlFor="description"
                    className="m-1 flex h-auto w-1/5 flex-col max-sm:w-[80%]"
                >
                    <p className="text-sm font-semibold text-gray-800">
                        Descrição
                    </p>
                    <input
                        type="text"
                        id="description"
                        className="m-1 rounded bg-slate-300 pl-2 shadow-sm shadow-slate-500 focus:no-underline focus:outline-none"
                    />
                </label>
                <label
                    htmlFor="document"
                    className="m-1 flex h-auto w-1/5 flex-col max-sm:w-[80%]"
                >
                    <p className="text-sm font-semibold text-gray-800">
                        Documento
                    </p>
                    <input
                        type="text"
                        id="document"
                        className="m-1 rounded bg-slate-300 pl-2 shadow-sm shadow-slate-500 focus:no-underline focus:outline-none"
                    />
                </label>
                <label
                    htmlFor="endereco"
                    className="m-1 flex h-auto w-1/5 flex-col max-sm:w-[80%]"
                >
                    <p className="text-sm font-semibold text-gray-800">
                        Endereço
                    </p>
                    <input
                        type="text"
                        id="endereco"
                        className="m-1 rounded bg-slate-300 pl-2 shadow-sm shadow-slate-500 focus:no-underline focus:outline-none"
                    />
                </label>
                <label
                    htmlFor="tag"
                    className="m-1 flex h-auto w-1/5 flex-col max-sm:w-[80%]"
                >
                    <p className="text-sm font-semibold text-gray-800">Tag</p>
                    <input
                        type="text"
                        id="tag"
                        className="m-1 rounded bg-slate-300 pl-2 shadow-sm shadow-slate-500 focus:no-underline focus:outline-none"
                    />
                </label>
                <label
                    htmlFor="situation"
                    className="m-1 flex h-auto w-1/5 flex-col max-sm:w-[80%]"
                >
                    <p className="text-sm font-semibold text-gray-800">
                        Situação
                    </p>
                    <select
                        id="situation"
                        className="m-1 rounded bg-slate-300 pl-2 text-sm shadow-sm shadow-slate-500 focus:no-underline focus:outline-none"
                    >
                        <option value="">Todos</option>
                        <option value="active">Ativos</option>
                        <option value="inactive">Inativos</option>
                        <option value="pending">Pendentes</option>
                    </select>
                </label>
            </div>
            <div className="ml-3 flex w-1/3 flex-row items-start py-4 max-md:w-full">
                <div className="mr-3 w-20 cursor-pointer items-center rounded-md bg-lime-500 py-[2px] px-4 font-semibold shadow shadow-slate-500">
                    Incluir
                </div>
                <div className="mr-3 w-20 cursor-pointer items-center rounded-md bg-yellow-500 py-[2px] px-4 font-semibold shadow shadow-slate-500">
                    Editar
                </div>
                <div className="mr-3 w-20 cursor-pointer items-center rounded-md bg-red-500 py-[2px] px-4 font-semibold shadow shadow-slate-500">
                    Excluir
                </div>
            </div>
            <table className="table h-auto w-full bg-slate-300">
                <thead className="table-header-group text-gray-700">
                    <tr className="table-row text-sm max-sm:text-[0.6rem] max-sm:font-normal">
                        <th className="table-cell">Código</th>
                        <th className="table-cell">Nome</th>
                        <th className="table-cell">Documento</th>
                        <th className="table-cell">Endereço</th>
                        <th className="table-cell">Tag</th>
                        <th className="table-cell">Situação</th>
                    </tr>
                </thead>
                <tbody className="table-row-group cursor-pointer bg-slate-200 font-normal text-gray-600 max-sm:text-[0.5rem] max-sm:font-normal">
                    <tr className="my-[2px] table-row border-separate  border-zinc-400 bg-slate-200 p-1 text-xs shadow-sm hover:border-y-[0.5px] hover:bg-slate-300">
                        <th className="table-cell">0001</th>
                        <th className="table-cell">
                            HILDEMBERG CORREIA OLIVEIRA
                        </th>
                        <th className="table-cell">021.660.693-47</th>
                        <th className="table-cell">
                            Rua Joaquim Marques, 15 - Apto 601
                        </th>
                        <th className="table-cell">
                            <div className="flex flex-col items-center">
                                <span className="m-[0.5px] w-auto items-center rounded-lg border-[1px] border-slate-300 py-[2px] px-[4px]">
                                    Cliente
                                </span>
                                <span className="m-[0.5px] w-auto items-center rounded-lg border-[1px] border-slate-300 py-[2px] px-[4px]">
                                    Fornecedor
                                </span>
                            </div>
                        </th>
                        <th className="table-cell">Ativo</th>
                    </tr>
                    <tr className="my-[2px] table-row border-separate cursor-pointer border-zinc-400 bg-slate-200 p-1 text-xs shadow-sm hover:border-y-[0.5px] hover:bg-slate-300">
                        <th className="table-cell">0001</th>
                        <th className="table-cell">
                            HILDEMBERG CORREIA OLIVEIRA
                        </th>
                        <th className="table-cell">021.660.693-47</th>
                        <th className="table-cell">
                            Rua Joaquim Marques, 15 - Apto 601
                        </th>
                        <th className="table-cell">
                            <div className="flex flex-col items-center">
                                <span className="m-[0.5px] w-auto items-center rounded-lg border-[1px] border-slate-300 py-[2px] px-[4px]">
                                    Cliente
                                </span>
                                <span className="m-[0.5px] w-auto items-center rounded-lg border-[1px] border-slate-300 py-[2px] px-[4px]">
                                    Fornecedor
                                </span>
                            </div>
                        </th>
                        <th className="table-cell">Ativo</th>
                    </tr>
                    <tr className="my-[2px] table-row border-separate cursor-pointer border-zinc-400 bg-slate-200 p-1 text-xs shadow-sm hover:border-y-[0.5px] hover:bg-slate-300">
                        <th className="table-cell">0001</th>
                        <th className="table-cell">
                            HILDEMBERG CORREIA OLIVEIRA
                        </th>
                        <th className="table-cell">021.660.693-47</th>
                        <th className="table-cell">
                            Rua Joaquim Marques, 15 - Apto 601
                        </th>
                        <th className="table-cell">
                            <div className="flex flex-col items-center">
                                <span className="m-[0.5px] w-auto items-center rounded-lg border-[1px] border-slate-300 py-[2px] px-[4px]">
                                    Cliente
                                </span>
                                <span className="m-[0.5px] w-auto items-center rounded-lg border-[1px] border-slate-300 py-[2px] px-[4px]">
                                    Fornecedor
                                </span>
                            </div>
                        </th>
                        <th className="table-cell">Ativo</th>
                    </tr>
                </tbody>
            </table>
        </MainPage>
    )
}
