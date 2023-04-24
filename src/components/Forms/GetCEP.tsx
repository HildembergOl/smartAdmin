import axios from 'axios'
import { BuscaCEPValues } from '../../types'

type PropsGetCEP = {
    value: string
    handleClick: (e: BuscaCEPValues) => void | undefined
}
export function GetCEP({ handleClick, value }: PropsGetCEP) {
    const handelClickBuscaCEP = async () => {
        const CEP = value.replace('.', '').replace('-', '')
        if (CEP) {
            const viaCEPValue = (await axios({
                method: 'get',
                url: `https://viacep.com.br/ws/${CEP}/json/`,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                },
            }).then((e) => e.data)) as BuscaCEPValues
            return handleClick(viaCEPValue)
        }
        return handleClick({erro: true})
    }
    return (
        <div
            className="mt-10 flex h-6 w-12 flex-row items-center justify-center"
            placeholder="BuscaCep"
        >
            <div
                className="mb-1 flex h-6 w-12 items-center justify-center py-2"
                onClick={handelClickBuscaCEP}
                aria-hidden
            >
                <div className="flex h-5 w-10 cursor-pointer items-center justify-around rounded bg-[#5170fe] p-1 text-sm font-semibold text-slate-200 shadow-md duration-200 ease-in-out hover:h-6 hover:w-12 hover:text-lg">
                    <img
                        className="h-[100%] w-auto"
                        src="../../public/icons/search.png"
                        alt="Novo registro"
                    />
                </div>
            </div>
        </div>
    )
}
