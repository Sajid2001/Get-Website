import React from 'react'
import PageHero from '../Components/PageHero'
import ProjectShowcase from '../Components/ProjectPageComponents/ProjectShowcase'


export default function ProjectPage() {
  return (
    <div>
      <PageHero heading={`Projects`}/>
      <ProjectShowcase/>
    </div>
  )
}
