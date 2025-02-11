
import Menu from './Pages/Menu'

import './App.css'


import { BrowserRouter , Routes, Route, Outlet } from 'react-router-dom';



function App() {


  return (
    <>
    <Menu />
    <Outlet />
    </>
  )
}

export default App
