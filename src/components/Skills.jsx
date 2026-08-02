import React from 'react'
import { motion } from 'framer-motion'
import { SKILL_GROUPS } from '../data/profile'

const Skills = () => (
  <div name="skills" className="w-full py-24">
    <div className="max-w-[1100px] mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="section-eyebrow">// tech stack</p>
        <h2 className="section-heading mt-2 mb-10">Skills</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {SKILL_GROUPS.map((group, idx) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.06 }}
            className="glass glass-hover rounded-xl p-6"
          >
            <h3 className="font-mono text-accent-cyan text-xs uppercase tracking-widest mb-4">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-sm text-slate-300 bg-white/[0.04] border border-white/[0.08] px-3 py-1.5 rounded-lg hover:border-accent-cyan/40 hover:text-white transition-colors duration-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
)

export default Skills
