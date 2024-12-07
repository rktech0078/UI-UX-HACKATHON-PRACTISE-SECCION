import Image from 'next/image'
import React from 'react'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";


export default function Flash() {
  return (

    <div className='mt-16'>

      <div className='flex items-center py-7 px-6'>
        <div className='w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]'>
        </div>
        <h1 className='text-[#DB4444] ml-3 font-semibold'>Todays</h1>
      </div>


      <div className='md:flex justify-between grid mb-10'>
        <div className='md:flex grid max-sm:ml-9 '>
          <h1 className='text-[36px] font-semibold lg:ml-5 '>Flash Sales</h1>
          <Image src={"/images/clock.svg"} alt='DIGITAL CLOCK' width={100} height={100} className='w-[300px] h-[50px] md:flex grid md:ml-16' />
        </div>

        <div className='md:flex mr-14 gap-5 hidden items-center'>
          <FaRegArrowAltCircleLeft className=' w-[45px] h-[45px] hover:text-white hover:bg-black hover:rounded-full ' />
          <FaRegArrowAltCircleRight className='w-[45px] h-[45px] hover:text-white hover:bg-black hover:rounded-full ' />
        </div>
      </div>


    </div>  
  )
}
