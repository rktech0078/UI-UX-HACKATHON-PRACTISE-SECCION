"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";



type CardOne = {
    "percentage": string,
    "product": string,
    "heading": string,
    "newPrice": string,
    "oldPrice": string,
    "starColor": string,
    "reviews": string,
    "bgColor"?: string
}

export default function CardOne({ percentage, product, heading, newPrice, oldPrice, starColor, reviews }: CardOne) {
    return (

        <div className='m-2'>

            <div className='w-full h-[350px] gap-[16px] relative '>
                <div className='rounded-[4px] p-4 bg-[#F5F5F5]'>
                    <div className='text-white font-bold w-[55px] h-[26px] bg-[#DB4444] rounded-[4px]'>
                        <h1 className='text-white font-bold text-center '>-{percentage}%</h1>
                    </div>

                    <div className="grid gap-[8px] text-[29px] absolute right-[14px] -mt-8">
                        <FaRegHeart className="bg-white text-[35px] rounded-[50%] p-[5px]" />
                        <IoEyeOutline className="bg-white text-[35px] rounded-[50%] p-[5px]" />
                    </div>

                    <div className='flex justify-center'>
                        <Image src={`/images/product/product${product}.svg`} alt='product' width={100} height={100} className=' w-[172px] h-[152px] mt-6 mr-2' />
                    </div>
                </div>

                <h1 className="font-Poppins font-[500] text-[16px] mt-3">{heading}</h1>
                <div className="flex text-[16px] font-Poppins font-[500] gap-[12px]">
                    <p className="text-primary font-semibold">${newPrice}</p>
                    <p className="line-through text-[gray] font-semibold">${oldPrice}</p>
                </div>

                <div className="text-[18px] flex items-center gap-[8px]">
                    <FaStar className="text-[#FFAD33]" />
                    <FaStar className="text-[#FFAD33]" />
                    <FaStar className="text-[#FFAD33]" />
                    <FaStar className="text-[#FFAD33]" />
                    <FaStar className={starColor} />
                    <p className="font-Poppins font-[600] text-[14px] text-[gray]">({reviews})</p>
                </div>

            </div>

        </div>
    )
}



type CardTwo = {
    "image": string,
    "head": string,
    "newPrice": string,
    "oldPrice": string,
    "starColor": string,
    "reviews": string
}



export function CardTwo({ image, head, newPrice, oldPrice, starColor, reviews }: CardTwo) {
    return (
        <div>

            <div className='w-full h-[350px] gap-[16px] relative '>
                <div className='rounded-[4px] p-4 bg-[#F5F5F5]'>


                    <div className="grid gap-[8px] text-[29px] absolute right-[14px]">
                        <FaRegHeart className="bg-white text-[35px] rounded-[50%] p-[5px]" />
                        <IoEyeOutline className="bg-white text-[35px] rounded-[50%] p-[5px]" />
                    </div>

                    <div className='flex justify-center'>
                        <Image src={`images/product-2/product${image}.svg`} alt='product' width={100} height={100} className=' w-[172px] h-[152px] mt-6 mr-2' />
                    </div>
                </div>

                <h1 className="font-Poppins font-[500] text-[16px] mt-3">{head}</h1>
                <div className="flex text-[16px] font-Poppins font-[500] gap-[12px]">
                    <p className="text-primary font-semibold">${newPrice}</p>
                    <p className="line-through text-[gray] font-semibold">${oldPrice}</p>
                </div>

                <div className="text-[18px] flex items-center gap-[8px]">
                    <FaStar className="text-[#FFAD33]" />
                    <FaStar className="text-[#FFAD33]" />
                    <FaStar className="text-[#FFAD33]" />
                    <FaStar className="text-[#FFAD33]" />
                    <FaStar className={starColor} />
                    <p className="font-Poppins font-[600] text-[14px] text-[gray]">({reviews})</p>
                </div>

            </div>

        </div>
    )
}


type CardTwo2 = {
    "image": string,
    "head": string,
    "newPrice": string,
    "starColor1": string,
    "starColor2": string,
    "reviews": string
}

