import React from 'react'
import styles from "@/styles/Profile.module.css"
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='md:h-[50vh] gap-10 md:gap-0 my-10 md:my-0 flex md:w-4/5 md:mx-auto items-center flex-wrap justify-between'>
        <div className='md:w-1/2'>
            <p className='font-[700] text-[40px] leading-[48.41px] text-[#262626]'>aBit</p>
            <p className={`${styles.recklessNeue} font-[400] text-[20px] leading-[23.99px]`}>Changing the way in which creators and fans interact.</p>
        </div>
        <div className=' border-[1px] border-transparent w-full md:w-auto border-l-[#9F9D9D] px-4 py-1'>
            <div className=' my-4'>
                <Link href={"#"} className='w-full block font-[700] leading-[16.94px] text-[#262626FC]'>Home</Link>
            </div>
            <div className=' my-4'>
                <Link href={"#"} className='w-full block font-[700] leading-[16.94px] text-[#262626FC]'>Are you a Creator?</Link>
            </div>
            <div className=' my-4'>
                <Link href={"#"} className='w-full block font-[700] leading-[16.94px] text-[#262626FC]'>Support</Link>
            </div>
        </div>
    </div>  
  )
}

export default Footer

// background: #262626FC;
