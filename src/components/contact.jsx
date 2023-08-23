import React from 'react'

const contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
    <form method='POST' action="https://getform.io/f/4be1fb25-f235-4cb1-a6bd-3e742f86094c" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-yellow-400 text-gray-300'>Contact</p>
            <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - sivajigadidala48@gmail.com</p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
        <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-yellow-400 hover:text-black  hover:border-black px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
    </form>
</div>
  )
}

export default contact
