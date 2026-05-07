'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchInterval?: number;
}

export default function GlitchText({ 
  text, 
  className = '', 
  glitchInterval = 3000 
}: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false);
  const [displayText, setDisplayText] = useState(text);
  const chars = '0123456789@#$%^&*!?><[]{}|/\\~';

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      
      let iterations = 0;
      const maxIterations = 8;
      
      const glitchInterval = setInterval(() => {
        setDisplayText(
          text
            .split('')
            .map((char, index) => {
              if (char === ' ') return ' ';
              if (index < iterations) return text[index];
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('')
        );
        
        iterations += 1 / 2;
        
        if (iterations >= maxIterations) {
          clearInterval(glitchInterval);
          setDisplayText(text);
          setTimeout(() => setIsGlitching(false), 200);
        }
      }, 50);
    }, glitchInterval);

    return () => clearInterval(interval);
  }, [text, glitchInterval]);

  return (
    <motion.span
      className={`relative inline-block ${className}`}
      animate={isGlitching ? {
        x: [-2, 2, -2, 2, 0],
        skewX: [-2, 2, -2, 2, 0],
      } : {}}
      transition={{ duration: 0.2 }}
    >
      <span className="relative z-10">{displayText}</span>
      {isGlitching && (
        <>
          <span 
            className="absolute top-0 left-0 text-[#ff00ff] opacity-70 z-0"
            style={{ clipPath: 'inset(0 0 50% 0)', transform: 'translate(-2px, -2px)' }}
          >
            {displayText}
          </span>
          <span 
            className="absolute top-0 left-0 text-[#00ffff] opacity-70 z-0"
            style={{ clipPath: 'inset(50% 0 0 0)', transform: 'translate(2px, 2px)' }}
          >
            {displayText}
          </span>
        </>
      )}
    </motion.span>
  );
}
