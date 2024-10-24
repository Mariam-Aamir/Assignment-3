"use client"
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


export default function Home() {
  const router = useRouter();


  return (
    <div>
      
      <h1>Login page</h1> 

      <Link href="/About">Go to About page</Link>
<br/>
      <button onClick={() => router.push('/About')}>go to About page👍</button>
    </div>
  )
}

