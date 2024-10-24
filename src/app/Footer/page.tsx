"use client"

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


const page = () => {
  const router = useRouter();

  return (
    <div>
        <h1>Footer Page</h1>

            <Link href="/Contact"> Go to Contact page </Link>

            <br/>

            <button  onClick={() => router.push('/Contact')}>go to Contact Page👍</button>

    </div>
  )
}

export default page