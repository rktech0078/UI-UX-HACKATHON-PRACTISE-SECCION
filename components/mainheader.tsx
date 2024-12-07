import Link from 'next/link'
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";





export default function Mainheader() {
    return (

        <div className='border border-b-[1px] h-[80px] flex justify-between items-center lg:px-20 px-5 '>

            <div className='text-[24px] font-bold'>
                <Link href={"/#"}>
                    Exclusive
                </Link>
            </div>

            <div className='hidden lg:flex'>
                <nav className='flex gap-11 '>
                    <Link href={"/"} className='text-[16px] hover:underline underline-offset-4'>Home</Link>
                    <Link href={"/"} className='text-[16px] hover:underline underline-offset-4'>Contact</Link>
                    <Link href={"/"} className='text-[16px] hover:underline underline-offset-4'>About</Link>
                    <Link href={"/"} className='text-[16px] hover:underline underline-offset-4'>Sign Up</Link>
                </nav>
            </div>


            <div className='flex gap-5 '>

                <div className='lg:flex hidden border rounded bg-gray-200 p-1'>
                    <input type="text"
                        placeholder='What are you looking for?'
                        className='outline-none bg-gray-200 placeholder:text-center '
                    />
                    <CiSearch className='text-[23px] ml-1 text-center cursor-pointer' />
                </div>


                <div className='flex items-center gap-5'>
                    <Link href={"/wishlist"}>
                        <CiHeart className='w-10 text-[25px] rounded-full hover:bg-red-500 hover:text-white  ' />
                    </Link>

                    <Link href={"/cart"}>
                    <IoCartOutline className='w-10 text-[25px] rounded-full hover:bg-red-500 hover:text-white  ' />
                    </Link>
                </div>

                <Link href={"/"}>
                    <CiMenuKebab className='lg:hidden text-[25px]' />
                </Link>

            </div>


        </div>
    )
}
