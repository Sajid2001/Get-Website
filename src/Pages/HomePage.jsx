import React from 'react'
import StudentCard from '../Components/StudentCard'


export default function HomePage() {
    const exampleBadges = ['Artist', 'Writer','Coder', 'Designer',]

  return (
    <div>
        <h1 className='text-5xl font-bold m-3'>HomePage</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <StudentCard badges={exampleBadges}/>
        <StudentCard badges={exampleBadges}/>
        <StudentCard badges={exampleBadges}/>
        <StudentCard badges={exampleBadges}/>
        </div>
    </div>
  )
}
