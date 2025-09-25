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
            <p>Hi, I'm Sivaji. Great to meet you!</p>
          </div>
          <div>
            <p className="leading-relaxed">
              I’m a <span className="text-yellow-400 font-medium">Full Stack & Web3 Developer</span> {" "}
              passionate about building scalable, high-performance applications. My expertise includes{" "}
              <span className="text-yellow-400 font-medium">Solidity, Ethereum, Solana, smart contracts</span>, 
              and modern web frameworks like{" "}
              <span className="text-yellow-400 font-medium">React, Node.js, and Python</span>. 
              I focus on creating seamless bridges between{" "}
              <span className="text-yellow-400 font-medium">Web2 and Web3</span> to deliver next-gen digital experiences.
            </p>

            <p className="mt-4 leading-relaxed">
              Beyond coding, I bring reliability and efficiency with tools such as{" "}
              <span className="text-yellow-400 font-medium">Docker, Kubernetes, and GitHub</span>. 
              I specialize in{" "}
              <span className="text-yellow-400 font-medium">DeFi, dApps, and blockchain-based solutions</span>, 
              aiming to design products that push the boundaries of innovation.
            </p>

            <p className="mt-4 leading-relaxed">
              If you’re looking for a developer who can deliver impactful 
              <span className="text-yellow-400 font-medium"> blockchain applications</span> 
              and robust full-stack systems — let’s connect and build something meaningful together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About
