// export const dynamic = 'force-dynamic'
import React, { Suspense } from 'react'
import HomePage from './components/HomePage'

const Home = () => {
  return (
    <Suspense><HomePage/></Suspense>
  )
}

export default Home