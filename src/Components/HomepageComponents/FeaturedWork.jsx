import React, { useEffect, useState } from 'react'
import { client } from '../../client';
import ProjectCard from '../ProjectCard'


export default function FeaturedWork() {
    const [featuredProjects, setFeaturedProjects] = useState([]);

    const cleanupProjects = (rawData) => {
        const cleanData = rawData.map((project) => {
          const { sys, fields } = project;
          const { id } = sys;
          const name = fields.name;
          const image = fields.image.fields.file.url;
          const description = fields.description;
          const itchUrl = fields.itchUrl;
          const students = fields.students;
          const updatedProject = {
            id,
            name,
            description,
            image,
            itchUrl,
            students
          };
          return updatedProject;
        });
        console.log(cleanData);
        setFeaturedProjects(cleanData);
      };

    const getProjects = async() => {
        try { 
            const response = await client.getEntries(
            { 
                content_type: 'getProject',
                limit:3 
            });
            const responseData = response.items;
            console.log(responseData);
            if (responseData) {
              cleanupProjects(responseData);
            } else {
                setFeaturedProjects([]);
            }
          } catch (error) {
            console.log(error);
          }
    }

    useEffect(() => {
        getProjects();
    },[])
  return (
    <div className='mt-[35px] md:mt-[80px] flex flex-col'>
        <h1 className='text-2xl font-bold md:text-5xl mx-5 mb-4 px-4 text-left'>Featured Work</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mx-4'>
            {featuredProjects && featuredProjects.map(project => (
                <div key={project.id}>
                    <ProjectCard project={project}/>
                </div>
            ))}
        </div>
        <div className='flex flex-col items-center'>
        <a href='/projects' className='text-center bg-[#54989F] ease-in transition-all transition-duration-100 hover:bg-[#2b6a70] p-2 rounded-sm text-white font-bold w-2/3 md:w-1/4 my-[50px] md:my-[70px]'>View All Projects</a>
        </div>
    </div>
  )
}
