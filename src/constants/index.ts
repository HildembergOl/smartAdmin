type PropsAlertMessage = {
    [code: string]: string
}
export const AlertMessage: PropsAlertMessage = {
    '00': 'Preencha todos os campos antes de confirmar.',
    '01': 'O CEP digitado é inválido',
}
export const PersonOptions = [
    { name: 'Código', endpoint: 'id' },
    { name: 'Nome', endpoint: 'namePerson' },
    { name: 'Doc.:', endpoint: 'document' },
    { name: 'Bairro', endpoint: 'district' },
    { name: 'Cidade', endpoint: 'city' },
    { name: 'Estado', endpoint: 'state' },
]
export const BusinessOptions = [
    { name: 'Código', endpoint: 'id' },
    { name: 'Nome', endpoint: 'nameBusiness' },
    { name: 'Doc.:', endpoint: 'businessCNPJ' },
]
export const Reference = () => {
    const now = new Date().getFullYear()
    const arr: number[] = []
    arr.push(now)
    arr.push(now + 1)

    const month = [
        'JAN',
        'FEV',
        'MAR',
        'ABR',
        'MAI',
        'JUN',
        'JUL',
        'AGO',
        'SET',
        'OUT',
        'NOV',
        'DEZ',
    ]
    const arr1 = arr.map((y) => {
        return month.map((m) => {
            return `${m}/${y}`
        })
    })
    const competence = arr1[0].concat(arr1[1])
    const obj = competence.map((i) => {
        return { value: i }
    })
    return obj
}
export const DateParse = (date: string, type: string) => {
    if (type === 'back' && date) {
        const dateFormated = date.substring(0, 10)
        return dateFormated
    }
    if (type === 'front' && date) {
        const dateFormated = date
            .substring(0, 10)
            .split('-')
            .reverse()
            .join('/')
        return dateFormated
    }
    return ''
}
export const ValueParse = (value: number) => {
    console.log('ValueParse:', value)
    return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}
