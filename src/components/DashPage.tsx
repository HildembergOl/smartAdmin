import { Card } from './Card'

type Props = {
    visible: boolean
    all: { name: string; value: number }
    active: { name: string; value: number }
    inactive: { name: string; value: number }
    atention: { name: string; value: number }
}

export function DashPage({ visible, all, active, inactive, atention }: Props) {
    const { name: allName, value: allValue } = all
    const { name: activeName, value: activeValue } = active
    const { name: inactiveName, value: inactiveValue } = inactive
    const { name: atentionName, value: atentionValue } = atention

    return (
        <div
            id="dasboard"
            className={`${
                visible ? '' : 'hidden'
            } flex h-auto w-full flex-row items-center justify-between bg-transparent`}
        >
            <Card name={allName} value={allValue} color="bg-card-all" />
            <Card
                name={activeName}
                value={activeValue}
                color="bg-card-active"
            />
            <Card
                name={inactiveName}
                value={inactiveValue}
                color="bg-card-inactive"
            />
            <Card
                name={atentionName}
                value={atentionValue}
                color="bg-card-atention"
            />
        </div>
    )
}
