import { Routes, Route } from 'react-router-dom'
import { Business } from '../pages/Business'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { NotFound } from '../pages/NotFound'
import { Person } from '../pages/Person'
import { User } from '../pages/User'
import { RequireAuth } from '../services/RequireAuth'

export function RoutesApp() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <RequireAuth>
                        <Home />
                    </RequireAuth>
                }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="/person" element={<Person />} />
            <Route path="/user" element={<User />} />
            <Route path="/business" element={<Business />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
