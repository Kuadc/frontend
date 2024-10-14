
import Register from './Pages/Register'
import Card from './Pages/Card'
import Menu from './Pages/Menu'

import viteLogo from '/vite.svg'
import './App.css'


import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Login from './Pages/Login'


function App() {


  return (
    <>
    <BrowserRouter>
    
      <Routes>
      <Route path="/" element={<Menu />}>
        <Route index element={<Card />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
