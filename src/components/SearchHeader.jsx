import Image from 'next/image'
import Link from 'next/link'
import {RiSettings3Line} from 'react-icons/ri'
import {TbGridDots} from 'react-icons/tb'

import React from 'react'
import SearchBox from './SearchBox'
import SearchHeaderOptions from './SearchHeaderOptions'

const SearchHeader = () => {
  return (
    <header className=' sticky top-0 bg-white'>
        <div className=' flex justify-between p-6 w-full items-center'>
            <Link href='/'>
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png" priority style={{width:'auto'}} alt='Google logo' width={120} height={40}/>
            
            </Link>

            <div>
            <SearchBox/>
            </div>
          <div className=' hidden md:inline-flex space-x-3'>
          <RiSettings3Line className=' text-4xl bg-transparent hover:bg-gray-200 p-2 rounded-full cursor-pointer'/>
          <TbGridDots className=' text-4xl bg-transparent rounded-full cursor-pointer p-2 hover:bg-gray-200'/>
          <button className=' bg-blue-600 px-6 py-2 rounded text-white hover:opacity-85'>Sign In</button>
          </div>
        </div>
    <SearchHeaderOptions/>
    </header>
  )
}

export default SearchHeader