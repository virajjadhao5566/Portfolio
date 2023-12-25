'use client'

import React from 'react'

const Navbar = () => {
    return (
        <div className="sticky top-0 z-10 text-xl text-amber navbar bg-gradient-to-b from-indigo-400 via-grey-100 to-bg-base-100 text-purple ">
            <div className="flex-1">
                <a className="text-2xl btn btn-ghost ml-8">Viraj.</a>
            </div>
            <div className="flex-1">
                <ul className="text-xl ml-10 menu menu-horizontal px-1 justify-between">
                    <li className='px-4'><a href='#home'>Home</a></li>
                    <li className='px-4'><a href='#about'>About</a></li>
                    <li className='px-4'><a>Experience</a></li>
                    <li className='px-4'><a>Projects</a></li>
                    <li className='px-4'><a>Socials</a></li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Navbar
