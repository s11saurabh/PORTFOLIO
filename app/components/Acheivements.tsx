import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Certificate from './Certificate';

const Acheivements = () => {
    return (
        <div className='mt-[5rem] h-auto w-[375px] md:w-[720px] m-auto'>
            <div className='stroke-yellow-300 text-[2rem] text-center md:text-[4rem] font-extrabold z-0 opacity-80 text-transparent' style={{ strokeWidth: "1.5px", WebkitTextStrokeWidth: "1.9px", WebkitTextStrokeColor: "yellow" }}>
                {"<"}Achievements {"/>"}
            </div>
            <div className='w-[85%] mt-10 mx-auto border md:p-2 border-opacity-70 rounded-md border-slate-500'>
                <div>
                    <Tabs defaultValue="1" className="max-w-[600px]">
                        <TabsList className='tabs-content bg-transparent text-slate-400'>
                            <TabsTrigger value="1" className='tabs-content text-[12px] md:text-[15px]'>Open Source Contributions</TabsTrigger>
                            <TabsTrigger value="2" className='tabs-content text-[12px] md:text-[15px]'>Certificate</TabsTrigger>
                        </TabsList>
                        <TabsContent value="1">
                            <div className='border-slate-700 border bg-slate-800 bg-opacity-65 w-[80%] m-4 p-2'>
                                <div className='p-3 underline'>
                                    <a href=" ">🧑‍💻 MENTOR : GIRL SCRIPT SUMMER OF CODE (GSSOC’23)| </a>
                                </div>
                                <div className='text-slate-300 px-4 py-2'>
                                    <ul>
                                        <li> As a MENTOR , I had the privilege of guiding contributors through complex open-source projects over a
 three-month period,This role allowed me to collaborate with top-tier India’s developers while fostering the growth of
 emerging talent.</li>
                                    </ul>
                                </div>
                                <div className='text-slate-300 px-4 py-2'>
                                    <img src="/gssoc-1.png" alt="gssoc" />
                                </div>
                                <div className='underline px-4 py-2'>
                                    
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="2">
                            <Certificate />
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}

export default Acheivements;
