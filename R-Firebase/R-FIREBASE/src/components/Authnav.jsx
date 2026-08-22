import React from 'react'
import { Link } from 'react-router'

const Authnav = () => {
    return (
        <div>
            <div>
                <nav className='flex justify-between items-center m-2 p-4 rounded-2xl bg-[#F63A3A]'>
                    <h1 className='text-2xl font-bold'>Welcome to Urban Unique Store</h1>
                    <ul className='flex gap-4 justify-center items-center'>
                        <li>
                            <Link to="/Login" className="bg-indigo-500 p-2 text-white rounded-2xl">Login</Link>
                        </li>
                        <li>
                            <Link to="/Register" className="bg-indigo-500 p-2 text-white rounded-2xl">Register</Link>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    )
}

export default Authnav
