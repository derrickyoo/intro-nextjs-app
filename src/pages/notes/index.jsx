import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Page = ({ notes }) => {
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

      {notes.map(note => (
        <div>{ note.title }</div>
      ))}
    </div>
  )
}

export default Page

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/notes/`)
  const { data } = await res.json()

  console.log(data);

  return {
    props: {notes: data}
  }
}