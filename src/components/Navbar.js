import { NavLink } from 'react-router-dom'
import React from 'react'

const Navbar = () => {
  return (
    <>
    
        <NavLink to="/">Home</NavLink>
        <NavLink to="/View">View</NavLink>
        <NavLink to="/DataInsert">DataInsert</NavLink>
        <NavLink to="/Help">Help</NavLink>
    
    </>
  )
}

export default Navbar