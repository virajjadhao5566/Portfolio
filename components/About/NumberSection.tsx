import React from 'react'
import Box from './Box'

const NumberSection = () => {
    return (
        <div className=' font-mono flex flex-col justify-center items-center m-20 pt-20 p-6'>
            <h1 className=' text-3xl'>About</h1>
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
