import React from 'react'
import { Frame2 } from './cards/frame'
import { CardTwo } from './cards/card'

export default function ThisMonth() {
    return (
        <>
            <Frame2 />

            <div className='w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 p-3'>
                <CardTwo image="1" head="The north coat" newPrice="260" oldPrice="360" starColor="text-[#FFAD33]" reviews="65" /> 
                <CardTwo image="2" head="Gucci duffle bag" newPrice="960" oldPrice="1160" starColor="text-[#b6b4b0]" reviews="65" /> 
                <CardTwo image="3" head="RGB liquid CPU Cooler" newPrice="160" oldPrice="170" starColor="text-[#b6b4b0]" reviews="65" /> 
                <CardTwo image="4" head="Small BookSelf" newPrice="360" oldPrice="999" starColor="text-[#FFAD33]" reviews="65" /> 
            </div>

        </>
    )
}


// image, head, newPrice, oldPrice, starColor, reviews