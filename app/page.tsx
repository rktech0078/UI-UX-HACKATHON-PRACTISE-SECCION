
import Banner from '@/components/banner'
import Categories from '@/components/categories'
import Flash from '@/components/flash'
import HomeSection from '@/components/homeSection'
import NewArrival from '@/components/newArrival'
import OurProduct from '@/components/ourProduct'
import ProductList1 from '@/components/productList1'
import Services from '@/components/services'
import ThisMonth from '@/components/thisMonth'
import React from 'react'

export default function Home() {
  return (
    <>
      <HomeSection />
      <div className='lg:px-[90px] md:px-[50px]'>
        <Flash />
        <ProductList1 />
        <Categories />
        <ThisMonth/>
        <Banner/>
        <OurProduct/>
        <NewArrival/>
        <Services/>
      </div>
    </>
  )
}
