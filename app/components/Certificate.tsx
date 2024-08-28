import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from '@/components/ui/dialog'
import React from 'react'

const Certificate = () => {
    return (
        <div className='flex flex-wrap justify-center m-auto' >
            <Dialog>
                <DialogTrigger>
                    <div className='flex justify-center flex-col gap-5 m-auto'>
                        <div className='text-center'>
                        Secured AIR-125 in all india Ncat exam organised by naukri.com
                        </div>
                        <div className='m-auto pb-4'>
                            <img src="/Certificate-1-1.png" className='h-[500px] w-[400px] cursor-zoom-in' alt="" />
                        </div>
                    </div>
                </DialogTrigger>
                <DialogContent className=' bg-transparent border-none m-auto flex justify-center'>
                    <DialogHeader>
                        <DialogDescription>
                            <div className='flex justify-center items-center w-full p-2 md:h-[700px] md:w-[700px] m-auto' >
                                <DialogClose>
                                    <img src="/cert.png" className='cursor-zoom-out' alt="" />
                                </DialogClose>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Certificate