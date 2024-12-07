import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <div className='h-[48px] bg-black flex items-center md:justify-around'>

            <div className='md:flex items-center justify-center hidden'>
                <h1 className='text-white text-[14px]'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                    <Link href={"/"}>
                        <span className='font-bold ml-3 underline hover:no-underline'>ShopNow</span>
                    </Link>
                </h1>
            </div>

            <div className='flex justify-end ml-5'> 
                <select name="language" id="dropdown"  className='bg-black text-white items-center'>
                    <option value="english">English</option>
                    <option value="urdu">Urdu</option>
                    <option value="arabic">Arabic</option>
                </select>
            </div>

        </div>
    )
}
