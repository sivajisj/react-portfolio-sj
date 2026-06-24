import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { FiDownload } from 'react-icons/fi'
import { Link } from 'react-scroll'
import { ROLES, RESUME_LINK } from '../data/profile'

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length)
    }, 2400)
    return () => clearInterval(interval)
  }, [])

  return (
    <div name="home" className="w-full min-h-screen flex items-center pt-[80px]">
      <div className="max-w-[1200px] w-full mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-2 mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
            </span>
            <p className="font-mono text-sm text-emerald-400 tracking-widest uppercase">
              Open to Blockchain Engineer / Rust Backend roles
            </p>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold text-white leading-tight">
            Hi, I'm <span className="gradient-text">Sivaji Gadidala</span>
          </h1>

          <div className="h-[44px] sm:h-[56px] mt-3 overflow-hidden">
            <motion.h2
              key={roleIndex}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="text-2xl sm:text-3xl font-semibold text-slate-200 font-mono"
            >
              {ROLES[roleIndex]}
            </motion.h2>
          </div>

          <p className="text-slate-400 py-6 max-w-[600px] leading-relaxed">
            I build across three pillars: <span className="text-white font-medium">Solana</span> (Anchor, SPL,
            PDAs, CPIs), <span className="text-white font-medium">Ethereum / EVM</span> (Solidity, Hardhat,
            OpenZeppelin), and <span className="text-white font-medium">Rust backend infrastructure</span> (Axum,
            Tokio, async microservices). Currently building DePIN protocols on Solana — bridging trustless
            on-chain systems with production-grade backend engineering.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="work" smooth={true} offset={-80} duration={500}>
              <button className="group bg-gradient-to-r from-accent-cyan to-accent text-white font-medium px-6 py-3 rounded-lg flex items-center gap-2 hover:shadow-lg hover:shadow-accent-cyan/20 transition-all duration-300">
                View Work
                <HiArrowNarrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
            <a href={RESUME_LINK} target="_blank" rel="noreferrer">
              <button className="border border-white/15 text-slate-200 font-medium px-6 py-3 rounded-lg flex items-center gap-2 hover:border-accent-cyan/40 hover:text-white transition-all duration-300">
                <FiDownload />
                Resume
              </button>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden sm:block"
        >
          <div className="glass rounded-2xl p-6 font-mono text-sm shadow-2xl shadow-black/40 animate-float">
            <div className="flex gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-red-400/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
              <span className="w-3 h-3 rounded-full bg-emerald-400/70" />
            </div>
            <pre className="text-slate-300 leading-relaxed whitespace-pre-wrap">
{`#[program]
pub mod sivaji_dev {
    pub fn build(ctx: Context<Init>) -> Result<()> {
        let dev = &mut ctx.accounts.profile;

        dev.stack = vec![
            "Solana", "Anchor", "Rust",
            "Solidity", "Axum", "Tokio",
        ];
        dev.focus = "DePIN protocols";
        dev.status = "open_to_work";

        Ok(())
    }
}`}
            </pre>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
