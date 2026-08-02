import React from 'react'
import { motion } from 'framer-motion'
import { EXPERIENCE } from '../data/profile'

const Experience = () => (
  <div name="experience" className="w-full py-24">
    <div className="max-w-[1100px] mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-eyebrow">// where i've worked</p>
        <h2 className="section-heading mt-2 mb-10">Experience</h2>
      </motion.div>

      <div className="relative border-l border-white/[0.08] pl-8 space-y-10">
        {EXPERIENCE.map((exp, idx) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="relative"
          >
            <span className="absolute -left-[2.35rem] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-accent-cyan bg-base" />
            <div className="glass glass-hover rounded-xl p-6">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                  <p className="text-accent-cyan font-mono text-sm">{exp.company}</p>
                </div>
                <span className="font-mono text-xs text-slate-500 bg-white/[0.04] border border-white/[0.08] px-3 py-1 rounded-full whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2 mt-3">
                {exp.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                    <span className="text-accent-cyan mt-1 shrink-0">▹</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
)

export default Experience
