import React from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { SOCIALS, PHONE, RESUME_LINK } from '../data/profile'

const Contact = () => (
  <div name="contact" className="w-full py-24">
    <div className="max-w-[680px] mx-auto px-6">
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
          Hiring for a blockchain, smart contract, or Rust backend role? Email me at{' '}
          <a href={`mailto:${SOCIALS.email}`} className="text-accent-cyan hover:underline">
            {SOCIALS.email}
          </a>{' '}
          or call{' '}
          <a href={`tel:${PHONE}`} className="text-accent-cyan hover:underline">{PHONE}</a>.
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
          type="text" placeholder="Name" name="name" required
        />
        <input
          className="bg-white/[0.04] border border-white/[0.08] focus:border-accent-cyan/50 outline-none text-white placeholder-slate-500 p-3 rounded-lg transition-colors"
          type="email" placeholder="Email" name="email" required
        />
        <textarea
          className="bg-white/[0.04] border border-white/[0.08] focus:border-accent-cyan/50 outline-none text-white placeholder-slate-500 p-3 rounded-lg transition-colors resize-none"
          name="message" rows="6" placeholder="Message" required
        />
        <button className="bg-gradient-to-r from-accent-cyan to-accent text-white font-semibold px-6 py-3 mt-1 rounded-lg hover:shadow-lg hover:shadow-accent-cyan/20 transition-all duration-300">
          Let's Collaborate
        </button>
      </motion.form>

      <div className="flex justify-center mt-10">
        <ul className="flex flex-wrap gap-6">
          {[
            { href: SOCIALS.linkedin, icon: <FaLinkedin />, color: 'hover:text-[#0072b1]' },
            { href: SOCIALS.github, icon: <FaGithub />, color: 'hover:text-white' },
            { href: SOCIALS.twitter, icon: <FaTwitter />, color: 'hover:text-[#1DA1F2]' },
            { href: SOCIALS.whatsapp, icon: <FaWhatsapp />, color: 'hover:text-[#25D366]' },
            { href: RESUME_LINK, icon: <BsFillPersonLinesFill />, color: 'hover:text-accent' },
            { href: `mailto:${SOCIALS.email}`, icon: <HiOutlineMail />, color: 'hover:text-accent-cyan' },
          ].map(({ href, icon, color }, i) => (
            <li key={i} className="px-0">
              <a href={href} target="_blank" rel="noreferrer"
                className={`text-slate-400 ${color} transition-colors text-2xl`}>
                {icon}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-8 text-slate-600 text-xs text-center font-mono">
        © {new Date().getFullYear()} Sivaji Gadidala · Built with React, Tailwind & Framer Motion
      </p>
    </div>
  </div>
)

export default Contact
