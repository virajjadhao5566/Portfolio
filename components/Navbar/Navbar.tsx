'use client'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <main className="sticky top-0 z-10 text-xl text-amber navbar bg-gradient-to-b from-indigo-400 via-grey-100 to-bg-base-100 text-purple ">
            <div className="flex-1">
                <Link href='#about' className="text-2xl btn btn-ghost ml-8">Viraj.</Link>
            </div>
            <div className="flex-1">
                <ul className="text-xl ml-10 menu menu-horizontal px-1 justify-between">
                    <li className='px-4'><Link href={'#home1'}>Home</Link></li>
                    <li className='px-4'><Link href='#about'>About</Link></li>
                    <li className='px-4'><Link href={'#experience'}>Experience</Link></li>
                    <li className='px-4'><Link href={'#about'}>Projects</Link></li>
                    <li className='px-4'><Link href={'#about'}>Socials</Link></li>
                </ul>
            </div>
        </main>
    )
}

export default Navbar
