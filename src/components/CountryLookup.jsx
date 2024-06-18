"use client"

import { useEffect, useState } from "react"

const CountryLookup = () => {
    const [country, setCountry]=useState('USA')

    useEffect(()=>{
        const getCountry=async()=>{
            const response=await fetch('https://extreme-ip-lookup.com/')
        }
    })
  return (
    <div>CountryLookup</div>
  )
}

export default CountryLookup