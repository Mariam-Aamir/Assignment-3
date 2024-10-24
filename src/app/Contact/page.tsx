"use client"

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


const page = () => {
  const router = useRouter();

  return (
    <div> 
        <h1>Contact page</h1>

        <Link href="/">Back to Home</Link>

        <br/>
        <button  onClick={() => router.push('/')}>back to Home 👍</button>
      
    </div>
  )

}

export default page