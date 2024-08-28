import AboutMe from './components/AboutMe';
import Work from './components/Work';
import GitHubCalendarComponent from './lib/GitHubCalendar';
import TypeWriterComponent from './lib/TypeWriterComponent';
import FramerMotionComponent from './lib/FramerMotionComponent';
import Footer from './components/Footer';
import Acheivements from './components/Acheivements';
import Experience from './components/Experience';

const Body = () => {
    return (
        <div className="h-screen w-screen overflow-y-scroll overflow-x-hidden custom-scrollbar " >
            <div className='w-[550px] m-auto '>
                <div className='p-3 px-5 mt-12 w-[500px] font-bold text-xl text-color' >
                    Hi,I'm
                </div>
                <FramerMotionComponent />
                <TypeWriterComponent />
                <div className=' max-w-[720px] text-slate-200 px-5 p-2 desc-color  text-[13px] md:text-[15px] my-4  ' >
                    A Full-Stack Developer from ------------------<br></br> INDIAN INSTITUTE OF INFORMATION TECHNOLOGY (IIIT), BHAGALPUR.
                     I’m a Enthusiastic, goal oriented Software Developer with experience building responsive websites .Looking forward to contribute  for the success of an organization.
                </div>
            </div>
            <div className='w-[550px] m-auto '>
                <GitHubCalendarComponent />
            </div>
            <Experience />
            <AboutMe />
            <Acheivements />
            <Work />
            {/* CONTACT */}
            {/* <div className='mt-[5rem] h-[auto]  w-[750px] border-x border-white' >
                     <div className='stroke-yellow-300 text-[6rem] font-extrabold z-0 opacity-80  text-transparent' style={{ strokeWidth: "1.5px", WebkitTextStrokeWidth: "1.9px", WebkitTextStrokeColor: "yellow" }} > {"<"}Contact me {"/>"}   </div>
               </div> */}
            <Footer />
        </div>
    )
}

export default Body 