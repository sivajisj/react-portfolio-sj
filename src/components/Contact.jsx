import React from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { SOCIALS, PHONE, RESUME_LINK } from '../data/profile'

const Contact = () => {
  return (
    <div name="contact" className="w-full py-24">
      <div className="max-w-[700px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="section-eyebrow">// let's build together</p>
          <h2 className="section-heading mt-2 mb-4">Get In Touch</h2>
          <p className="text-slate-400">
            Hiring for a blockchain, smart contract, or Rust backend role? Submit the form below, email me at{' '}
            <a href={`mailto:${SOCIALS.email}`} className="text-accent-cyan hover:underline">
              {SOCIALS.email}
            </a>
            , or call{' '}
            <a href={`tel:${PHONE}`} className="text-accent-cyan hover:underline">
              {PHONE}
            </a>
            .
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          method="POST"
          action="https://getform.io/f/4be1fb25-f235-4cb1-a6bd-3e742f86094c"
          className="glass rounded-2xl p-8 flex flex-col gap-4"
        >
          <input
            className="bg-white/[0.04] border border-white/[0.08] focus:border-accent-cyan/50 outline-none text-white placeholder-slate-500 p-3 rounded-lg transition-colors"
            type="text"
            placeholder="Name"
            name="name"
            required
          />
          <input
            className="bg-white/[0.04] border border-white/[0.08] focus:border-accent-cyan/50 outline-none text-white placeholder-slate-500 p-3 rounded-lg transition-colors"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
          <textarea
            className="bg-white/[0.04] border border-white/[0.08] focus:border-accent-cyan/50 outline-none text-white placeholder-slate-500 p-3 rounded-lg transition-colors"
            name="message"
            rows="6"
            placeholder="Message"
            required
          />
          <button className="bg-gradient-to-r from-accent-cyan to-accent text-white font-medium px-6 py-3 mt-2 rounded-lg hover:shadow-lg hover:shadow-accent-cyan/20 transition-all duration-300">
            Let's Collaborate
          </button>
        </motion.form>

        <div className="w-full flex justify-center mt-10">
          <ul className="flex flex-wrap gap-6">
            <li>
              <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#0072b1] transition-colors text-2xl">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href={SOCIALS.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors text-2xl">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href={SOCIALS.twitter} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#1DA1F2] transition-colors text-2xl">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href={SOCIALS.whatsapp} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#25D366] transition-colors text-2xl">
                <FaWhatsapp />
              </a>
            </li>
            <li>
              <a href={RESUME_LINK} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-accent transition-colors text-2xl">
                <BsFillPersonLinesFill />
              </a>
            </li>
            <li>
              <a href={`mailto:${SOCIALS.email}`} className="text-slate-400 hover:text-accent-cyan transition-colors text-2xl">
                <HiOutlineMail />
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-8 text-slate-600 text-sm text-center font-mono">
          © {new Date().getFullYear()} Sivaji Gadidala. Built with React, Tailwind & Framer Motion.
        </div>
      </div>
    </div>
  )
}

export default Contact
