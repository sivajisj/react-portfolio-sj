import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div name='contact' className='w-full min-h-screen bg-[#0a192f] flex flex-col justify-center items-center p-4'>
      
      {/* Contact Form */}
      <form 
        method='POST' 
        action="https://getform.io/f/4be1fb25-f235-4cb1-a6bd-3e742f86094c" 
        className='flex flex-col max-w-[600px] w-full'
      >
  <div className='pb-8'>
  <p className='text-4xl font-bold inline border-b-4 border-yellow-400 text-gray-300'>
    Contact
  </p>
  <p className='text-gray-300 py-4'>
    // Submit the form below, email me directly at 
    <a href="mailto:sivajigadidala48@gmail.com" className='text-yellow-400 hover:underline ml-1'>
      sivajigadidala48@gmail.com
    </a>
    , or call me at 
    <a href="tel:+919876543210" className='text-yellow-400 hover:underline ml-1'>
      +91 7032891144
    </a>
  </p>
</div>

        <input className='bg-[#ccd6f6] p-2 rounded' type="text" placeholder='Name' name='name' required />
        <input className='my-4 p-2 bg-[#ccd6f6] rounded' type="email" placeholder='Email' name='email' required />
        <textarea className='bg-[#ccd6f6] p-2 rounded' name="message" rows="10" placeholder='Message' required></textarea>
        <button className='text-white border-2 hover:bg-yellow-400 hover:text-black hover:border-black px-4 py-3 my-8 mx-auto flex items-center rounded-lg transition duration-300'>
          Let's Collaborate
        </button>
      </form>

      {/* Footer Social Icons */}
      <div className="w-full flex justify-center mt-8">
        <ul className="flex flex-wrap gap-6">
          <li>
            <a href="https://www.linkedin.com/in/sivaji-gadidala-b712ba221" target="_blank" rel="noreferrer"
              className="text-gray-300 hover:text-[#0072b1] transition duration-300 text-2xl">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="https://github.com/sivajisj" target="_blank" rel="noreferrer"
              className="text-gray-300 hover:text-white transition duration-300 text-2xl">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://x.com/sjtweets0" target="_blank" rel="noreferrer"
              className="text-gray-300 hover:text-[#1DA1F2] transition duration-300 text-2xl">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://wa.me/917032891144" target="_blank" rel="noreferrer"
              className="text-gray-300 hover:text-[#25D366] transition duration-300 text-2xl">
              <FaWhatsapp />
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1ZyJf2nl-VA1zKBnWTqj4PvNWyIKAWmj-/view?usp=sharing" target="_blank" rel="noreferrer"
              className="text-gray-300 hover:text-purple-400 transition duration-300 text-2xl">
              <BsFillPersonLinesFill />
            </a>
          </li>
          <li>
            <a href="mailto:sivajigadidala48@gmail.com"
              className="text-gray-300 hover:text-[#089994] transition duration-300 text-2xl">
              <HiOutlineMail />
            </a>
          </li>
        </ul>
      </div>

      {/* Small Footer Note */}
      <div className="mt-6 text-gray-500 text-sm text-center">
        © {new Date().getFullYear()} Sivaji Gadidala. All rights reserved.
      </div>
    </div>
  )
}

export default Contact;
