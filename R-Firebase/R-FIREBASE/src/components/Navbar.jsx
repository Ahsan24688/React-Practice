import React from 'react'
import { Link, NavLink } from 'react-router'
import Landing from '../pages/Landing'
import Products from '../pages/Products'

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-between items-center m-2 p-4 rounded-2xl border-2 bg-indigo-300'>
        <h1>Logo</h1>
        <ul className='flex gap-4'>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/Products">Products</NavLink>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
