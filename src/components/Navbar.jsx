import React, { useEffect, useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'
import { RESUME_LINK, SOCIALS } from '../data/profile'

const NAV_LINKS = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'experience', label: 'Experience' },
  { to: 'skills', label: 'Skills' },
  { to: 'work', label: 'Projects' },
  { to: 'contact', label: 'Contact' },
]

export const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-base/80 backdrop-blur-xl border-b border-white/[0.08]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex justify-between items-center h-[76px] px-6">
        <Link to="home" smooth duration={500} className="cursor-pointer font-mono text-lg font-bold text-white">
          &lt;SJ<span className="text-accent-cyan">/</span>&gt;
        </Link>

        <ul className="hidden md:flex items-center gap-6 font-mono text-sm">
          {NAV_LINKS.map((l) => (
            <li key={l.to} className="text-slate-400 hover:text-accent-cyan transition-colors duration-200 px-0">
              <Link to={l.to} smooth offset={-76} duration={500}>{l.label}</Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a href={SOCIALS.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors"><FaGithub size={19} /></a>
          <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors"><FaLinkedin size={19} /></a>
          <a
            href={RESUME_LINK}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-sm border border-accent-cyan/40 text-accent-cyan px-4 py-1.5 rounded-lg hover:bg-accent-cyan/10 transition-colors duration-200"
          >
            Resume
          </a>
        </div>

        <div onClick={() => setNav(!nav)} className="md:hidden z-10 text-white cursor-pointer">
          {nav ? <FaTimes size={22} /> : <FaBars size={22} />}
        </div>

        <ul className={nav
          ? 'absolute top-0 left-0 w-full h-screen bg-base/95 backdrop-blur-xl flex flex-col justify-center items-center gap-2'
          : 'hidden'
        }>
          {NAV_LINKS.map((l) => (
            <li key={l.to} className="py-3 text-3xl font-mono text-slate-200 px-0">
              <Link onClick={() => setNav(false)} to={l.to} smooth offset={-76} duration={500}>{l.label}</Link>
            </li>
          ))}
          <li className="flex gap-6 mt-6 text-slate-300 px-0">
            <a href={SOCIALS.github} target="_blank" rel="noreferrer"><FaGithub size={26} /></a>
            <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer"><FaLinkedin size={26} /></a>
            <a href={SOCIALS.twitter} target="_blank" rel="noreferrer"><FaTwitter size={26} /></a>
            <a href={`mailto:${SOCIALS.email}`}><HiOutlineMail size={26} /></a>
            <a href={RESUME_LINK} target="_blank" rel="noreferrer"><BsFillPersonLinesFill size={26} /></a>
          </li>
        </ul>
      </div>
    </div>
  )
}
