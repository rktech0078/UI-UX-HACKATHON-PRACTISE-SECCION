import React from 'react'
import { Frame3 } from './cards/frame'
import  { CardThree, CardTwo2 } from './cards/card'
import Button from './cards/button'

export default function OurProduct() {
    return (
        <>
            <Frame3 />
            <div className='p-3 grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
                <CardTwo2  image="1"  head="Breed Dry Dog Food" newPrice="100" starColor1="text-[#b6b4b0]" starColor2="text-[#b6b4b0]" reviews="35"  />
                <CardTwo2  image="2"  head="CANON EOS DSLR Camera" newPrice="360" starColor1="text-[#FFAD33]" starColor2="text-[#b6b4b0]" reviews="35"  />
                <CardTwo2  image="3"  head="ASUS FHD Gaming Laptop" newPrice="700" starColor1="text-[#FFAD33]" starColor2="text-[#FFAD33]" reviews="35"  />
                <CardTwo2  image="4"  head="Curology Product Set " newPrice="500" starColor1="text-[#FFAD33]" starColor2="text-[#b6b4b0]"  reviews="35"  />

                <CardThree image="5" heading="Kids Electric Car" newPrice="960" reviews="65" starColor="text-[#FFAD33]" bgColor1="bg-[#FB1314]" bgColor2="bg-[#DB4444]"/>
                <CardThree image="6" heading="Jr. Zoom Soccer Cleats" newPrice="1160" reviews="35" starColor="text-[#FFAD33]" bgColor1="bg-[#EEFF61]" bgColor2="bg-[#DB4444]"/>
                <CardThree image="7" heading="GP11 Shooter USB Gamepad" newPrice="660" reviews="55" starColor="text-[#b6b4b0]" bgColor1="bg-[#000000]" bgColor2="bg-[#DB4444]"/>
                <CardThree image="8" heading="Quilted Satin Jacket" newPrice="660" reviews="55" starColor="text-[#b6b4b0]" bgColor1="bg-[#184A48]" bgColor2="bg-[#DB4444]"/>
            </div>

            <Button buttonHead="View All Products"/>

        </>
    )
}
