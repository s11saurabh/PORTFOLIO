import Link from 'next/link'
import React from 'react'

const SocialLinks = () => {
    return (
        <div className=' flex-col fixed left-5 hidden md:flex h-screen justify-center m-5 gap-6  mt-28' >
            <div><Link target='blank' href={'https://x.com/its1singhania'}><img src="/twitterWhite.png" className='cursor-pointer' width={37} alt="" /></Link></div>
            <div><Link target='blank' href={'https://github.com/S11saurabh'}><img src="/githubwhite.png" className='cursor-pointer' width={37} alt="" /></Link></div>
            <div><Link target='blank' href={'https://www.linkedin.com/in/S11saurabh'}> <img src="/linkedinwhite.png" className='cursor-pointer' width={37} alt="" /></Link></div>
            <div className='h-[100px] border border-white w-[1px] ml-5 ' ></div>
        </div>
    )
}

export default SocialLinks