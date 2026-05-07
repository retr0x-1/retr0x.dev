'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, ArrowRight, Clock, Tag } from 'lucide-react';
import GlitchText from './GlitchText';

const posts = [
  {
    id: '01',
    title: 'I built the tool I kept wishing existed',
    excerpt: 'Started as a personal workflow fix. Ended up as a full AI content engine with templates, tone controls, SEO scoring, and twelve content niches. Here\'s how it got out of hand.',
    date: 'APR 2026',
    readTime: '5 min',
    tags: ['AI', 'SaaS'],
    color: '#00ff88',
    href: '#',
  },
  {
    id: '02',
    title: 'Building a UI that feels like a real OS',
    excerpt: 'Draggable windows, a working terminal, a dock, a file system, all in the browser. The technical decisions behind making a React app feel like an operating system.',
    date: 'MAR 2026',
    readTime: '8 min',
    tags: ['React', 'UX'],
    color: '#ff00ff',
    href: '#',
  },
  {
    id: '03',
    title: 'The self-taught dev survival guide',
    excerpt: 'No bootcamp, no CS degree. The honest breakdown of how I learned to code, what actually worked, what was a waste of time, and why stubbornness is underrated.',
    date: 'FEB 2026',
    readTime: '12 min',
    tags: ['Learning', 'Career'],
    color: '#00ffff',
    href: '#',
  },
  {
    id: '04',
    title: 'Wiring a domain-specific AI assistant from scratch',
    excerpt: 'Not a chatbot wrapper. A purpose-built assistant with context injection, guardrails, and a fallback chain. What I learned building one for a non-technical client.',
    date: 'JAN 2026',
    readTime: '9 min',
    tags: ['AI', 'Dev Tools'],
    color: '#00ff88',
    href: '#',
  },
  {
    id: '05',
    title: 'OWASP Top 10 for solo developers',
    excerpt: 'Security doesn\'t have to be overwhelming. A no-nonsense walkthrough of the most common vulnerabilities and how to actually fix them in your projects without a security team.',
    date: 'DEC 2025',
    readTime: '10 min',
    tags: ['Security', 'Web'],
    color: '#ff00ff',
    href: '#',
  },
  {
    id: '06',
    title: 'Why I stopped using component libraries',
    excerpt: 'Tailwind, custom CSS, and a bit of patience. After years of fighting design systems, here\'s why I now build my own UI from scratch and why it\'s faster than you think.',
    date: 'NOV 2025',
    readTime: '5 min',
    tags: ['Design', 'CSS'],
    color: '#00ffff',
    href: '#',
  },
];

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00ffff]/50 to-transparent" />

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
            <BookOpen className="w-6 h-6 text-[#00ffff]" />
            <span className="text-sm text-[#00ffff] tracking-widest">BLOG.LOG</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <GlitchText
              text="THOUGHTS_COMPILED"
              className="text-white"
              glitchInterval={5500}
            />
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Writing about AI, web development, security, and the experience of building
            things without a roadmap.
          </p>
        </motion.div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.href}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative block"
            >
              <div
                className="holographic-card rounded-xl p-6 h-full flex flex-col transition-all duration-500"
                style={{ borderColor: `${post.color}30` }}
              >
                {/* Post Number */}
                <div
                  className="text-xs font-mono opacity-30 group-hover:opacity-60 transition-opacity mb-4"
                  style={{ color: post.color }}
                >
                  {post.id}
                </div>

                {/* Meta */}
                <div className="flex items-center gap-4 mb-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                  <span>{post.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-lg leading-snug mb-3 group-hover:text-current transition-colors"
                  style={{ color: undefined }}
                >
                  <span className="group-hover:text-white transition-colors">
                    {post.title}
                  </span>
                </h3>

                {/* Excerpt */}
                <p className="text-gray-500 text-sm leading-relaxed flex-grow mb-6">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1 px-2 py-1 text-xs rounded-full border"
                      style={{
                        borderColor: `${post.color}40`,
                        color: post.color,
                        backgroundColor: `${post.color}10`
                      }}
                    >
                      <Tag className="w-2.5 h-2.5" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More */}
                <div
                  className="flex items-center gap-2 text-sm font-medium transition-all duration-300 group-hover:gap-3"
                  style={{ color: post.color }}
                >
                  READ MORE
                  <ArrowRight className="w-4 h-4" />
                </div>

                {/* Hover Glow */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${post.color}15, transparent 70%)`
                  }}
                />
              </div>
            </motion.a>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 cyber-button cyber-button-cyan px-8 py-4 text-sm tracking-widest"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <BookOpen className="w-4 h-4" />
            ALL POSTS
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
