import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div> 
        <h1>About page</h1>
        
        <Link href="/Footer">Go to Footer page</Link>
         
    </div>
  )
}

export default page