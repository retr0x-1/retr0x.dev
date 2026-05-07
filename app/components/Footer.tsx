'use client';

import { motion } from 'framer-motion';
import { Terminal, Github, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-gray-800">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <Terminal className="w-5 h-5 text-[#00ff88]" />
            <span className="text-lg font-bold tracking-wider">
              <span className="text-[#00ff88]">retr</span>
              <span className="text-[#ff00ff]">0</span>
              <span className="text-[#00ffff]">x</span>
            </span>
          </motion.div>

          {/* Copyright */}
          <div className="text-sm text-gray-500 flex items-center gap-2">
            © {currentYear} retr0x.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: 'https://github.com', label: 'GitHub' },
              { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-gray-500 hover:text-[#00ff88] hover:bg-[#00ff88]/10 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
            <div className="flex items-center gap-4">
              <span>SYSTEM STATUS: <span className="text-[#00ff88]">ONLINE</span></span>
              <span className="hidden sm:inline">|</span>
              <span>UPTIME: 99.99%</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-[#00ff88] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#00ff88] transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
