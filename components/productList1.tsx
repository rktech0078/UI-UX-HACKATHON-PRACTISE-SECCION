import React from 'react'
import CardOne from './cards/card'

export default function ProductList1() {
  return (
    <>
  
    <div className='w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
        <CardOne percentage="40" product="1" heading="HAVIT HV-G92 Gamepad" newPrice="120" oldPrice="160" starColor="text-[#FFAD33]" reviews="88" />
        <CardOne percentage="35" product="2" heading="AK-900 Wired Keyboard" newPrice="960" oldPrice="1160" starColor="text-[#b6b4b0]" reviews="75" />
        <CardOne percentage="30" product="3" heading="IPS LCD Gaming Monitor" newPrice="370" oldPrice="400" starColor="text-[#FFAD33]" reviews="99" />
        <CardOne percentage="25" product="4" heading="S-Series Comfort Chair " newPrice="299" oldPrice="400" starColor="text-[#FFAD33]" reviews="230" />
        <CardOne percentage="35" product="2" heading="Focur RGB Keyboard" newPrice="566" oldPrice="375" starColor="text-[#b6b4b0]" reviews="55" />
        <CardOne percentage="75" product="4" heading="Comfortable Chair Pair" newPrice="799" oldPrice="1000" starColor="text-[#b6b4b0]" reviews="79" />
    </div>


      <div className='flex justify-center mt-12 mb-16'>
        <button className='px-[48px] py-[16px] text-white bg-primary font-bold rounded-[5px] hover:text-black hover:bg-white border-black'>View All Products</button>
      </div>

    </>
  )
}

// percentage, product, heading, newPrice, oldPrice, starColor, reviews