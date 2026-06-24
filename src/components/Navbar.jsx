import React, { useEffect, useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'
import { RESUME_LINK, SOCIALS } from '../data/profile'

const links = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'work', label: 'Projects' },
  { to: 'contact', label: 'Contact' },
]

export const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const handleClick = () => setNav(!nav)

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
      <div className="max-w-[1200px] mx-auto flex justify-between items-center h-[80px] px-6">
        <Link to="home" smooth={true} offset={50} duration={500} className="flex items-center gap-2 cursor-pointer">
          <span className="font-mono text-lg font-bold text-white">
            &lt;SJ<span className="text-accent-cyan">/</span>&gt;
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8 font-mono text-sm">
          {links.map((l) => (
            <li key={l.to} className="text-slate-300 hover:text-accent-cyan transition-colors duration-200">
              <Link to={l.to} smooth={true} offset={-80} duration={500}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a href={SOCIALS.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
            <FaGithub size={20} />
          </a>
          <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a
            href={RESUME_LINK}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-sm border border-accent-cyan/40 text-accent-cyan px-4 py-2 rounded-lg hover:bg-accent-cyan/10 transition-colors duration-200"
          >
            Resume
          </a>
        </div>

        <div onClick={handleClick} className="md:hidden z-10 text-white cursor-pointer">
          {!nav ? <FaBars size={22} /> : <FaTimes size={22} />}
        </div>

        <ul
          className={
            !nav
              ? 'hidden'
              : 'absolute top-0 left-0 w-full h-screen bg-base/95 backdrop-blur-xl flex flex-col justify-center items-center gap-2'
          }
        >
          {links.map((l) => (
            <li key={l.to} className="py-4 text-3xl font-mono text-slate-200">
              <Link onClick={handleClick} to={l.to} smooth={true} offset={-80} duration={500}>
                {l.label}
              </Link>
            </li>
          ))}
          <li className="flex gap-6 mt-6 text-slate-300">
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
