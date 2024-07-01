import React from 'react';


import Javascript from  '../assets/javascript.png'
import node from  '../assets/node.png'
import reactt from  '../assets/react.png'
import python from  '../assets/python.png'
import Figma from  '../assets/figma.png'
import Tailwind from '../assets/tailwind.png'
import Java from  '../assets/java.png'
import Solidity from  '../assets/solidity.png'
import mysql from  '../assets/mysql.png'
import Linux from '../assets/html.png';
import Express from "../assets/express.png"
import redux from "../assets/redux.png"
import mongodb from "../assets/mongodb.png"
import Django from "../assets/django.png"


const Skills = () => {
  return (
<div name='skills' className='w-full min-h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-yellow-400 '>Skills</p>
              <p className='py-4'>// These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className='w-20 mx-auto' src={Javascript} alt="Javascript icon" />
                <p className='my-4'>Javascript</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className='w-20 mx-auto' src={python} alt="python icon" />
                <p className='my-4'>Python</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className='w-20 mx-auto' src={node} alt="node icon" />
                <p className='my-4'>nodeJs</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className='w-20 mx-auto' src={Express} alt="express icon" />
                <p className='my-4'>Express</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className='w-20 mx-auto' src={reactt} alt="react icon" />
                <p className='my-4'>reactJS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className='w-20 mx-auto' src={redux} alt="redux icon" />
                <p className='my-4'>Redux</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className='w-20 mx-auto' src={Figma} alt="Figma icon" />
                <p className='my-4'>Figma</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className='w-20 mx-auto' src={Tailwind} alt="Tailwindcss icon" />
                <p className='my-4'>Tailwindcss</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
             <img  className='w-20 mx-auto' src={Java} alt="Java icon" />
                <p className='my-4'>Java</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className='w-20 mx-auto' src={Solidity} alt="Solidity icon" />
                    <p className='my-4'>Solidity</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className='w-20 mx-auto' src={mongodb} alt="Solidity icon" />
                    <p className='my-4'>MongoDB</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
             <img  className='w-20 mx-auto' src={Flask} alt="Java icon" />
                <p className='my-4'>Flask </p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img  className='w-20 mx-auto' src={mysql} alt="Mysql icon" />
                <p className='my-4'>Mysql</p>
             </div>

          </div>
      </div>
    </div>
  );
};

export default Skills;
