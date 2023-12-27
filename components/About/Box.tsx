'use client'
import React from 'react'

const Box = () => {
    return (
        <div className="flex flex-col items-center justify-center m-7 w-44 h-44 rounded-lg  border-1 border-emerald-950 card lg:card-side bg-base-100 shadow-lg shadow-sky-950 bg-gradient-to-b from-white to-gray-300 hover:border-sky-200 hover:shadow-[0_0_4px_#fff,inset_0_0_2px_#fff,0_0_5px_#000,0_0_15px_#000,0_0_30px_#000] ">
            <h2>
                <span className="flex tabular-nums text-slate-900 text-5xl font-extrabold mb-2 animate-[counter_3s_ease-out_forwards] [counter-set:_num_var(--num)] before:content-[counter(num)]">
                    <span className="sr-only">30</span>+
                </span>
                <span className="inline-flex font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-300 mb-2">Variations</span>
            </h2>
        </div >
    )
}

export default Box
