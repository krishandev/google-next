"use client"
import React, { useState } from 'react'
import {RxCross2} from 'react-icons/rx'
import {BsFillMicFill} from 'react-icons/bs'
import {AiOutlineSearch} from 'react-icons/ai'
import { useRouter, useSearchParams } from 'next/navigation'


const SearchBox = () => {
  const searchParams=useSearchParams();
  const router=useRouter();
  const searchTerm=searchParams.get('searchTerm');
  const [term, setTerm]=useState(searchTerm || '')

  const handleSubmit=(e)=>{
   e.preventDefault();
   if(!term.trim()) return;
   router.push(`/search/web?searchTerm=${term}`)
  }

  return (
    <form onSubmit={handleSubmit} className='border border-gray-200 w-full rounded-full flex max-w-3xl items-center flex-grow py-3 ml-10 mr-5 px-6'>
   <input type='text' className=' w-full focus:outline-none' value={term} onChange={(e)=>setTerm(e.target.value)}/>
   <RxCross2 className=' text-2xl text-gray-500 cursor-pointer sm:mr-2' onClick={()=>setTerm('')}/>
   <BsFillMicFill className=' hidden sm:inline-flex text-4xl text-blue-500 border-l-2 border-gray-300 mr-3 pl-4'/>
   <AiOutlineSearch className=' hidden sm:inline-flex text-blue-500 cursor-pointer text-2xl' onClick={handleSubmit}/>

    </form>
  )
}

export default SearchBox