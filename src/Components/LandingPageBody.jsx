import React from 'react'
import profilePic from '../assets/profilePic.jpg'

function LandingPageBody() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 pt-10 items-center'>
        <div className='mb-10'>
            <p className='text-white text-[13px]'>HELLO THERE, WELCOME TO MY SITE</p>
            <p className='text-white text-[40px] font-bold'>I'm Bijin Raveendran</p>
            <p className='text-red-500 text-[40px] font-bold'> I'm a Software Developer</p>
            <p className='text-white text-[40px] font-bold'>& UI/UX Designer</p>
            <div className='mt-4 flex gap-4'>
                <button className='text-white text-[12px] px-3 pb-2 py-2
             bg-red-500 rounded-full border-[2px] hover:border-white'>SEE PORTFOLIO</button>
                <button className='text-white text-[12px] px-3 pb-2 py-2
             bg-red-500 rounded-full border-[2px] hover:border-white'>CONTACT ME</button>
            </div>
        </div>
        <div className='flex justify-center '>
        <div className='h-[320px] w-[250px] p-2 rounded-[20px] bg-gradient-to-b from-[#FF004D]  to-[#2A26B8]'>
            <img src={profilePic}
            className='h-full w-[250px] object-cover rounded-[15px]'
            />
        </div>
        </div>
    </div>
  )
}

export default LandingPageBody