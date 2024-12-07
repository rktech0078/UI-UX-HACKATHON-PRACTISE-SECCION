import Image from 'next/image'
import React from 'react'


type service = {
    image: number;
    head: string;
    para: string; 
} 
export default function PreService({image, head, para}:service) {
  return (
    <>
        <div className='flex flex-col justify-center items-center mb-12'>
                <Image src={`/images/service/service${image}.svg`} alt='SERVICES' width={100} height={100} className='w-[80px] h-[80px]'/>
                <h1 className='mt-8 text[20px] font-semibold'>{head}</h1>
                <p className='text-[14px]'>{para}</p>
            </div>
    </>
  )
}
