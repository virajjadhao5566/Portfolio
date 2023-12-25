import React from 'react'
import Box from './Box'

const NumberSection = () => {
    return (
        <div className=' font-mono flex flex-col justify-center items-center m-20 mt-40'>
            <h1 id='about' className=' text-3xl'>About</h1>
            <div className="flex flex-row justify-center">
                <Box/>
                <Box/>
            </div>
            <div className="flex flex-row justify-center">
                <Box/>
                <Box/>
            </div>
        </div>
    )
}

export default NumberSection
