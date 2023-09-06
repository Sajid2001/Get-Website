import React from 'react'
import getpicOne from '../../Assets/Images/sjusamplepic 1.png'
import getPicTwo from '../../Assets/Images/idk 1.png'

export default function HomeCarousel() {
  return (
    <div className='mt-[100px] flex flex-col m-5'>
        <div className='text-left mx-5 px-4 flex flex-col gap-3 mb-6 md:mb-[50px]'>
            <h1 className='text-2xl font-bold md:text-5xl'>GET in touch!</h1>
            <p className='text-xl md:text-2xl font-light'>Find out about upcoming events, and how to participate in GET.</p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 m-5 gap-7 md:gap-3 justify-items-center'>
            <img src={getpicOne} alt='one'/>
            <img src={getPicTwo} alt='two'/>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-center mx-6 md:mx-0 gap-3 md:gap-[125px] mt-6 md:mt-[70px] mb-[160px]'>
            <a target='_blank' href='https://discord.gg/75ahzvDr' className='text-center ease-in transition-all transition-duration-100 text-[#54989F] bg-white border-4 border-[#54989F] hover:text-white hover:bg-[#54989F] w-full md:w-1/4 p-2 rounded-md'>Join The Discord</a>
            <a target='_blank' href='https://www.instagram.com/sjugetclub/' className='text-center ease-in transition-all transition-duration-100 text-[#54989F] bg-white border-4 border-[#54989F] hover:text-white hover:bg-[#54989F] w-full md:w-1/4 p-2 rounded-md'>Follow Our Instagram</a>
            <button className='ease-in transition-all transition-duration-100 text-[#54989F] bg-white border-4 border-[#54989F] hover:text-white hover:bg-[#54989F] w-full md:w-1/4 p-2 rounded-md'>Email Us</button>
        </div>
    </div>
  )
}
