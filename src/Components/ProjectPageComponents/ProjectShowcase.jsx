import {useState, useEffect} from 'react'
import { client } from '../../client';
import ProjectCard from '../ProjectCard';

export default function ProjectShowcase() {
    const [projects, setProjects] = useState([]);

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
        setProjects(cleanData);
      };

    const getProjects = async() => {
        try { 
            const response = await client.getEntries(
            { 
                content_type: 'getProject',
            });
            const responseData = response.items;
            console.log(responseData);
            if (responseData) {
              cleanupProjects(responseData);
            } else {
                setProjects([]);
            }
          } catch (error) {
            console.log(error);
          }
    }

    useEffect(() => {
        getProjects();
    },[])

  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mx-4 my-[80px]'>
            {projects && projects.map(project => (
                <div key={project.id}>
                    <ProjectCard project={project}/>
                </div>
            ))}
        </div>
    </div>
  )
}
