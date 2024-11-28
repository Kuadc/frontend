
import Register from './Pages/Register'
import Card from './Pages/Card'
import Menu from './Pages/Menu'


import './App.css'


import { BrowserRouter , Routes, Route, Outlet } from 'react-router-dom';
import Login from './Pages/Login'


function App() {


  return (
    <>
    <Menu />
    <Outlet />
    </>
  )
}

export default App
