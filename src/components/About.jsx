import React from 'react'
import { motion } from 'framer-motion'

const pillars = [
  { label: 'Solana', sub: 'Anchor · SPL · PDAs · CPIs · Token 2022' },
  { label: 'Ethereum / EVM', sub: 'Solidity · Hardhat · OpenZeppelin v5' },
  { label: 'Rust Backend', sub: 'Axum · Tokio · SQLx · gRPC' },
  { label: 'DePIN', sub: 'On-chain heartbeats · trustless rewards' },
]

const About = () => (
  <div name="about" className="w-full py-24">
    <div className="max-w-[1100px] mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-eyebrow">// who i am</p>
        <h2 className="section-heading mt-2 mb-10">About</h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4 text-slate-400 leading-relaxed"
        >
          <p>
            I'm a <span className="text-white font-medium">full-stack blockchain engineer</span> shipping
            production systems across three pillars: Solana on-chain programs, Ethereum/EVM smart contracts,
            and high-throughput Rust backend APIs. I build complete decentralised systems end-to-end — from
            the on-chain program to the relayer to the frontend.
          </p>
          <p>
            Currently at{' '}
            <span className="text-accent-cyan font-medium">Simreka Softwares Pvt. Ltd.</span>, expanding into{' '}
            <span className="text-white font-medium">DePIN (Decentralised Physical Infrastructure)</span>{' '}
            protocols on Solana — trustless, cryptographically-verified uptime tracking systems that eliminate
            self-reporting entirely.
          </p>
          <p>
            I'm actively looking for <span className="text-white font-medium">Blockchain Engineer</span>,{' '}
            <span className="text-white font-medium">Smart Contract Developer</span>, and{' '}
            <span className="text-white font-medium">Rust Backend Engineer</span> opportunities to ship secure,
            performant on-chain systems at scale.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 gap-4"
        >
          {pillars.map((p) => (
            <div key={p.label} className="glass glass-hover rounded-xl p-5">
              <p className="font-bold text-white">{p.label}</p>
              <p className="font-mono text-xs text-slate-500 mt-1 leading-relaxed">{p.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </div>
)

export default About
