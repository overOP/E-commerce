import { createBrowserRouter } from "react-router"
import MainLayout from "./Layout/MainLayout"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

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
