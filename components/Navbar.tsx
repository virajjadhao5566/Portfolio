'use client'

import React from 'react'

const Navbar = () => {
    return (
        <nav className="text-white navbar bg-gradient-to-b from-indigo-400 via-grey-100 to-white  bg-base-100 text-purple ">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Viraj</a>
            </div>
            <div className="flex-1">
                <ul className="ml-10 menu menu-horizontal px-1 justify-between">
                    <li className='px-4'><a>Link</a></li>
                    <li className='px-4'><a>Link</a></li>
                    <li className='px-4'><a>Link</a></li>
                    <li className='px-4'><a>Link</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
