import React from 'react'



type Button = {
    buttonHead: string;
}

export default function Button({buttonHead,}:Button) {
  return (
    <>
        <div className='flex justify-center mt-12 mb-16'>
        <button className='px-[48px] py-[16px] text-white bg-primary font-bold rounded-[5px] hover:text-black hover:bg-white border-black'>{buttonHead}</button>
      </div>
    </>
  )
}
