import React from 'react'
import dithering from '../../Assets/Images/heroDithering.png'

export default function HomeHero() {
  return (
    <div className='relative'>
        <img className='w-full min-h-screen' src={dithering}/>
        <div className='flex flex-col items-center text-white absolute top-0 left-0 pt-[200px] px-[50px] md:pt-[270px] md:px-[150px]'>
        <h1 className='text-2xl md:text-4xl font-thin text-left'>
        <span className='font-bold'> St. John’s Gaming and Emerging Technology (GET) </span> is an educational hub for creative coders, artists, designers, and storytellers pushing the boundaries of interactive experiences through project-based collaboration.
        </h1>
        <button className='text-lg md:text-xl transition-all transition-duration-200 ease-in bg-[#D74E4E] hover:bg-[#9e2c2c] font-bold p-3 mt-[70px] md:mt-[100px] w-3/4 md:w-1/3 text-center rounded-lg'>Learn More</button>
        </div>
    </div>

  )
}
