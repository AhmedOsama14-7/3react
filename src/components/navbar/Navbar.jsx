import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header>
        <nav>
            <NavLink className='shop_btn' to={'/'}>Shop</NavLink>
        </nav>
    </header>
  )
}

