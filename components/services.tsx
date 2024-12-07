import React from 'react'
import PreService from './cards/service'

export default function Services() {
  return (
    <>
        <div className='grid md:flex md:justify-between items-center gap-6 mb-20'>
            <PreService image={1} head='FREE AND FAST DELIVERY' para='Free delivery for all orders over $140'/>
            <PreService image={2} head='24/7 CUSTOMER SERVICE' para='Friendly 24/7 customer support'/>
            <PreService image={3} head='MONEY BACK GUARANTEE' para='We reurn money within 30 days'/>
        </div>
    </>
  )
}
