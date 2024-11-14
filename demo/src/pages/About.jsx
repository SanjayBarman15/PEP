import React from 'react'
import HeroFoot from '../components/HeroFoot'
import HeroHead from '../components/HeroHead'

function About() {
  return (
    <div>
      <HeroHead/>
      <h1 className='flex text-center items-center justify-center h-[100vh] text-3xl'>Hi, this is website of ABC India. We provide various products and services for Industry.</h1>
      <HeroFoot/>
    </div>
  )
}

export default About
