import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { PROJECTS } from '../data/profile'

const ProjectCard = ({ project, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
    className="glass glass-hover rounded-xl p-6 flex flex-col h-full"
  >
    <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
    <p className="text-sm text-slate-400 leading-relaxed flex-grow">{project.description}</p>
    <div className="flex flex-wrap gap-2 mt-4 mb-5">
      {project.tags.map((tag) => (
        <span
          key={tag}
          className="font-mono text-xs text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/20 px-2.5 py-1 rounded-md"
        >
          {tag}
        </span>
      ))}
    </div>
    <div className="flex gap-4 mt-auto pt-4 border-t border-white/[0.06]">
      <a
        href={project.repo}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-1.5 text-sm text-slate-300 hover:text-white transition-colors"
      >
        <FaGithub /> Code
      </a>
      {project.explorer && (
        <a
          href={project.explorer}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 text-sm text-slate-300 hover:text-white transition-colors"
        >
          <HiOutlineExternalLink /> Explorer
        </a>
      )}
    </div>
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
        >
          <p className="section-eyebrow">// selected work</p>
          <h2 className="section-heading mt-2 mb-10">Projects</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5 mb-12">
          {featured.map((project, idx) => (
            <ProjectCard key={project.title} project={project} delay={idx * 0.05} />
          ))}
        </div>

        <h3 className="font-mono text-sm text-slate-500 uppercase tracking-widest mb-6">On-Chain Programs & More</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {other.map((project, idx) => (
            <ProjectCard key={project.title} project={project} delay={idx * 0.05} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
