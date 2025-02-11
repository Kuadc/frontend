import {createBrowserRouter} from "react-router-dom"
import App from "../App.jsx"
import Homepage from "../Pages/Homepage.jsx"
import {Dashboard} from "../Pages/Dashboard.jsx"



export const router = createBrowserRouter(
    [
        {path: "/", element: <App />, children:[
            {path: "/", element: <Homepage />},
            {path: "/Dashboard", element: <Dashboard /> },

        ]
    }, 
    ]
)