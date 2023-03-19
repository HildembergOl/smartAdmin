import { Route, Routes } from 'react-router-dom'
import { Business } from '../pages/Business'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import { Person } from '../pages/Person'
import { User } from '../pages/User'
import { RequireAuth } from '../services/RequireAuth'
import { Login } from '../pages/Login'

export function RoutesApp() {
    return (
        <Routes>
            <Route path="auth/login" element={<Login />} />
            <Route
                path="/"
                element={
                    <RequireAuth>
                        <Home />
                    </RequireAuth>
                }
            />
            <Route
                path="/dashboard"
                element={
                    <RequireAuth>
                        <Home />
                    </RequireAuth>
                }
            />
            <Route
                path="/person"
                element={
                    <RequireAuth>
                        <Person />
                    </RequireAuth>
                }
            />
            <Route
                path="/user"
                element={
                    <RequireAuth>
                        <User />
                    </RequireAuth>
                }
            />
            <Route
                path="/business"
                element={
                    <RequireAuth>
                        <Business />
                    </RequireAuth>
                }
            />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
