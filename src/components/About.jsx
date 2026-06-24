import React from 'react'
import { motion } from 'framer-motion'

const stats = [
  { label: 'Blockchain Ecosystems', value: 'Solana · EVM' },
  { label: 'Backend Language', value: 'Rust' },
  { label: 'Current Focus', value: 'DePIN on Solana' },
  { label: 'Open To', value: 'Blockchain / Rust roles' },
]

const About = () => {
  return (
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
              I'm a <span className="text-white font-medium">full-stack blockchain engineer</span> specializing
              in three pillars: <span className="text-accent-cyan">Solana</span> (Anchor, SPL, PDAs, CPIs),{' '}
              <span className="text-accent-cyan">Ethereum / EVM</span> (Solidity, Hardhat, OpenZeppelin), and{' '}
              <span className="text-accent-cyan">Rust backend infrastructure</span> (Axum, Tokio, async
              microservices).
            </p>
            <p>
              I'm currently working at <span className="text-white font-medium">Simreka Softwares Pvt. Ltd.</span>,
              while building <span className="text-white font-medium">DePIN (decentralized physical
              infrastructure)</span> protocols on Solana — focused on trustless uptime verification systems
              that rely on cryptographic on-chain proofs instead of self-reporting.
            </p>
            <p>
              On the smart contract side, I design and ship voting systems, token bridges, and lending
              protocols with proper access control and liquidation logic. On the backend side, I write
              production-grade async Rust services for transaction queuing, multi-chain status tracking, and
              gRPC-based microservices.
            </p>
            <p>
              I'm actively looking for <span className="text-white font-medium">Blockchain Engineer</span>,{' '}
              <span className="text-white font-medium">Rust Backend</span>, and{' '}
              <span className="text-white font-medium">Smart Contract</span> opportunities where I can ship
              secure, performant on-chain systems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((s) => (
              <div key={s.label} className="glass glass-hover rounded-xl p-5">
                <p className="text-lg font-bold text-white">{s.value}</p>
                <p className="font-mono text-xs text-slate-500 uppercase tracking-wide mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About
