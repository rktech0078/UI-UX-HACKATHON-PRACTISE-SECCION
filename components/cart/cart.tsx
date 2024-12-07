import React from 'react'
import CardOne from './card'

export default function Cart() {
  return (
    <>
        <div className='mb-20'>

            <div className='flex justify-between items-center border shadow-lg h-[70px] rounded-[5px] mt-12 lg:m-10 lg:px-12 lg:p-8 m-4 p-2'>
                <h1 className=''>Product</h1>
                <h1>Price</h1>
                <h1>Quantity</h1>
                <h1>Subtotal</h1>
            </div>

            <div className=''>
            <CardOne image={1} head='LCD Monitor' price={"$650"} subTotal={"$650"} />
            <CardOne image={2} head='H1 Gamepad' price={"$550"} subTotal={"$1100"} />
            </div>

            <div className='flex flex-col md:flex-row justify-between p-10 gap-4'>
                <button className='px-[45px] py-[16px] text-black bg-white font-bold rounded-[5px] hover:text-white hover:bg-primary border-black border hover:border-none'>Return To Shop</button>
                <button className='px-[45px] py-[16px] text-black bg-white font-bold rounded-[5px] hover:text-white hover:bg-primary border-black border hover:border-none'>Update Cart</button>
            </div>




            <div className='flex flex-col md:flex-row items-center md:items-start justify-between p-8'>

              <div className='flex flex-col md:flex-row mt-1 justify-center p-8 gap-4 mb-10 items-center'>
                  <input type="text" name="coupon" id="text" placeholder='Coupon Code' className='w-[260px] h-[50px] text-center border border-gray-400 rounded-[4px] outline-black' />
                  <button className='w-[180px] h-[50px] text-white bg-primary hover:bg-white hover:text-black font-bold rounded-[4px] hover:border-black hover:border'>Apply Coupon</button>
              </div>


              <div className='w-full flex flex-col gap-7 border mt-9 p-6  mb-14'>
                  <h1 className='text-[20px] font-semibold'>Cart Total</h1>

                  <div className='flex justify-between border-b-2 '>
                    <h1 className='mb-4'>Subtotal:</h1>
                    <p>$1750</p>
                  </div>
                  
                  <div className='flex justify-between border-b-2 '>
                    <h1 className='mb-4'>Shipping:</h1>
                    <p>Free</p>
                  </div>

                  <div className='flex justify-between '>
                    <h1 className='mb-4'>Total:</h1>
                    <p>$1750</p>
                  </div>

                  <div className='flex justify-center'>
                  <button className='w-[190px] h-[50px] text-white bg-primary hover:bg-white hover:text-black font-bold rounded-[4px] hover:border-black hover:border'>Procees to checkout</button>
                  </div>

              </div>
              
              
            </div>



            
        </div>
    </>
  )
}
