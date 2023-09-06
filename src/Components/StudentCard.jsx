import { useState } from 'react'
import {badgeImages} from '../Assets/Imports/BadgeImport'

export default function StudentCard({student}) {

    const [showAll, setShowAll] = useState(false);
    
    const visibleBadges = showAll ? student.badges : student.badges.slice(0, 3);

    const handleShowMore = () => {
        setShowAll(!showAll);
      };

  return (
        <div className="font-petch my-1 border border-8 border-black max-w-md dark:bg-navy-800 rounded-[35px] shadow-xl relative mx-auto flex h-full w-full flex-col items-center bg-white bg-cover bg-clip-border dark:text-white dark:shadow-none">
            <div className="rounded-t-3xl relative flex h-48 w-full justify-center bg-cover" style={{ backgroundImage: `url(https://media.discordapp.net/attachments/978748786270695555/1142156926516461709/ditheringinv.png?width=1440&height=550)` }}>
                <div className="absolute -bottom-20 flex h-[180px] w-[180px] items-center justify-center rounded-full border-[6px] border-white bg-teal-700">
                <img className="h-full w-full rounded-full" src={student.image} alt="User Avatar" />
                </div>
            </div>
            <div className='mt-24 p-2 flex flex-col items-center'>
                <div className="text-center">
                    <h4 className="text-2xl font-bold">{student.name}</h4>
                    <p className="text-xl font-normal font-light text-teal-700">Grad {student.gradYear} {student.graduated && <span className='m-1'>🎓</span>}</p>
                    <p className='mx-5 text-base font-light'>{student.description}</p>
                </div>
                <div className="my-4 flex gap-12">
                    {student.github && 
                    <a className='hover:opacity-70' target='_blank' href={student.github}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github-filled" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" strokeWidth="0" fill="currentColor"></path>
                        </svg>
                    </a>
                    }
                    {student.linkedin && 
                    <a className='hover:opacity-70' target='_blank' href={student.linkedin}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                            <path d="M8 11l0 5"></path>
                            <path d="M8 8l0 .01"></path>
                            <path d="M12 16l0 -5"></path>
                            <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                        </svg>
                    </a>}
                    {student.instagram &&
                    <a className='hover:opacity-70' target='_blank' href={student.instagram}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                            <path d="M16.5 7.5l0 .01"></path>
                        </svg>
                    </a>
                    }
                    {student.behance && 
                    <a className='hover:opacity-70' target='_blank' href={student.behance}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-behance" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M3 18v-12h4.5a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-4.5"></path>
                            <path d="M3 12l4.5 0"></path>
                            <path d="M14 13h7a3.5 3.5 0 0 0 -7 0v2a3.5 3.5 0 0 0 6.64 1"></path>
                            <path d="M16 6l3 0"></path>
                        </svg>
                    </a>
                    }
                    {student.itchIo &&
                    <a className='hover:opacity-70' target='_blank' href={student.itchIo}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512"><path d="M71.92 34.77C50.2 47.67 7.4 96.84 7 109.73v21.34c0 27.06 25.29 50.84 48.25 50.84 27.57 0 50.54-22.85 50.54-50 0 27.12 22.18 50 49.76 50s49-22.85 49-50c0 27.12 23.59 50 51.16 50h.5c27.57 0 51.16-22.85 51.16-50 0 27.12 21.47 50 49 50s49.76-22.85 49.76-50c0 27.12 23 50 50.54 50 23 0 48.25-23.78 48.25-50.84v-21.34c-.4-12.9-43.2-62.07-64.92-75C372.56 32.4 325.76 32 256 32S91.14 33.1 71.92 34.77zm132.32 134.39c-22 38.4-77.9 38.71-99.85.25-13.17 23.14-43.17 32.07-56 27.66-3.87 40.15-13.67 237.13 17.73 269.15 80 18.67 302.08 18.12 379.76 0 31.65-32.27 21.32-232 17.75-269.15-12.92 4.44-42.88-4.6-56-27.66-22 38.52-77.85 38.1-99.85-.24-7.1 12.49-23.05 28.94-51.76 28.94a57.54 57.54 0 0 1-51.75-28.94zm-41.58 53.77c16.47 0 31.09 0 49.22 19.78a436.91 436.91 0 0 1 88.18 0C318.22 223 332.85 223 349.31 223c52.33 0 65.22 77.53 83.87 144.45 17.26 62.15-5.52 63.67-33.95 63.73-42.15-1.57-65.49-32.18-65.49-62.79-39.25 6.43-101.93 8.79-155.55 0 0 30.61-23.34 61.22-65.49 62.79-28.42-.06-51.2-1.58-33.94-63.73 18.67-67 31.56-144.45 83.88-144.45zM256 270.79s-44.38 40.77-52.35 55.21l29-1.17v25.32c0 1.55 21.34.16 23.33.16 11.65.54 23.31 1 23.31-.16v-25.28l29 1.17c-8-14.48-52.35-55.24-52.35-55.24z"/></svg>
                    </a>
                    }
                    
                </div>
                <button className='rounded-3xl p-1 w-2/3 bg-black text-white min-w-[280px] hover:bg-gray-600 transition-duration-200 transition-all ease-in'>View Work</button>
                <div className='inline-block my-5 p-3 mx-2'>
                {visibleBadges.map((badge) => (
                    <span key={badge} className='inline-flex bg-slate-100 p-1 rounded-xl m-1 text-base items-center'><span className='m-1'>{badge}</span> <img className='h-8' src={badgeImages[badge]}/></span>  
                ))}

                {student.badges.length > 3 &&
                <button className='w-full text-base mt-5' onClick={handleShowMore}>
                    {showAll ? 'Show Less' : 'Show More'}
                </button>
                    }
                </div>
            </div>
            </div>
  )
}
