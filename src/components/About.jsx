import React from 'react'
import { motion } from 'framer-motion'

const PILLARS = [
  {
    icon: '◎',
    label: 'Solana',
    color: 'text-accent-cyan border-accent-cyan/20',
    bg: 'bg-accent-cyan/5',
    sub: 'Anchor · SPL Tokens · PDAs · CPIs · Token 2022',
  },
  {
    icon: '⬡',
    label: 'Ethereum / EVM',
    color: 'text-accent border-accent/20',
    bg: 'bg-accent/5',
    sub: 'Solidity · Hardhat · Foundry · OpenZeppelin v5',
  },
  {
    icon: '⚡',
    label: 'Rust Backend',
    color: 'text-emerald-400 border-emerald-400/20',
    bg: 'bg-emerald-400/5',
    sub: 'Axum · Tokio · SQLx · gRPC / tonic',
  },
  {
    icon: '◈',
    label: 'DePIN',
    color: 'text-accent-fuchsia border-accent-fuchsia/20',
    bg: 'bg-accent-fuchsia/5',
    sub: 'Trustless heartbeats · On-chain rewards · Collateral staking',
  },
]

const STATS = [
  { value: '1+', label: 'Year Professional', sub: 'building on-chain systems' },
  { value: '3', label: 'Chain Ecosystems', sub: 'Solana · EVM · Rust APIs' },
  { value: '8+', label: 'Projects Shipped', sub: 'deployed to testnets & mainnet' },
  { value: '∞', label: 'Open to Work', sub: 'Blockchain & Rust roles' },
]

const About = () => (
  <div name="about" className="w-full py-24">
    <div className="max-w-[1100px] mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p className="section-eyebrow">// who i am</p>
        <h2 className="section-heading mt-2">About</h2>
      </motion.div>

      {/* Bio + Stats row */}
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4 text-slate-400 leading-relaxed text-[15px]"
        >
          <p>
            I'm a <span className="text-white font-semibold">full-stack blockchain engineer</span> who ships
            production systems end-to-end — from on-chain programs to relayers to APIs. I work across three
            pillars: Solana, Ethereum/EVM, and high-throughput Rust backends.
          </p>
          <p>
            Currently at{' '}
            <span className="text-accent-cyan font-medium">Simreka Softwares Pvt. Ltd.</span>, building{' '}
            <span className="text-white font-medium">DePIN protocols on Solana</span> — trustless,
            cryptographically-verified infrastructure systems that eliminate self-reporting entirely.
          </p>
          <p>
            I'm actively looking for{' '}
            <span className="text-white font-medium">Blockchain Engineer</span>,{' '}
            <span className="text-white font-medium">Smart Contract Developer</span>, and{' '}
            <span className="text-white font-medium">Rust Backend Engineer</span> roles to build
            secure, performant on-chain systems at scale.
          </p>

          <div className="flex items-center gap-2 pt-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="font-mono text-xs text-emerald-400">Open to Blockchain & Rust opportunities</span>
          </div>
        </motion.div>

        {/* Stat cards */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 gap-3"
        >
          {STATS.map((s) => (
            <div key={s.label} className="glass rounded-xl p-4 flex flex-col justify-between">
              <span className="font-mono text-2xl font-bold gradient-text">{s.value}</span>
              <div className="mt-2">
                <p className="text-white text-xs font-semibold">{s.label}</p>
                <p className="font-mono text-[10px] text-slate-600 mt-0.5 leading-relaxed">{s.sub}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Pillars */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {PILLARS.map((p, idx) => (
          <motion.div
            key={p.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.07 }}
            className={`rounded-xl border ${p.color} ${p.bg} p-4 hover:bg-white/[0.04] transition-colors duration-200`}
          >
            <span className={`font-mono text-base ${p.color.split(' ')[0]}`}>{p.icon}</span>
            <p className={`font-bold text-sm mt-2 ${p.color.split(' ')[0]}`}>{p.label}</p>
            <p className="font-mono text-[11px] text-slate-500 mt-1 leading-relaxed">{p.sub}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
)

export default About
