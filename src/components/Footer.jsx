import React from 'react'
import CountryLookup from './CountryLookup'

const Footer = () => {
  return (
    <footer className=' bg-gray-300 flex flex-col space-y-3 p-3 bottom-0 absolute w-full text-sm'>
        <div>
            <CountryLookup/>
        </div>
        <div className='flex justify-between flex-col sm:flex-row'>
            <ul className='flex space-x-4'>
                <li className=' hover:underline'>About</li>
                <li className=' hover:underline'>Advertising</li>
                <li className=' hover:underline'>Business</li>
                <li className=' hover:underline'>How Search Works</li>
            </ul>
            <ul className='flex space-x-4 '>
                <li className=' hover:underline'>Privacy</li>
                <li className=' hover:underline'>Terms</li>
                <li className=' hover:underline'>Setting</li>
            </ul>
        </div>
        
    </footer>
  )
}

export default Footer