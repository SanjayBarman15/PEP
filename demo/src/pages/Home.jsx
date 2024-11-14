import React from 'react'
import HeroFoot from '../components/HeroFoot'
import HeroHead from '../components/HeroHead'

function Home() {
  return (
    <div>
      <HeroHead/>
      <h1 className='flex text-center items-center justify-center h-[100vh] text-3xl'>Welcome to Home Page</h1>
      <HeroFoot/>
    </div>
  )
}

export default Home
