import Link from 'next/link'
import React from 'react'
import PaginationButtons from './PaginationButtons'

const WebSearchResults = ({results}) => {
  return (
    <div className=' w-full mx-auto px-3 sm:pb-24 pb-40 py-10 sm:pl-[5%] md:pl-[14%] lg:pl-52'>
        <p className='text-gra-600 text-sm mb-5 mt-3'>About {results.searchInformation?.formattedTotalResults} Results ({results.searchInformation?.formattedSearchTime} Seconds)</p>

        {
            results.items?.map((result)=>(
                <div className=' mb-8 max-w-xl' key={result.link}>
                    <div className=' group flex flex-col'>
                        <Link href={result.link}>
                        {result.formattedUrl}
                        
                        </Link>

                        <Link href={result.link} className=' group-hover:underline decoration-blue-800 text-xl truncate font-medium text-blue-800'>
                        {result.title}
                        </Link>
                    </div>
                    <p>
                        {(result.htmlSnippet)}
                    </p>

                </div>
            ))
        }
        <div className='ml-16'>
        <PaginationButtons/>
        </div>
    </div>
  )
}

export default WebSearchResults