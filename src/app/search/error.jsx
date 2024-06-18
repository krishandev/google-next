"use client"

import { useEffect } from "react"


const error = ({Error, reset}) => {

    useEffect(()=>{
        console.log('error', Error)
    }, [Error])
  return (
    <div className="flex flex-col justify-center items-center pt-10">
        <h1 className=" text-3xl mb-4">Something Went Wrong !</h1>
        <button className=" text-blue-500">Try Again</button>
    </div>
  )
}

export default error