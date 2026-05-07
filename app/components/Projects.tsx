'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Layers, Shield, Brain, Globe, CheckCircle2, Clock } from 'lucide-react';
import GlitchText from './GlitchText';

type ProjectStatus = 'SHIPPED' | 'IN PROGRESS' | 'OPEN SOURCE';

const statusStyles: Record<ProjectStatus, { color: string; icon: typeof CheckCircle2 }> = {
  'SHIPPED':     { color: '#00ff88', icon: CheckCircle2 },
  'IN PROGRESS': { color: '#ff6600', icon: Clock },
  'OPEN SOURCE': { color: '#00ffff', icon: CheckCircle2 },
};

const projects = [
  {
    id: '01',
    name: 'TERMINAL.OS',
    description: 'A browser-based desktop environment built entirely in React. Draggable windows, a working terminal, app launcher, and file system, all rendered client-side. An experiment in pushing the browser further than it wants to go.',
    stack: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind'],
    icon: Globe,
    color: '#00ff88',
    status: 'SHIPPED' as ProjectStatus,
    github: '#',
    demo: '#',
  },
  {
    id: '02',
    name: 'SCRIBE',
    description: 'AI-powered content engine with tone controls, SEO scoring, and structured output templates. Built for speed. Generate a full draft, optimise it, and export in under 60 seconds.',
    stack: ['Next.js', 'OpenAI API', 'TypeScript', 'AI SDK'],
    icon: Brain,
    color: '#ff00ff',
    status: 'SHIPPED' as ProjectStatus,
    github: '#',
    demo: '#',
  },
  {
    id: '03',
    name: 'AUDITR',
    description: 'Automated code review tool that scans repos for security vulnerabilities, anti-patterns, and performance issues. Integrates with GitHub Actions for continuous analysis on every push.',
    stack: ['Python', 'FastAPI', 'GitHub API', 'PostgreSQL'],
    icon: Shield,
    color: '#00ffff',
    status: 'IN PROGRESS' as ProjectStatus,
    github: '#',
    demo: '#',
  },
  {
    id: '04',
    name: 'CLAUSR',
    description: 'AI-powered document intelligence for legal, tax, and on-chain compliance. Feed it a contract, a filing, or a smart contract. It flags risks, summarises obligations, and generates audit-ready reports.',
    stack: ['Next.js', 'TypeScript', 'AI SDK', 'PostgreSQL'],
    icon: Layers,
    color: '#00ff88',
    status: 'IN PROGRESS' as ProjectStatus,
    github: '#',
    demo: '#',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff00ff]/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <Layers className="w-6 h-6 text-[#ff00ff]" />
            <span className="text-sm text-[#ff00ff] tracking-widest">PROJECTS.DB</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <GlitchText
              text="BUILT_WITH_CODE"
              className="text-white"
              glitchInterval={4500}
            />
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            A selection of things I&apos;ve shipped. AI tools, dev utilities, and web experiments.
            All self-initiated, all built from scratch.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const statusStyle = statusStyles[project.status];
            const StatusIcon = statusStyle.icon;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div
                  className="holographic-card rounded-xl p-6 sm:p-8 h-full flex flex-col transition-all duration-500"
                  style={{ borderColor: `${project.color}30` }}
                >
                  {/* Project Number & Icon */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className="text-4xl font-bold opacity-20 group-hover:opacity-40 transition-opacity"
                      style={{ color: project.color }}
                    >
                      {project.id}
                    </div>
                    <div
                      className="p-3 rounded-lg transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${project.color}20` }}
                    >
                      <project.icon className="w-6 h-6" style={{ color: project.color }} />
                    </div>
                  </div>

                  {/* Project Info */}
                  <h3
                    className="text-2xl font-bold mb-3"
                    style={{ color: project.color }}
                  >
                    {project.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Stack + Status row */}
                  <div className="flex items-center justify-between gap-4 py-4 border-y border-gray-800 mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs rounded-full border"
                          style={{
                            borderColor: `${project.color}40`,
                            color: project.color,
                            backgroundColor: `${project.color}10`,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Status badge */}
                    <div
                      className="flex items-center gap-1.5 text-xs font-mono whitespace-nowrap px-2.5 py-1 rounded-full border shrink-0"
                      style={{
                        color: statusStyle.color,
                        borderColor: `${statusStyle.color}40`,
                        backgroundColor: `${statusStyle.color}10`,
                      }}
                    >
                      <StatusIcon className="w-3 h-3" />
                      {project.status}
                    </div>
                  </div>

                  {/* Links — commented out until projects are live
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      className="flex items-center gap-2 text-sm transition-colors"
                      style={{ color: project.color }}
                      whileHover={{ x: 5 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                  </div>
                  */}

                  {/* Hover Glow */}
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${project.color}20, transparent 70%)`,
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All CTA — commented out until GitHub is populated
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 cyber-button px-8 py-4 text-sm tracking-widest"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-4 h-4" />
            VIEW ALL PROJECTS
          </motion.a>
        </motion.div>
        */}
      </div>
    </section>
  );
}
