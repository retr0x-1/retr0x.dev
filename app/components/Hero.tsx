'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Brain, Code2, Shield } from 'lucide-react';
import GlitchText from './GlitchText';
import HeroGlitch from './HeroGlitch';

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f0f23]/50 to-[#0f0f23]" />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-[#00ff88]/20 rotate-45 animate-[rotate-slow_20s_linear_infinite]" />
      <div className="absolute bottom-40 right-20 w-24 h-24 border border-[#ff00ff]/20 rotate-12 animate-[rotate-slow_15s_linear_infinite_reverse]" />
      <div className="absolute top-1/3 right-10 w-2 h-2 bg-[#00ffff] rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 left-20 w-3 h-3 bg-[#ff00ff] rounded-full animate-pulse delay-500" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00ff88]/30 bg-[#00ff88]/5 backdrop-blur-sm">
            <span className="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse" />
            <span className="text-sm text-[#00ff88] tracking-widest">SYSTEM ONLINE</span>
          </div>
        </motion.div>

        {/* Main Title — per-character hacker decode */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
            <HeroGlitch />
          </h1>
        </motion.div>

        {/* Subtitle with Glitch */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-400 font-light tracking-wider">
            <GlitchText
              text="TECHNOLOGIST // SELF-TAUGHT DEV"
              className="text-[#00ffff]"
              glitchInterval={4000}
            />
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="max-w-2xl mx-auto text-gray-400 text-base sm:text-lg mb-12 leading-relaxed"
        >
          Building intelligent tools, clean interfaces, and secure systems.
          Turning ideas into working software, one commit at a time.
        </motion.p>

        {/* Feature Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-12"
        >
          {[
            { icon: Brain, label: 'AI BUILDER', color: '#00ff88' },
            { icon: Code2, label: 'WEB DESIGN', color: '#ff00ff' },
            { icon: Shield, label: 'SECURITY', color: '#00ffff' },
          ].map((feature, index) => (
            <motion.div
              key={feature.label}
              className="flex flex-col items-center gap-2 group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div
                className="p-3 rounded-lg border border-current transition-all duration-300 group-hover:scale-110"
                style={{ color: feature.color, borderColor: `${feature.color}40` }}
              >
                <feature.icon className="w-6 h-6" />
              </div>
              <span className="text-xs tracking-widest text-gray-500 group-hover:text-white transition-colors">
                {feature.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="cyber-button px-8 py-4 text-sm tracking-widest font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            VIEW PROJECTS
          </motion.a>
          <motion.a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="cyber-button cyber-button-pink px-8 py-4 text-sm tracking-widest font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            CONNECT
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mt-16 cursor-pointer flex justify-center"
          onClick={scrollToAbout}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-gray-500 hover:text-[#00ff88] transition-colors"
          >
            <span className="text-xs tracking-widest">SCROLL</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
