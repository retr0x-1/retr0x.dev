'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Brain, Globe, Shield, Coffee, Binary, Terminal } from 'lucide-react';
import GlitchText from './GlitchText';

const skills = [
  { name: 'React / Next.js', level: 92, color: '#00ff88' },
  { name: 'TypeScript / JavaScript', level: 90, color: '#ff00ff' },
  { name: 'Smart Contracts / Solidity', level: 80, color: '#00ffff' },
  { name: 'UI / Web Design', level: 96, color: '#00ff88' },
  { name: 'Security & Code Review', level: 94, color: '#ff00ff' },
  { name: 'LLM Integration', level: 87, color: '#00ffff' },
];

const stats = [
  { icon: Code2, value: '40+', label: 'PROJECTS ATTEMPTED', color: '#00ff88' },
  { icon: Brain, value: '15+', label: 'AI TOOLS BUILT', color: '#ff00ff' },
  { icon: Globe, value: '100%', label: 'SELF-TAUGHT', color: '#00ffff' },
  { icon: Coffee, value: '∞', label: 'COFFEES CONSUMED', color: '#00ff88' },
];

const experiences = [
  {
    role: 'CREATIVE TECHNOLOGIST',
    company: 'INDEPENDENT',
    description: 'Building AI-powered tools, web apps, and automation systems. Focused on clean UX and practical LLM integrations.',
  },
  {
    role: 'FREELANCE WEB DEVELOPER',
    company: 'VARIOUS CLIENTS',
    description: 'Designed and shipped full-stack web projects, from landing pages to internal dashboards and SaaS MVPs.',
  },
  {
    role: 'SELF-DIRECTED LEARNING',
    company: 'THE INTERNET',
    description: 'Taught myself to code through projects, docs, and obsession. No bootcamp, no degree. Just building things.',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00ff88]/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <Terminal className="w-6 h-6 text-[#00ff88]" />
            <span className="text-sm text-[#00ff88] tracking-widest">ABOUT.SYS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <GlitchText
              text="WHO_IS_RETR0X?"
              className="text-white"
              glitchInterval={5000}
            />
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            A self-taught creative technologist obsessed with building things that work.
            I design and ship AI tools, web experiences, and secure software.
            Learning everything in public, one project at a time.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="holographic-card p-6 rounded-lg text-center group cursor-pointer"
            >
              <div
                className="inline-flex p-3 rounded-lg mb-4 transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${stat.color}20` }}
              >
                <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
              </div>
              <div
                className="text-3xl sm:text-4xl font-bold mb-1"
                style={{ color: stat.color }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Binary className="w-5 h-5 text-[#ff00ff]" />
              <h3 className="text-xl font-bold tracking-wider">
                <span className="text-[#ff00ff]">SKILL</span>
                <span className="text-white">_MATRIX</span>
              </h3>
            </div>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="group"
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                    <span
                      className="text-sm font-mono"
                      style={{ color: skill.color }}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{
                        duration: 1,
                        delay: 0.6 + index * 0.1,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      className="h-full rounded-full relative"
                      style={{
                        backgroundColor: skill.color,
                        boxShadow: `0 0 10px ${skill.color}40`
                      }}
                    >
                      <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/30 animate-pulse" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Code2 className="w-5 h-5 text-[#00ffff]" />
              <h3 className="text-xl font-bold tracking-wider">
                <span className="text-[#00ffff]">EXPERIENCE</span>
                <span className="text-white">_LOG</span>
              </h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.15 }}
                  className="relative pl-6 border-l-2 border-gray-800 hover:border-[#00ff88] transition-colors group"
                >
                  <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-gray-800 group-hover:bg-[#00ff88] transition-colors" />

                  <div className="text-white font-semibold mb-1">{exp.role}</div>
                  <div className="text-sm text-[#ff00ff] mb-2">@{exp.company}</div>
                  <p className="text-sm text-gray-500 leading-relaxed">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
