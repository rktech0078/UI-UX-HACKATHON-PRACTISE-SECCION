import React from 'react'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

export default function Frame() {
    return (
        <>
            <div className='mt-16'>

                <div className='flex items-center py-7 px-6'>
                    <div className='w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]'>
                    </div>
                    <h1 className='text-[#DB4444] ml-3 font-semibold'>Categories</h1>
                </div>


                <div className='md:flex justify-between grid mb-10'>
                    <div className='md:flex grid max-sm:ml-9 '>
                        <h1 className='text-[36px] font-semibold lg:ml-5 '>Browse By Category</h1>
                    </div>

                    <div className='md:flex mr-14 gap-5 hidden items-center'>
                        <FaRegArrowAltCircleLeft className=' w-[45px] h-[45px] hover:text-white hover:bg-black hover:rounded-full ' />
                        <FaRegArrowAltCircleRight className='w-[45px] h-[45px] hover:text-white hover:bg-black hover:rounded-full ' />
                    </div>
                </div>
            </div>
        </>
    )
}


export  function Frame3() {
    return (
        <>
            <div className='mt-16'>

                <div className='flex items-center py-7 px-6'>
                    <div className='w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]'>
                    </div>
                    <h1 className='text-[#DB4444] ml-3 font-semibold'>Our Products</h1>
                </div>


                <div className='md:flex justify-between grid mb-10'>
                    <div className='md:flex grid max-sm:ml-9 '>
                        <h1 className='text-[36px] font-semibold lg:ml-5 '>Explore Our Products</h1>
                    </div>

                    <div className='md:flex mr-14 gap-5 hidden items-center'>
                        <FaRegArrowAltCircleLeft className=' w-[45px] h-[45px] hover:text-white hover:bg-black hover:rounded-full ' />
                        <FaRegArrowAltCircleRight className='w-[45px] h-[45px] hover:text-white hover:bg-black hover:rounded-full ' />
                    </div>
                </div>
            </div>
        </>
    )
}


export function Frame2() {
    return (
        <>
            <div className='flex items-center py-7 px-6'>
                <div className='w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]'>
                </div>
                <h1 className='text-[#DB4444] ml-3 font-semibold'>This Month</h1>
            </div>


            <div className='md:flex items-center justify-between grid mb-5 lg:-mt-10'>
                <div className='md:flex grid max-sm:ml-9 '>
                    <h1 className='text-[36px] font-semibold lg:ml-5 '>Best Selling Products</h1>
                </div>
                <div className='flex justify-center mt-12 mb-16'>
                    <button className='px-[48px] py-[16px] text-white bg-primary font-bold rounded-[5px] hover:text-black hover:bg-white border-black'>View All</button>
                </div>
            </div>
        </>
    )
}

export function Frame4() {
    return (
        <>
            <div className='flex items-center py-7 px-6'>
                <div className='w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]'>
                </div>
                <h1 className='text-[#DB4444] ml-3 font-semibold'>Featured</h1>
            </div>


            <div className='md:flex items-center justify-between grid mb-12 lg:-mt-10'>
                <div className='md:flex grid max-sm:ml-9 '>
                    <h1 className='text-[36px] font-semibold lg:ml-5 mt-9'>New Arrival</h1>
                </div>
                
            </div>
        </>
    )
}
