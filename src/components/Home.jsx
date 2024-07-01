import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import {Link} from 'react-scroll'
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      
      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
      <p className='text-[#d2b533]'>Hii, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          SIVAJI GADIDALA
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Passionate Web Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        I’m a Full stack developer specializing in building and designing digital experiences. Skilled in Python, JavaScript, Solidity and frameworks like Django and NodeJS. Proficient with tools such as Docker, Kubernetes, and GitHub. Currently focused on creating responsive full-stack web applications.
        </p>
        <div>
         <Link to="work"  smooth={true} offset={50} duration={500}>
         <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#fcc200] hover:text-black hover:font-bold hover:border-purple-400'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button></Link> 
       
        </div>
      </div>
    </div>
  )
}

export default Home
