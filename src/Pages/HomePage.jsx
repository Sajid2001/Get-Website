import React from 'react'
import StudentCard from '../Components/StudentCard'


export default function HomePage() {
    const exampleBadges = ['Artist','Director', 'Designer','Writer','Actor','Developer', 'Composer']
    const exampleBadgesTwo = ['Artist', 'Writer','Developer',]

  return (
    <div>
        <h1 className='text-5xl m-3 font-petch'>HomePage</h1>
        <div className='grid grid-cols-1 lg:grid-cols-3 m-5 gap-4'>
        <StudentCard badges={exampleBadges}/>
        <StudentCard badges={exampleBadges}/>
        <StudentCard badges={exampleBadgesTwo}/>
        <StudentCard badges={exampleBadges}/>
        </div>
    </div>
  )
}
