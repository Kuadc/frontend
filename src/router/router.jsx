import {createBrowserRouter} from "react-router-dom"
import App from "../App.jsx"
import Login from "../Pages/Login.jsx"
import Register from "../Pages/Register.jsx"
import Card from "../Pages/Card.jsx"
import Homepage from "../Pages/Homepage.jsx"

export const router = createBrowserRouter(
    [
        {path: "/", element: <App />, children:[
            {path: "/", element: <Homepage />},
            {path: "/Products", element:<Card/>},
            {path: "/Login", element:<Login />},
            {path: "/Register", element: <Register />}
        ]
    }, 
    ]
)