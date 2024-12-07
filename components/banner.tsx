import Image from 'next/image'
import React from 'react'

export default function Banner() {
    return (
        <>
            <div className=' bg-black w-full h-auto flex flex-col md:flex-row justify-between items-center p-12 rounded-[5px] mb-10' >

                <div className='text-white flex flex-col justify-center'>
                    <p className='text-[#00FF66] font-bold'>Categories</p>
                    <h1 className='text-[48px] font-semibold mt-3'>Enhance Your <br className='md:block hidden' /> Music Experience</h1>

                    <div className='text-black flex gap-3 justify-center mt-6 md:justify-start '>
                        <div className='bg-[#FFFFFF] rounded-full w-[62px] h-[62px] grid text-center pt-[2px]'><h1 className='font-bold'>23 <span className='font-light'>Hours</span></h1></div>
                        <div className='bg-[#FFFFFF] rounded-full w-[62px] h-[62px] grid grid-cols-2 items-center text-center pl-3'><h1 className='font-bold'>05 <span className='font-light'>Days</span></h1></div>
                        <div className='bg-[#FFFFFF] rounded-full w-[62px] h-[62px] flex flex-col text-center pt-[3px]'><h1 className='font-bold'>59 <span className='font-light'>Minute</span></h1></div>
                        <div className='bg-[#FFFFFF] rounded-full w-[62px] h-[62px] flex flex-col text-center pt-[3px]'><h1 className='font-bold'>35 <span className='font-light'>Second</span></h1></div>
                    </div>

                    
                        <button className='mt-10 px-[10px] py-[10px] w-[140px] h-[50px] bg-[#00FF66] text-white font-bold hover:bg-green-300 hover:text-black rounded-[5px]'>Buy Now!</button>
                    

                </div>

                <div className=''>
                    <Image src={"/images/banner/jbl.svg"} alt='JBL SPEAKER' width={100} height={100} className='w-[560px] h-[330px]' />
                </div>

            </div>
        </>
    )
}