export function CardTwo2({ image, head, newPrice, starColor1, starColor2, reviews }: CardTwo2) {
    return (
        <div>

            <div className='w-full h-[350px] gap-[16px] relative '>
                <div className='rounded-[4px] p-4 bg-[#F5F5F5]'>


                    <div className="grid gap-[8px] text-[29px] absolute right-[14px]">
                        <FaRegHeart className="bg-white text-[35px] rounded-[50%] p-[5px]" />
                        <IoEyeOutline className="bg-white text-[35px] rounded-[50%] p-[5px]" />
                    </div>

                    <div className='flex justify-center'>
                        <Image src={`images/ourProduct/product${image}.svg`} alt='product' width={100} height={100} className=' w-[172px] h-[152px] mt-6 mr-2' />
                    </div>
                </div>

                <h1 className="font-Poppins font-[500] text-[16px] mt-3">{head}</h1>

                <div className='flex items-center'>
                    <div className="flex text-[16px] font-Poppins font-[500] gap-[12px]">
                        <p className="text-primary font-semibold">${newPrice}</p>
                    </div>

                    <div className="text-[18px] flex items-center gap-[8px] ml-2">
                        <FaStar className="text-[#FFAD33]" />
                        <FaStar className="text-[#FFAD33]" />
                        <FaStar className="text-[#FFAD33]" />
                        <FaStar className={starColor1} />
                        <FaStar className={starColor2} />
                        <p className="font-Poppins font-[600] text-[14px] text-[gray]">({reviews})</p>
                    </div>
                </div>

            </div>

        </div>
    )
}



type CardThree = {
    "image": string,
    "heading": string,
    "newPrice": string,
    "starColor": string,
    "reviews": string,
    "bgColor1": string,
    "bgColor2": string
}


export function CardThree({ image, heading, newPrice, starColor, reviews, bgColor1, bgColor2 }: CardThree) {

    const className = bgColor1
    const className2 = bgColor2

    return (

        <div className='m-2'>

            <div className='w-full h-[350px] gap-[16px] relative '>
                <div className='rounded-[4px] p-4 bg-[#F5F5F5]'>
                    <div className='text-white font-bold w-[55px] h-[26px] bg-[#00FF66] rounded-[4px]'>
                        <h1 className='text-white font-bold text-center '>NEW</h1>
                    </div>

                    <div className="grid gap-[8px] text-[29px] absolute right-[14px] -mt-8">
                        <FaRegHeart className="bg-white text-[35px] rounded-[50%] p-[5px]" />
                        <IoEyeOutline className="bg-white text-[35px] rounded-[50%] p-[5px]" />
                    </div>

                    <div className='flex justify-center'>
                        <Image src={`/images/ourProduct/product${image}.svg`} alt='product' width={100} height={100} className=' w-[172px] h-[152px] mt-6 mr-2' />
                    </div>
                </div>

                <h1 className="font-Poppins font-[500] text-[16px] mt-3">{heading}</h1>

                <div className='flex items-center'>
                    <div className="flex text-[16px] font-Poppins font-[500] gap-[12px]">
                        <p className="text-primary font-semibold">${newPrice}</p>
                    </div>

                    <div className="text-[18px] flex items-center gap-[8px] ml-2">
                        <FaStar className="text-[#FFAD33]" />
                        <FaStar className="text-[#FFAD33]" />
                        <FaStar className="text-[#FFAD33]" />
                        <FaStar className="text-[#FFAD33]" />
                        <FaStar className={starColor} />
                        <p className="font-Poppins font-[600] text-[14px] text-[gray]">({reviews})</p>
                    </div>
                </div>

                <div className='flex gap-2 mt-1 cursor-pointer'>
                    <div className={`w-[18px] h-[18px] ${className}  rounded-full hover:border-[2px]`}></div>
                    <div className={`w-[18px] h-[18px] ${className2}  rounded-full hover:border-[2px]`}></div>
                </div>

            </div>


        </div>
    )
}


type Category = {
    para: string,
    iconName?: React.ReactNode;
}


export function Category({ para, iconName }: Category) {
    const [icon] = useState(iconName)
    return (
        <>
            <div className='cursor-pointer w-full h-[145px] border-[1px] border-[#ccc] rounded-[4px] flex items-center justify-center hover:text-white hover:bg-primary'>
                <div className='flex flex-col items-center gap-5'>
                    <div>{icon}</div>
                    <p className='text-[16px] font-bold'>{para}</p>
                </div>
            </div>
        </>
    )
}


