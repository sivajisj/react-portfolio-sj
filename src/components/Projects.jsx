import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { PROJECTS } from '../data/profile'

const ACCENT_VARIANTS = [
  'from-accent-cyan/20 to-accent/20',
  'from-accent/20 to-accent-fuchsia/20',
  'from-accent-fuchsia/20 to-accent-cyan/20',
  'from-emerald-500/20 to-accent-cyan/20',
]

const BORDER_VARIANTS = [
  'border-accent-cyan/30',
  'border-accent/30',
  'border-accent-fuchsia/30',
  'border-emerald-500/30',
]

const DOT_VARIANTS = [
  'bg-accent-cyan',
  'bg-accent',
  'bg-accent-fuchsia',
  'bg-emerald-400',
]

const FeaturedCard = ({ project, idx }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: idx * 0.08 }}
    className={`relative group rounded-2xl border ${BORDER_VARIANTS[idx % 4]} bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-xl transition-all duration-300 overflow-hidden flex flex-col`}
  >
    {/* top gradient bar */}
    <div className={`h-1 w-full bg-gradient-to-r ${ACCENT_VARIANTS[idx % 4]}`} />

    <div className="p-6 sm:p-7 flex flex-col flex-grow">
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-lg font-bold text-white leading-snug">{project.title}</h3>
        <div className="flex gap-3 shrink-0 mt-0.5">
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="text-slate-500 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
          {(project.explorer || project.demo) && (
            <a
              href={project.explorer || project.demo}
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-accent-cyan transition-colors"
              aria-label={project.explorer ? 'Explorer' : 'Demo'}
            >
              <HiOutlineExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      <p className="text-sm text-slate-400 leading-relaxed flex-grow">{project.description}</p>

      {project.metrics && (
        <div className="grid grid-cols-2 gap-2 mt-5">
          {project.metrics.map((m, i) => (
            <div
              key={m}
              className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.06] rounded-lg px-3 py-2"
            >
              <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${DOT_VARIANTS[idx % 4]}`} />
              <span className="font-mono text-xs text-slate-300 leading-tight">{m}</span>
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-white/[0.05]">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-xs text-slate-400 bg-white/[0.04] border border-white/[0.07] px-2.5 py-0.5 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
)

const SmallCard = ({ project, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
    className="glass glass-hover rounded-xl p-5 flex flex-col h-full"
  >
    <div className="flex items-start justify-between gap-2 mb-2">
      <h3 className="text-sm font-semibold text-white leading-snug">{project.title}</h3>
      <a
        href={project.repo}
        target="_blank"
        rel="noreferrer"
        className="text-slate-500 hover:text-white transition-colors shrink-0 mt-0.5"
      >
        <FaGithub size={15} />
      </a>
    </div>
    <p className="text-xs text-slate-500 leading-relaxed flex-grow">{project.description}</p>
    <div className="flex flex-wrap gap-1.5 mt-3">
      {project.tags.slice(0, 4).map((tag) => (
        <span
          key={tag}
          className="font-mono text-[10px] text-slate-500 bg-white/[0.03] border border-white/[0.06] px-2 py-0.5 rounded-full"
        >
          {tag}
        </span>
      ))}
    </div>
    {project.explorer && (
      <a
        href={project.explorer}
        target="_blank"
        rel="noreferrer"
        className="mt-3 flex items-center gap-1 text-[11px] text-slate-500 hover:text-accent-cyan transition-colors font-mono"
      >
        <HiOutlineExternalLink size={12} /> View on Explorer
      </a>
    )}
  </motion.div>
)

const Projects = () => {
  const featured = PROJECTS.filter((p) => p.featured)
  const other = PROJECTS.filter((p) => !p.featured)

  return (
    <div name="work" className="w-full py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="section-eyebrow">// selected work</p>
          <h2 className="section-heading mt-2">Projects</h2>
          <p className="mt-3 text-sm text-slate-500 max-w-xl">
            Production deployments, on-chain programs, and backend services — each built to production standards.
          </p>
        </motion.div>

        {/* Featured 2×2 grid */}
        <div className="grid sm:grid-cols-2 gap-5 mb-16">
          {featured.map((p, i) => (
            <FeaturedCard key={p.title} project={p} idx={i} />
          ))}
        </div>

        {/* Other projects */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="font-mono text-xs text-slate-600 uppercase tracking-widest mb-5 flex items-center gap-3">
            More on-chain programs
            <span className="flex-1 h-px bg-white/[0.06]" />
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {other.map((p, i) => (
            <SmallCard key={p.title} project={p} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
