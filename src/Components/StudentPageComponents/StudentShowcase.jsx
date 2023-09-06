import {useState, useEffect} from 'react'
import { client } from '../../client';
import StudentCard from '../StudentCard';

export default function StudentShowcase() {
    const [students, setStudents] = useState([]);
    const cleanupStudents = (rawData) => {
        const cleanData = rawData.map((student) => {
          const { sys, fields } = student;
          const { id } = sys;
          const name = fields.name;
          const image = fields.image.fields.file.url;
          const description = fields.description;
          const gradYear = fields.gradYear;
          const graduated = fields.graduated;
          const badges = fields.badges;
          const linkedin = fields.linkedin || null;
          const github = fields.github || null;
          const itchIo = fields.itchIo || null
          const instagram = fields.instagram || null; // Corrected the field name
          const behance = fields.behance || null; // Corrected the field name
          const updatedStudent = {
            id,
            name,
            description,
            image,
            gradYear,
            graduated,
            badges,
            linkedin,
            github,
            instagram,
            behance,
            itchIo
          };
          return updatedStudent;
        });
        console.log(cleanData);
        setStudents(cleanData);
      };

      const getStudents = async () => {
        try { 

          const response = await client.getEntries(
            { content_type: 'student' });
  
            
          const responseData = response.items;
          console.log(responseData);
          if (responseData) {
            cleanupStudents(responseData);
          } else {
            setStudents([]);
          }
        } catch (error) {
          console.log(error);
        }
      };

      useEffect(() => {
        getStudents();
      }, []);
  
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 justify-items-center gap-12 mx-8 my-[100px]'>
        {students && students.map(student => (
            <StudentCard student={student}/>
        ))}
    </div>
  )
}
