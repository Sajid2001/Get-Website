import { useState } from 'react'
import edrex from '../Assets/Images/Edrex.png'
import {badgeImages} from '../Assets/Imports/BadgeImport'

export default function StudentCard({badges}) {

    const description = `Pursuing a Bachelors of Science
    in Communication Arts
    with Minor in Game Design`

    const [showAll, setShowAll] = useState(false);
    
    const visibleBadges = showAll ? badges : badges.slice(0, 3);

    const handleShowMore = () => {
        setShowAll(!showAll);
      };

  return (
        <div className="font-petch my-1 border border-8 border-black max-w-md dark:bg-navy-800 rounded-[35px] shadow-xl relative mx-auto flex h-full w-full flex-col items-center bg-white bg-cover bg-clip-border dark:text-white dark:shadow-none">
            <div className="rounded-t-3xl relative flex h-48 w-full justify-center bg-cover" style={{ backgroundImage: `url(https://media.discordapp.net/attachments/978748786270695555/1142156926516461709/ditheringinv.png?width=1440&height=550)` }}>
                <div className="absolute -bottom-20 flex h-[180px] w-[180px] items-center justify-center rounded-full border-[6px] border-white bg-teal-700">
                <img className="h-full w-full rounded-full" src={edrex} alt="User Avatar" />
                </div>
            </div>
            <div className='mt-24 p-2 flex flex-col items-center'>
                <div className="text-center">
                    <h4 className="text-2xl font-bold">Edrex Fontanilla</h4>
                    <p className="text-xl font-normal font-light text-teal-700">Grad 2012</p>
                    <p className='mx-5 text-base font-light'>{description}</p>
                </div>
                <div className="my-4 flex gap-12 md:gap-14">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" stroke-width="0" fill="currentColor"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                        <path d="M8 11l0 5"></path>
                        <path d="M8 8l0 .01"></path>
                        <path d="M12 16l0 -5"></path>
                        <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                    </svg>
                </div>
                <button className='rounded-3xl p-1 w-2/3 bg-black text-white hover:bg-gray-600 transition-duration-200 transition-all ease-in'>View Work</button>
                <div className='inline-block my-5 p-3 mx-2'>
                {visibleBadges.map((badge) => (
                    
                    <span key={badge} className='inline-flex bg-slate-100 p-1 rounded-xl m-1 text-base items-center'><span className='m-1'>{badge}</span> <img className='h-8' src={badgeImages[badge]}/></span>
                    
                ))}

                {badges.length > 3 &&
                <button className='w-full text-base mt-5' onClick={handleShowMore}>
                    {showAll ? 'Show Less' : 'Show More'}
                </button>
                    }
                </div>
            </div>
            </div>
  )
}
