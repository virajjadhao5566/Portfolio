'use client'
import React from 'react'

const AboutCard = () => {
    return (
        <div className=" border-1 border-emerald-950 w-7/12 card lg:card-side bg-base-100 shadow-2xl shadow-sky-950 bg-gradient-to-b from-white to-gray-300">
            <div className=" font-mono text-gray-600 ml-10 mt-5 card-body">
                <h1 className="text-5xl card-title">Viraj Jadhav</h1>
            </div>
            <figure><img className=" w-96" src="/vj_photo2-removebg.png" alt="Album" /></figure>
        </div>
    )
}

export default AboutCard
