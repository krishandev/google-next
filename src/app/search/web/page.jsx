import WebSearchResults from '@/components/WebSearchResults';
import Link from 'next/link';
import React from 'react'

const WebSearchPage = async({searchParams}) => {

  await new Promise((resolve)=>setTimeout(resolve, 1000));

  const response=await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`)

  if(!response.ok) throw new Error('Something Went Wrong!')
  const data=await response.json();
  const results=data.items;

  if(!results)
    {
      return(
        <div className=' flex flex-col justify-center items-start pt-10 p-2'>
          <h1 className=' text-3xl mb-4'>No Result Found for {searchParams.searchTerm}</h1>
          <p className=' text-lg'>Try Something Other on the Web or Images {' '}
            <Link href='/' className=' text-blue-500'>Home</Link>
          </p>
        </div>
      )
    }
  return (
    <div>
      {results && <WebSearchResults results={data}/>}

      
    </div>
  )
}

export default WebSearchPage