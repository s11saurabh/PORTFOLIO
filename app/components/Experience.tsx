import React, { Fragment } from 'react'

const Experience = () => {
    return (
        <div className='mt-[5rem] h-auto w-[375px] m-auto md:w-[720px]'>
            <Fragment>
                <div className='stroke-yellow-300 text-center select-none text-[3rem] md:text-[4rem] font-extrabold z-0 opacity-80 text-transparent' style={{ strokeWidth: "1.5px", WebkitTextStrokeWidth: "1.9px", WebkitTextStrokeColor: "yellow" }}>
                    {"<"}Experience {"/>"}
                </div>
                <div className='w-[85%] mt-10 mx-auto border md:p-2 border-opacity-70 rounded-md border-slate-500'>
                    <div className='flex items-center justify-between'>
                        <li className='font-bold text-lg m-3'>  CODING NINJA-  S_Developer Intern  </li>
                        <div className='px-2 text-slate-400'>  aug 22-feb 23</div>
                    </div>

                    <div className='flex items-center justify-between'>
                        <li className='font-bold text-lg m-3'>  GSSOC- Softwer Developer Intern  </li>
                        <div className='px-2 text-slate-400'>  may 23- aug 23</div>
                    </div>
                   
                </div>
            </Fragment>
        </div>
    )
}

export default Experience