import React from 'react'
import HomeHero from '../Components/HomepageComponents/HomeHero'
import FeaturedWork from '../Components/HomepageComponents/FeaturedWork'
import HomeStudents from '../Components/HomepageComponents/HomeStudents'
import HomeCarousel from '../Components/HomepageComponents/HomeCarousel'


export default function HomePage() {

  return (
    <div className='min-screen-h'>
        <HomeHero/>
        <FeaturedWork/>
        <HomeStudents/>
        <HomeCarousel/>
    </div>
  )
}
