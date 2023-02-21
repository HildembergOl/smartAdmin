import { Navigate } from 'react-router-dom'
import { MainPage } from '../components/MainPage'

type Props = {
    children: JSX.Element
}

export function RequireAuth({ children }: Props) {
    const isAuth = true

    return isAuth ? (
        <MainPage>{children}</MainPage>
    ) : (
        <Navigate to="/auth/login" />
    )
}
