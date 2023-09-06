import {useState, useEffect} from 'react'
import StudentCard from '../StudentCard'
import {client} from '../../client'
import diceroll from '../../Assets/Images/diceroll.png'


export default function HomeStudents() {
    const [students, setStudents] = useState([]);
    const [refresh, setRefresh] = useState(0);

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

    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    const getRandomStudents = async () => {
      try {

          const { items } = await client.getEntries({
            content_type: 'student',
            select: 'sys.id', 
          });
        
          // Shuffle the IDs randomly
          const shuffledIds = shuffleArray(items.map(item => item.sys.id));
        
          // Take the first three IDs (or as many as you want)
          const randomIds = shuffledIds.slice(0, 3);
        
          // Fetch the entries by their IDs
          const randomEntries = await Promise.all(randomIds.map(async id => {
            const entry = await client.getEntry(id);
            return entry;
          }));

         const responseData = randomEntries;
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

    const updateRefresh = () => {
      setRefresh(refresh + 1)
    }
  
    useEffect(() => {
      getRandomStudents();
    }, [refresh]);

  return (
    <div className='flex flex-col mb-[100px]'>
        <div className='text-left mx-5 px-4 flex flex-col gap-3 mb-[10px] md:mb-[50px]'>
            <h1 className='text-2xl font-bold md:text-5xl'>Connect With Students</h1>
            <p className='text-xl md:text-2xl font-light'>Learn more about the GET community and see their skills.</p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 m-8 gap-8 md:gap-4'>
        {students && students.map(student => (
          <div key={student.name}>
          <StudentCard student={student}/>
          </div>
        ))}
        </div>
        <div className='flex flex-col gap-6 md:gap-8 mt-[50px] items-center'>
            <button onClick={updateRefresh} className='bg-[#DEF0F2] ease-in transition-all transition-duration-100 hover:opacity-70 p-2 w-2/3 md:w-1/4 rounded-sm text-[#54989F]'> <span className='flex flex-row items-center justify-center'> <img src={diceroll} alt="diceroll" /> Randomize </span> </button>
            <a href='/students' className='text-center bg-[#54989F] ease-in transition-all transition-duration-100 hover:bg-[#2b6a70] p-2 w-2/3 md:w-1/4 rounded-sm text-white'> View More </a>
        </div>
    </div>
  )
}

