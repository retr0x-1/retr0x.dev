'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Twitter, Github, Send, MessageSquare, MapPin } from 'lucide-react';
import GlitchText from './GlitchText';

const socialLinks = [
  {
    icon: Twitter,
    label: 'Twitter',
    handle: '@retr0x',
    href: 'https://twitter.com',
    color: '#00ffff'
  },
  {
    icon: Github,
    label: 'GitHub',
    handle: 'retr0x-dev',
    href: 'https://github.com',
    color: '#00ff88'
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00ffff]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00ff88]/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <MessageSquare className="w-6 h-6 text-[#00ffff]" />
            <span className="text-sm text-[#00ffff] tracking-widest">CONTACT.EXE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <GlitchText 
              text="INITIATE_CONTACT" 
              className="text-white"
              glitchInterval={3500}
            />
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Got a project, an idea, or just want to talk tech?
            I&apos;m always open to interesting work and conversations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm text-[#00ff88] tracking-wider flex items-center gap-2">
                  <span className="text-[#ff00ff]">&gt;</span> IDENTIFIER
                </label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  required
                  className="w-full bg-[#0a0a18] border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-[#00ff88] focus:outline-none focus:ring-1 focus:ring-[#00ff88] transition-all"
                  placeholder="Enter your name"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-[#00ff88] tracking-wider flex items-center gap-2">
                  <span className="text-[#ff00ff]">&gt;</span> COMMUNICATION_NODE
                </label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  required
                  className="w-full bg-[#0a0a18] border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-[#00ff88] focus:outline-none focus:ring-1 focus:ring-[#00ff88] transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-[#00ff88] tracking-wider flex items-center gap-2">
                  <span className="text-[#ff00ff]">&gt;</span> MESSAGE_PAYLOAD
                </label>
                <textarea
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full bg-[#0a0a18] border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-[#00ff88] focus:outline-none focus:ring-1 focus:ring-[#00ff88] transition-all resize-none"
                  placeholder="Describe your project or inquiry..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full cyber-button py-4 text-sm tracking-widest font-medium flex items-center justify-center gap-2 disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-[#00ff88] border-t-transparent rounded-full animate-spin" />
                    TRANSMITTING...
                  </>
                ) : submitted ? (
                  <>
                    <span className="text-[#00ff88]">MESSAGE_SENT ✓</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    TRANSMIT MESSAGE
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Status Card */}
            <div className="glass-panel rounded-xl p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="w-3 h-3 bg-[#00ff88] rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-3 h-3 bg-[#00ff88] rounded-full animate-ping opacity-50" />
                </div>
                <div>
                  <div className="text-white font-semibold">Available for Work</div>
                  <div className="text-sm text-gray-500">Response time: ~24 hours</div>
                </div>
              </div>

              <div className="space-y-4">
                <a 
                  href="mailto:hello@retr0x.dev" 
                  className="flex items-center gap-3 text-gray-400 hover:text-[#00ff88] transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-gray-800 group-hover:bg-[#00ff88]/20 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>hello@retr0x.dev</span>
                </a>

                <div className="flex items-center gap-3 text-gray-400">
                  <div className="p-2 rounded-lg bg-gray-800"
                  >
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>Remote / Web3</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-sm text-gray-500 tracking-wider mb-4">SOCIAL_NODES</h3>
              <div className="space-y-3">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 rounded-lg border border-gray-800 hover:border-current transition-all group"
                    style={{ color: link.color }}
                  >
                    <div 
                      className="p-2 rounded-lg bg-gray-800 group-hover:bg-current/20 transition-colors"
                    >
                      <link.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-grow">
                      <div className="text-white group-hover:text-current transition-colors">
                        {link.label}
                      </div>
                      <div className="text-sm opacity-60">{link.handle}</div>
                    </div>
                    <Send className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div className="glass-panel rounded-xl p-6">
              <h3 className="text-sm text-[#ff00ff] tracking-wider mb-4">SERVICES</h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {[
                  'AI Tool Development',
                  'Security Audits',
                  'Web Design',
                  'Code Review',
                  'LLM Integration',
                  'Consulting',
                ].map((service) => (
                  <div 
                    key={service}
                    className="flex items-center gap-2 text-gray-400"
                  >
                    <span className="text-[#00ff88]">&gt;</span>
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
