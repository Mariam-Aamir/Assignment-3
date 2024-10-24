"use client"
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


const page = () => {
  const router = useRouter();
  return (
    <div> 
        <h1>About page</h1>
        
        <Link href="/Footer">Go to Footer page</Link>

        <br/>

        <button  onClick={() => router.push('/Footer')}>go to Footer page👍</button>
         
    </div>
  )
}

export default page