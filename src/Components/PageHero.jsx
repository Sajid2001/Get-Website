import React from 'react'
import dithering from '../Assets/Images/heroDithering.png'

export default function PageHero({heading}) {
  return (
    <div className='relative min-h-screen  w-full bg-cover bg-slate-700 bg-blend-overlay bg-[#1B2837]' style={{backgroundImage: `url(${dithering})`}}>
        <div className='flex flex-col items-center justify-center text-white absolute top-1/2 px-[60px] md:px-[100px]'>
            <h1 className='font-bold text-3xl md:text-5xl text-left'>
                {heading}
            </h1>
        </div>
    </div>
  )
}
