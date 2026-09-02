import React from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { SOCIALS, PHONE, RESUME_LINK } from '../data/profile'

const LINKS = [
  { href: SOCIALS.linkedin, icon: <FaLinkedin size={20} />, label: 'LinkedIn', color: 'hover:text-[#0077B5] hover:border-[#0077B5]/30' },
  { href: SOCIALS.github, icon: <FaGithub size={20} />, label: 'GitHub', color: 'hover:text-white hover:border-white/30' },
  { href: SOCIALS.twitter, icon: <FaTwitter size={20} />, label: 'Twitter / X', color: 'hover:text-sky-400 hover:border-sky-400/30' },
  { href: SOCIALS.whatsapp, icon: <FaWhatsapp size={20} />, label: 'WhatsApp', color: 'hover:text-[#25D366] hover:border-[#25D366]/30' },
  { href: RESUME_LINK, icon: <BsFillPersonLinesFill size={20} />, label: 'Resume', color: 'hover:text-accent hover:border-accent/30' },
  { href: `mailto:${SOCIALS.email}`, icon: <HiOutlineMail size={20} />, label: 'Email', color: 'hover:text-accent-cyan hover:border-accent-cyan/30' },
]

const Contact = () => (
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
        <p className="text-slate-400 text-sm leading-relaxed max-w-md mx-auto">
          Open to Blockchain Engineer, Smart Contract, and Rust Backend roles.
          Reach out via the form or directly at{' '}
          <a href={`mailto:${SOCIALS.email}`} className="text-accent-cyan hover:underline">
            {SOCIALS.email}
          </a>
          .
        </p>
      </motion.div>

      {/* Quick contact pills */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="flex flex-wrap justify-center gap-3 mb-10"
      >
        <a
          href={`mailto:${SOCIALS.email}`}
          className="flex items-center gap-2 border border-white/[0.08] bg-white/[0.03] text-slate-300 hover:border-accent-cyan/40 hover:text-accent-cyan px-4 py-2 rounded-full text-sm font-mono transition-all duration-200"
        >
          <HiOutlineMail size={14} /> {SOCIALS.email}
        </a>
        <a
          href={`tel:${PHONE}`}
          className="flex items-center gap-2 border border-white/[0.08] bg-white/[0.03] text-slate-300 hover:border-emerald-400/40 hover:text-emerald-400 px-4 py-2 rounded-full text-sm font-mono transition-all duration-200"
        >
          {PHONE}
        </a>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        method="POST"
        action="https://getform.io/f/4be1fb25-f235-4cb1-a6bd-3e742f86094c"
        className="glass rounded-2xl p-7 flex flex-col gap-4"
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            className="bg-white/[0.04] border border-white/[0.08] focus:border-accent-cyan/50 outline-none text-white placeholder-slate-600 px-4 py-2.5 rounded-lg transition-colors text-sm"
            type="text" placeholder="Name" name="name" required
          />
          <input
            className="bg-white/[0.04] border border-white/[0.08] focus:border-accent-cyan/50 outline-none text-white placeholder-slate-600 px-4 py-2.5 rounded-lg transition-colors text-sm"
            type="email" placeholder="Email" name="email" required
          />
        </div>
        <textarea
          className="bg-white/[0.04] border border-white/[0.08] focus:border-accent-cyan/50 outline-none text-white placeholder-slate-600 px-4 py-2.5 rounded-lg transition-colors resize-none text-sm"
          name="message" rows="5" placeholder="Tell me about the role or project…" required
        />
        <button className="bg-gradient-to-r from-accent-cyan to-accent text-white font-semibold px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-accent-cyan/20 transition-all duration-300 text-sm">
          Send Message
        </button>
      </motion.form>

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-center flex-wrap gap-3 mt-10"
      >
        {LINKS.map(({ href, icon, label, color }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className={`flex items-center gap-2 text-slate-500 border border-white/[0.07] bg-white/[0.02] px-3 py-2 rounded-lg text-xs font-mono transition-all duration-200 ${color}`}
          >
            {icon}
            <span className="hidden sm:inline">{label}</span>
          </a>
        ))}
      </motion.div>

      <p className="mt-10 text-slate-700 text-[11px] text-center font-mono tracking-wide">
        © {new Date().getFullYear()} Sivaji Gadidala · Built with React · Tailwind · Framer Motion
      </p>
    </div>
  </div>
)

export default Contact
