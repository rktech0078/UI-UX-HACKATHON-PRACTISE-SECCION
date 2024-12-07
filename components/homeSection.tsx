import Image from 'next/image';
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { GrApple } from "react-icons/gr";
import { FaArrowRightLong } from "react-icons/fa6";




export default function HomeSection() {
  return (


    <div className='flex justify-between '>

      <div className='w-[280px] h-[390px]  border-r-2 lg:flex justify-center hidden'>
        <ul className='grid gap-[10px] '>
          <div className='flex items-center '>
            <li className='mt-5'>Woman Fashion</li><IoIosArrowForward className='mt-5 ml-7 hover:text-[20px]' />
          </div>
          <div className='flex items-center'>
            <li className='mt-1'>Men Fashion</li><IoIosArrowForward className='mt-1 ml-[52px] hover:text-[20px]' />
          </div>
          <li>Electronics</li>
          <li>Home & Lifestyle</li>
          <li>Medicine</li>
          <li>Sports & Outdoor</li>
          <li>Baby & Toys</li>
          <li>Groceries & Pets</li>
          <li>Health & Beauty</li>
        </ul>
      </div>

      <div className=' flex items-center justify-between'>
        <div className='w-full lg:mr-[150px] mt-2 h-[290px] max-[425]:h-[100px] bg-black flex justify-between items-center'>


          <div className='text-white ml-14 items-center'>
            <div className=' flex items-center '>
              <GrApple className='mr-4 text-[35px]' />
              <h1>iPhone 14 Series</h1>
            </div>

            <h1 className='text-[45px]'>Up to 10% off Voucher</h1>

            <div className='text-center flex items-center cursor-pointer'>
              <p className='underline underline-offset-2 '>Shop Now</p>
              <FaArrowRightLong className='text-white ml-4 hover:text-[20px]' />
            </div>

          </div>

          <div className=''>
            <Image src={"/images/iphone.svg"} alt='Iphone' width={100} height={100} className='w-[400px] h-[290px]' />
          </div>


        </div>
      </div>


    </div>
  )
}
