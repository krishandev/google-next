import Footer from '@/components/Footer'
import HomeHeader from '@/components/HomeHeader'
import HomeSearch from '@/components/HomeSearch'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <>
    <HomeHeader/>
    <div className='flex items-center mt-24 flex-col text-sm'>
      <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png" priority style={{width:'auto'}} alt='Google logo' width={300} height={100}/>
   
      <HomeSearch/>
    </div>
    <Footer/>
    
    </>
  )
}

export default page