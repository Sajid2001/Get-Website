import React from 'react'
import PageHero from '../Components/PageHero'
import StudentShowcase from '../Components/StudentPageComponents/StudentShowcase'

export default function StudentPage() {
  return (
    <div>
      <PageHero heading={`Members`}/>
      <StudentShowcase/>
    </div>
  )
}
