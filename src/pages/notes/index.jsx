import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Page = () => {
  const router = useRouter()

  return (
    <div>
      <h1>Notes Index Page</h1>
  
      <button onClick={e => router.push('/')}>
        Home
      </button>
  
      <Link href="/notes/[params]" as={`/notes/1`}>
        <a>
          Note 1
        </a>
      </Link>
    </div>
  )
}


export default Page
