import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      
      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#d2b533] tracking-widest uppercase font-semibold'>
          Building the Future with Ethereum & Solana
        </p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          SIVAJI GADIDALA
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Passionate Full Stack & Web3 Developer.
        </h2>
            
        <p className='text-[#8892b0] py-4 max-w-[750px] leading-relaxed'>
          I specialize in building scalable full-stack applications and decentralized 
          solutions powered by blockchain. Skilled in{" "}
          <a href="https://docs.soliditylang.org/" target="_blank" rel="noopener noreferrer" className="text-[#d2b533] font-medium hover:underline">
            Solidity
          </a>
          ,{" "}
          <a href="https://ethereum.org/en/developers/" target="_blank" rel="noopener noreferrer" className="text-[#d2b533] font-medium hover:underline">
            Ethereum
          </a>
          ,{" "}
          <a href="https://solana.com/developers" target="_blank" rel="noopener noreferrer" className="text-[#d2b533] font-medium hover:underline">
            Solana
          </a>
          ,{" "}
          <a href="https://www.anchor-lang.com/" target="_blank" rel="noopener noreferrer" className="text-[#d2b533] font-medium hover:underline">
            Anchor
          </a>
          ,{" "}
          <a href="https://ethereum.org/en/developers/docs/smart-contracts/" target="_blank" rel="noopener noreferrer" className="text-[#d2b533] font-medium hover:underline">
            smart contracts
          </a>
          , and{" "}
          <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="text-[#d2b533] font-medium hover:underline">
            React
          </a>
          ,{" "}
          <a href="https://nodejs.org/en/docs" target="_blank" rel="noopener noreferrer" className="text-[#d2b533] font-medium hover:underline">
            Node.js
          </a>
          ,{" "}
          <a href="https://docs.python.org/3/" target="_blank" rel="noopener noreferrer" className="text-[#d2b533] font-medium hover:underline">
            Python
          </a>
          , I bridge Web2 and Web3 to deliver seamless digital experiences. 
          Passionate about{" "}
          <a href="https://ethereum.org/en/defi/" target="_blank" rel="noopener noreferrer" className="text-[#d2b533] font-medium hover:underline">
            DeFi
          </a>
          ,{" "}
          <a href="https://ethereum.org/en/developers/docs/dapps/" target="_blank" rel="noopener noreferrer" className="text-[#d2b533] font-medium hover:underline">
            dApps
          </a>
          , and next-gen financial technology, 
          I aim to create impactful solutions for the decentralized future.
        </p>

        <div>
          <Link to="work" smooth={true} offset={50} duration={500}>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#fcc200] hover:text-black hover:font-bold hover:border-purple-400'>
              View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
              </span>
            </button>
          </Link> 
        </div>
      </div>
    </div>
  )
}

export default Home
