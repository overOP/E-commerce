import { createBrowserRouter } from "react-router"
import MainLayout from "./Layout/MainLayout"
import Signup from "./pages/Signup"
import Login from "./pages/Login"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <Signup/>
            }
        ]
    }
])
