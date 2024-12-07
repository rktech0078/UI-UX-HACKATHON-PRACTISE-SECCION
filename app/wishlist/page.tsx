import ForYou from '@/components/wishlist/ForYou'
import Product from '@/components/wishlist/product'
import React from 'react'

export default function Page() {
  return (
    <>
        <div className='lg:px-[90px] md:px-[50px]'>
        <Product/>
        <ForYou/>
        </div>
    </>
  )
}
