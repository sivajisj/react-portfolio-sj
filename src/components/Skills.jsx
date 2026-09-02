import React from 'react'
import { motion } from 'framer-motion'
import { SKILL_GROUPS } from '../data/profile'

const GROUP_ICONS = ['◎', '⬡', '⚡', '◈', '⬢', '▣']
const GROUP_COLORS = [
  'text-accent-cyan border-accent-cyan/20 bg-accent-cyan/5',
  'text-accent border-accent/20 bg-accent/5',
  'text-emerald-400 border-emerald-400/20 bg-emerald-400/5',
  'text-accent-fuchsia border-accent-fuchsia/20 bg-accent-fuchsia/5',
  'text-blue-400 border-blue-400/20 bg-blue-400/5',
  'text-slate-300 border-slate-600/40 bg-white/[0.02]',
]

const Skills = () => (
  <div name="skills" className="w-full py-24">
    <div className="max-w-[1100px] mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p className="section-eyebrow">// tech stack</p>
        <h2 className="section-heading mt-2">Skills</h2>
        <p className="mt-3 text-sm text-slate-500 max-w-lg">
          Tools and technologies I use to build reliable, production-ready blockchain systems.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {SKILL_GROUPS.map((group, idx) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.07 }}
            className="group relative glass glass-hover rounded-2xl p-5 overflow-hidden"
          >
            {/* subtle corner glow */}
            <div className={`absolute -top-6 -right-6 w-20 h-20 rounded-full blur-2xl opacity-30 ${GROUP_COLORS[idx].split(' ')[2].replace('bg-', 'bg-')}`} />

            <div className="flex items-center gap-2.5 mb-4">
              <span className={`font-mono text-base ${GROUP_COLORS[idx].split(' ')[0]}`}>
                {GROUP_ICONS[idx]}
              </span>
              <h3 className={`font-mono text-xs uppercase tracking-widest ${GROUP_COLORS[idx].split(' ')[0]}`}>
                {group.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className={`text-xs font-medium border px-2.5 py-1 rounded-lg transition-all duration-200 group-hover:border-opacity-60 ${GROUP_COLORS[idx]}`}
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
