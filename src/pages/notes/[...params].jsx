import React from 'react'
import { useRouter } from 'next/router'

const Page = () => {
  const router = useRouter()
  const { params } = router.query

  return (
    <div>Note</div>
  )
}

export default Page
