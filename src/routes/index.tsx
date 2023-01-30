import { Routes, Route } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { NotFound } from '../pages/NotFound'
import { RequireAuth } from '../services/RequireAuth'

export function RoutesApp() {
    return (
        <div>
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
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}
