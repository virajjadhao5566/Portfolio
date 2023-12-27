import React from 'react'

const ExperienceCarousal = () => {
    return (
        <div className='font-mono flex flex-col justify-center items-center'>
            <h1 id='experience' className='mt-5 mb-5 text-3xl'>Experience</h1>
            <div className="carousel w-1/2 h-72 border-2 border-gray-200 ">
                <div id="item1" className="flex flex-col items-center carousel-item w-full">
                    <h1 className=' text-xl'>Qualys(On-going)</h1>
                    <p></p>
                </div>
                <div id="item2" className="flex flex-col items-center carousel-item w-full">
                    <h1 className=' text-xl'>Open Source Cohort</h1>
                </div>
                <div id="item3" className="flex flex-col items-center carousel-item w-full">
                    <h1 className=' text-xl'>PHN Technology</h1>
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-1/2 py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    )
}

export default ExperienceCarousal
