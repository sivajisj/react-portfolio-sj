import React from 'react'
 import AgeC from "../assets/agec.png"
 import Calculator from "../assets/calc.jpg"

 import ExpenseTracker from "../assets/expenseT.png"
 import Airbnb from "../assets/Airbnb.jpg"
 import Meme from "../assets/meme.jpg"
 import Rocket from "../assets/Rocket.png"

 
const Workk = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
      <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-yellow-400'>
          Work
        </p>
        <p className='py-6'>// Check out some of my recent work</p>
      </div>
    {/* container */}
            <div 
             name="grid-container" className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* Grid-item */}
                <div style={{backgroundImage:`url(${ExpenseTracker})`}} className='shadow-lg shadow-[#040c16] container
                items-center group rounded-md flex justify-center
                mx-auto content-div'>
                     {/* hover effect */}
                      <div className='opacity-0 group-hover:opacity-100'>
                        <h3 className='text-2xl font-bold text-white tracking-wider text-center text-center'>
                            React JS
                            ExpenseTracker Application
                        </h3>

                        <div className='flex justify-center items-center'>
                        <a href="https://expense-tracker-sjj.netlify.app">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '> Demo</button>
                        </a>
                        <a href="https://github.com/sivajisj/react-projects-practice/tree/main/Expense-tracker">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '> Code</button>
                        </a>
                        </div>
                       

                 
                    </div> 
                </div>
                <div style={{backgroundImage:`url(${Airbnb})`}} className='shadow-lg shadow-[#040c16] container
                items-center group rounded-md flex justify-center
                mx-auto content-div'>
                     {/* hover effect */}
                      <div className='opacity-0 group-hover:opacity-100'>
                        <h3 className='text-2xl font-bold text-white tracking-wider text-center mx-6'>
                            React JS
                            Airbnb Clone 
                        </h3>

                        <div className='flex justify-center items-center'>
                        <a href="https://airbnb-clone-sj.netlify.app">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '> Demo</button>
                        </a>
                        <a href="https://github.com/sivajisj/clone-airbnb">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '> Code</button>
                        </a>
                        </div>
                       
                    </div> 
                </div>


                <div style={{backgroundImage:`url(${Meme})`}} className='shadow-lg shadow-[#040c16] container
                items-center group rounded-md flex justify-center
                mx-auto content-div'>
                     {/* hover effect */}
                      <div className='opacity-0 group-hover:opacity-100'>
                        <h3 className='text-2xl font-bold text-white tracking-wider text-center mx-6'>
                            React JS 
                          Random  Meme generator 
                        </h3>

                        <div className='flex justify-center items-center'>
                        <a href="https://meme-generator-react-sj.netlify.app">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '> Demo</button>
                        </a>
                        <a href="https://github.com/sivajisj/meme-generator-react">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '> Code</button>
                        </a>
                        </div>
                       
                    </div> 
                </div>



                <div style={{backgroundImage:`url(${Rocket})`}} className='shadow-lg shadow-[#040c16] container
                items-center group rounded-md flex justify-center
                mx-auto content-div'>
                     {/* hover effect */}
                      <div className='opacity-0 group-hover:opacity-100'>
                        <h3 className='text-2xl font-bold text-white tracking-wider text-center mx-6'>
                            Javascript & Tailwindcss
                            Rocket website 
                        </h3>

                        <div className='flex justify-center items-center'>
                        <a href="https://sj-rockets-space.onrender.com/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '> Demo</button>
                        </a>
                        <a href="https://github.com/sivajisj/sj-rockets">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '> Code</button>
                        </a>
                        </div>
                    </div> 
                </div>


                <div style={{backgroundImage:`url(${AgeC})`}} className='shadow-lg shadow-[#040c16] container
                items-center group rounded-md flex justify-center
                mx-auto content-div'>
                     {/* hover effect */}
                      <div className='opacity-0 group-hover:opacity-100'>
                        <h3 className='text-2xl font-bold text-white tracking-wider text-center mx-6'>
                           JS 
                            Age Calculator 
                        </h3>

                        <div className='flex justify-center items-center'>
                        <a href="https://age-calculatorr-app.netlify.app">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '> Demo</button>
                        </a>
                        <a href="https://github.com/sivajisj/AgeCalculator">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '> Code</button>
                        </a>
                        </div>
                    </div> 
                </div>

                <div style={{backgroundImage:`url(${Calculator})`}} className='shadow-lg shadow-[#040c16] container
                items-center group rounded-md flex justify-center
                mx-auto content-div'>
                     {/* hover effect */}
                      <div className='opacity-0 group-hover:opacity-100'>
                        <h3 className='text-2xl font-bold text-white tracking-wider text-center mx-6'>
                            React JS 
                            calculator Application
                        </h3>

                        <div className='flex justify-center items-center'>
                        <a href="https://calculator-app-sj.netlify.app">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '> Demo</button>
                        </a>
                        <a href="https://github.com/sivajisj/calculator-react-main">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '> Code</button>
                        </a>
                        </div>
                    </div> 
                </div>

                
            </div>
        </div>
    </div>
  )
}

export default Workk
