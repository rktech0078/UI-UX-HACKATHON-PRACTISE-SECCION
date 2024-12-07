import Image from 'next/image'
import React from 'react'


type cardOne = {
    "image": number ,
    "head": string,
    "price": string
    "subTotal": string
}



export default function CardOne({image, head, price, subTotal }:cardOne) {
  return (
    <div>
        <div className='flex justify-between items-center border shadow-lg h-[70px] rounded-[5px] mt-12 lg:m-10  lg:p-5 m-4 p-2'>
                
                <div className='md:flex items-center flex-col'>
                    <Image src={`/images/cart/product${image}.svg`} alt='CART ITEMS' width={100} height={100} className='w-[50px] h-[39px]'/>
                    <h1 className='ml-4'>{head}</h1>
                </div>

                <h1>{price}</h1>
                <input type="number" name="quantity" id="number" placeholder='01' className='border w-[72px] h-[44px] rounded-[5px] text-center' />
                <h1>{subTotal}</h1>
            </div>
    </div>
  )
}
