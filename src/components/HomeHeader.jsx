import Link from 'next/link'
import React from 'react'
import {TbGridDots} from 'react-icons/tb'

const HomeHeader = () => {
  return (
    <header className=' flex justify-end'>
        <div className='flex gap-4 p-5 items-center'>
            <Link className=' hover:underline' href={'https://mail.google.com'}>Gmail</Link>
            <Link className=' hover:underline' href={'https://image.google.com'}>Images</Link>
            <TbGridDots className=' bg-transparent hover:bg-gray-200 rounded-full p-2 text-4xl'/>
            <button className=' bg-blue-600 px-6 py-2 rounded text-white hover:opacity-85'>Sign In</button>

        </div>

    </header>
  )
}

export default HomeHeader