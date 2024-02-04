import Image from 'next/image'
import React from 'react'
import profile from '@@/images/profile.jpeg'

const Profile = () => {
  return (
    <div className='absolute md:left-[83px] px-4 md:px-0  flex -top-[100px] h-[234px] md:w-[571px]'>
        <Image src={profile} alt="card" className='md:w-[234px] md:h-[234px] w-24   rounded-l-3xl shadow-[-3px_-7px_14px_0px_#0000001C]'/>
        <div className="bg-[url('../../public/images/nav-background.jpeg')] md:w-[337px] px-10 py-5 rounded-r-3xl shadow-[2px_-1px_14px_0px_#00000096]">
            <div className='flex justify-between items-center py-2'>
                <p className='font-[700px] text-[24px] leading-[29.05px]'>DAN MACE</p>
                <p className='font-[400px] text-[14px] text-[#696969]'>/Johny_Films/</p>
            </div>
            <div className='text-[#696969]'>
              <p className='py-2 font-bold'>Bio</p>
              <p>Simply a film fan creating original content for YouTube. Let&apos;s Collaborate.</p>
            </div>
            <div className='bg-[#696969] rounded'>
              <div className='w-1/2 bg-white'>
                Creator
              </div>
            </div>
        </div>
    </div>
  )
}

export default Profile

// box-shadow: 2px -1px 14px 0px #00000096;

// box-shadow: -3px -7px 14px 0px #0000001C;
