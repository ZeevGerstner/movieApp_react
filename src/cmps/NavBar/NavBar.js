import React from 'react'
import { NavLink } from "react-router-dom"
import './navBar.css'

const NavBar = () => (
  <nav className="nav-bar">
    <NavLink to="/">Home</NavLink>
  </nav>
)
    
export default NavBar