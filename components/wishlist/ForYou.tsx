import React from 'react'
import { CardTwo } from '../cards/card'


export default function ForYou() {
    return (
        <>
            <div className='mb-12'>

                <div className='flex flex-col md:flex-row p-6 justify-center md:justify-between items-center gap-6 mb-5'>
                    <div className='flex items-center'>
                        <div className='bg-primary w-[20px] h-[40px] rounded-[5px]'></div>
                        <h1 className='font-bold text-[20px] ml-4'>Just For You</h1>
                    </div>
                    <button className='border w-[170px] h-[55px] rounded-[5px] hover:bg-primary hover:text-white font-semibold'>See All</button>
                </div>


                <div className='w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 p-3'>
                <CardTwo image="3copy" head="Gucci duffle bag" newPrice="960" oldPrice="360" starColor="text-[#FFAD33]" reviews="65" />
                <CardTwo image="3copy1" head="RGB liquid CPU Cooler" newPrice="1960" oldPrice="360" starColor="text-[#FFAD33]" reviews="65" />
                <CardTwo image="1copy" head="GP11 Shooter USB Gamepad" newPrice="550" oldPrice="360" starColor="text-[#FFAD33]" reviews="65" />
                <CardTwo image="2copy" head="Quilted Satin Jacket" newPrice="750" oldPrice="360" starColor="text-[#FFAD33]" reviews="65" />
            </div>


            </div>
        </>
    )
}
