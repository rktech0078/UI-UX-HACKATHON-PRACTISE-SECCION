import React from 'react'
import { Frame4 } from './cards/frame'
import Image from 'next/image'

// export default function NewArrival() {
//     return (
//         <>
//             <Frame4 />

//             <div className='w-full h-[600px] grid grid-cols-4 grid-rows-2 mt-12 p-6 items-center     mb-40'>

//                 <div className='col-span-2 row-span-2 border w-[570px] h-[600px]'>1
//                     <Image src={"/images/newArrival/product1.svg"} alt='NEW ARRIVALS' width={100} height={100} className='' />
//                 </div>

//                 <div className='col-span-2 row-span-1 border'>2
//                     <Image src={"/images/newArrival/product2.svg"} alt='NEW ARRIVALS' width={100} height={100} className='' />
//                 </div>

//                 <div className='row-span-1 border'>3
//                     <Image src={"/images/newArrival/product3.svg"} alt='NEW ARRIVALS' width={100} height={100} className='' />
//                 </div>

//                 <div className='row-span-1 border'>4
//                     <Image src={"/images/newArrival/product4.svg"} alt='NEW ARRIVALS' width={100} height={100} className='' />
//                 </div>

//             </div>
//         </>
//     )
// }


export default function NewArrival() {
    return (
        <>
            <Frame4 />

            <div className='w-auto grid xl:grid-cols-4 xl:grid-rows-2 gap-2 p-3 mb-20'>

                <div className='col-span-2 row-span-2 '>
                    <Image src={"/images/newArrival/product1.svg"} alt='NEW ARRIVALS' width={100} height={100} className='w-full xl:w-[570px] h-[600px]' />

                </div>

                <div className='col-span-2 row-span-1 '>
                    <Image src={"/images/newArrival/product2.svg"} alt='NEW ARRIVALS' width={100} height={100} className='w-full xl:w-[570px] h-[300px]' />

                </div>

                <div className='col-span-1 row-span-1 '>
                    <Image src={"/images/newArrival/product3.svg"} alt='NEW ARRIVALS' width={100} height={100} className='w-full xl:w-[270px] h-[300px]' />

                </div>

                <div className='col-span-1 row-span-1 '>
                    <Image src={"/images/newArrival/product4.svg"} alt='NEW ARRIVALS' width={100} height={100} className='w-full xl:w-[270px] h-[300px]' />
                </div>


            </div>

        </>
    )
}
