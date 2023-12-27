
import React from 'react'

const HomeCard = () => {
    return (
        <div className="m-3 border-1 border-emerald-950 w-7/12 card lg:card-side bg-base-100 shadow-2xl shadow-sky-950 bg-gradient-to-b from-white to-gray-300 hover:border-sky-200 hover:shadow-[0_0_4px_#fff,inset_0_0_2px_#fff,0_0_5px_#000,0_0_15px_#000,0_0_30px_#000]">
            <div className="flex-1 font-mono text-gray-600 ml-10 mt-5 card-body">
                <h1 className="text-5xl card-title">Viraj Jadhav</h1>
                <p className=' text-lg '>Helloo! I am Viraj and i am a computer engineering student. 
                I have interest in web development and i have love to solve logical problems.</p>
            </div>
            <figure className='flex-1 pl-6'><img className=" w-96" src="/vj_photo2-removebg.png" alt="Album" /></figure>
        </div>
    )
}

export default HomeCard
