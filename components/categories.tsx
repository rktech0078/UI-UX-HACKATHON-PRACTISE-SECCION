import React from 'react'
import Frame from './cards/frame';
import { Category } from './cards/card';
import { CiMobile1 } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { CgAppleWatch } from "react-icons/cg";
import { CiCamera } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { LuGamepad } from "react-icons/lu";


export default function Categories() {
    return (

        <>
            <Frame/>

        <div className='px-5 grid gap-6 md:grid-cols-3 lg:grid-cols-6 mb-6'>
            <Category iconName={<CiMobile1 className=' w-[56px] h-[56px]'/>} para="Phones"/>
            <Category iconName={<HiOutlineComputerDesktop className='w-[56px] h-[56px]'/>} para="Computers"/>
            <Category iconName={<CgAppleWatch className='w-[56px] h-[56px]'/>} para="SmartWatch"/>
            <Category iconName={<CiCamera className='w-[56px] h-[56px]'/>} para="Camera"/>
            <Category iconName={<CiHeadphones className='w-[56px] h-[56px]'/>} para="HeadPhones"/>
            <Category iconName={<LuGamepad className='w-[56px] h-[56px]'/>} para="Gaming"/>
        </div>
        </>

    )
}
