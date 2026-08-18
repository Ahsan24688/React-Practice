import React from 'react'
import { Link, NavLink } from 'react-router'
import Landing from '../pages/Landing'
import Products from '../pages/Products'

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-between items-center m-2 p-4 rounded-2xl bg-[#F63A3A]'>
        <h1 className='text-2xl font-bold'>Urban Unique Store</h1>
        <ul className='flex gap-4 justify-center items-center'>
          <li>
            <NavLink to="/" className={'bg-amber-200 p-3 rounded-2xl'}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/Products" className={'bg-amber-200 p-3 rounded-2xl hover:bg-amber-300'}>Products</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
