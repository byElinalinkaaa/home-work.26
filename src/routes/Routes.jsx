/* eslint-disable prettier/prettier */
import { Route, Routes } from 'react-router'
import { UserLayout } from '../layout/UserLayout'
import { MealsPage } from '../pages/MealsPage'
import { SignInPage } from '../pages/SignIn'
import { SignUpPage } from '../pages/SignUp'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<UserLayout />}>
                <Route index element={<MealsPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/signin" element={<SignInPage />} />
            </Route>
        </Routes>
    )
}
