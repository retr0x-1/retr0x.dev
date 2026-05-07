'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';

const navItems = [
  { label: 'HOME', href: '#hero' },
  { label: 'ABOUT', href: '#about' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'BLOG', href: '#blog' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-[#0f0f23]/90 backdrop-blur-xl border-b border-[#00ff88]/20' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="#hero"
              onClick={(e) => { e.preventDefault(); scrollToSection('#hero'); }}
              className="flex items-center gap-2 group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <Terminal className="w-6 h-6 text-[#00ff88]" />
                <div className="absolute inset-0 bg-[#00ff88] blur-lg opacity-50 group-hover:opacity-80 transition-opacity" />
              </div>
              <span className="text-xl font-bold tracking-wider">
                <span className="text-[#00ff88]">retr</span>
                <span className="text-[#ff00ff]">0</span>
                <span className="text-[#00ffff]">x</span>
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                  className="relative text-sm tracking-widest text-gray-400 hover:text-[#00ff88] transition-colors duration-300 cursor-pointer group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00ff88] to-[#ff00ff] group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-[#00ff88] hover:text-[#ff00ff] transition-colors"
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-[#0f0f23]/95 backdrop-blur-xl" />
            <div className="relative flex flex-col items-center justify-center h-full gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                  className="text-2xl tracking-widest text-[#00ff88] hover:text-[#ff00ff] transition-colors cursor-pointer"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, x: 10 }}
                >
                  <span className="text-[#ff00ff]/50">0{index + 1}.</span> {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
