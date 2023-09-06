import React from 'react'

export default function ProjectCard({project}) {
  return (
    <div className='flex flex-col text-left text-black m-4'>
        <img className='mb-4' src={project.image}/>
        <a href={`/projects/${project.name}`} className='text-xl font-bold hover:underline'>{project.name}</a>
        <p className='text-base'>{project.description}</p>
    </div>
  )
}
