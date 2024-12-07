import React from 'react'
import { CardTwo } from '../cards/card'


export default function Product() {
  return (
    <>
        <div className='mb-5'>

            <div className='flex flex-col md:flex-row p-6 justify-center md:justify-between items-center'>
                <h1 className='font-bold mt-10 mb-4'>Wishlist (4)</h1>
                <button className='border w-[170px] h-[55px] rounded-[5px] hover:bg-primary hover:text-white font-semibold'>Move All To Bag</button>
            </div>

            <div className='w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 p-3'>
                <CardTwo image="2" head="Gucci duffle bag" newPrice="960" oldPrice="360" starColor="text-[#FFAD33]" reviews="65" />
                <CardTwo image="3" head="RGB liquid CPU Cooler" newPrice="1960" oldPrice="360" starColor="text-[#FFAD33]" reviews="65" />
                <CardTwo image="7" head="GP11 Shooter USB Gamepad" newPrice="550" oldPrice="360" starColor="text-[#FFAD33]" reviews="65" />
                <CardTwo image="8" head="Quilted Satin Jacket" newPrice="750" oldPrice="360" starColor="text-[#FFAD33]" reviews="65" />
            </div>

        </div>
    </>
  )
}
