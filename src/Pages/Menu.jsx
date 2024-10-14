import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import "./Menu.css"

export default function Menu() {
  return (
    <>
    
    <nav>
                <Link  className="link" to="/">Home</Link>
                <Link className="link" to="/register">Register</Link>
                <Link className='link' to="/login">Login</Link>
            
    </nav>
    <Outlet />
    </>
  )
}
