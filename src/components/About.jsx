import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-yellow-400'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Sivaji, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>Hello! I take pride in offering exceptional UI/UX design that combines visual appeal with seamless user experiences. My expertise spans responsive web development, ensuring flawless functionality across all devices. Proficient in Python, JavaScript, and Solidity, I leverage frameworks like Django and NodeJS to build robust applications.

With experience in tools such as Docker, Kubernetes, and GitHub, I bring efficiency and reliability to the development process. Additionally, I excel in writing Solidity smart contracts, opening the gateway to blockchain solutions for your needs. Let's bring your ideas to digital life together!</p>  
            </div>
          </div>
      </div>
    </div>
  );
}

export default About
