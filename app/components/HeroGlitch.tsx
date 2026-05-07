'use client';

import { useState, useEffect, useCallback } from 'react';

const CHARS = '0123456789@#$%^&*!?><[]{}|/\\~';
const COLORS = ['#00ff88', '#ff00ff', '#00ffff', '#ff6600', '#ff0055'];
const TEXT = 'retr0x';

interface CharState {
  display: string;
  color: string;
  resolved: boolean;
}

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

function randomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

function buildScrambled(): CharState[] {
  return TEXT.split('').map(() => ({
    display: randomChar(),
    color: randomColor(),
    resolved: false,
  }));
}

function buildResolved(): CharState[] {
  return TEXT.split('').map((ch) => ({
    display: ch,
    color: '#ffffff',
    resolved: true,
  }));
}

export default function HeroGlitch() {
  const [chars, setChars] = useState<CharState[]>(buildResolved);

  const runGlitch = useCallback(() => {
    // Phase 1: scramble all characters
    setChars(buildScrambled());

    let tick = 0;
    const totalTicks = 15; // how long the scramble phase lasts
    const resolveStart = 6; // tick at which letters start resolving one by one

    const interval = setInterval(() => {
      tick++;

      setChars((prev) => {
        return prev.map((ch, i) => {
          // Once resolved, stay resolved
          if (ch.resolved) return ch;

          // Resolve letter i after (resolveStart + i * 1.5) ticks
          const resolveAt = resolveStart + i * 1.5;
          if (tick >= resolveAt) {
            return { display: TEXT[i], color: '#ffffff', resolved: true };
          }

          // Still scrambling — cycle color and char
          return { display: randomChar(), color: randomColor(), resolved: false };
        });
      });

      if (tick >= totalTicks) {
        clearInterval(interval);
        // Ensure fully resolved
        setChars(buildResolved());
      }
    }, 40);
  }, []);

  useEffect(() => {
    // Small delay on mount so it fires after the page loads
    const initial = setTimeout(runGlitch, 800);

    // Repeat every 4 seconds
    const loop = setInterval(runGlitch, 4000);

    return () => {
      clearTimeout(initial);
      clearInterval(loop);
    };
  }, [runGlitch]);

  return (
    <span className="inline-flex tracking-tighter font-bold">
      {chars.map((ch, i) => (
        <span
          key={i}
          className="transition-colors duration-100"
          style={{
            color: ch.color,
            textShadow: ch.resolved
              ? 'none'
              : `0 0 12px ${ch.color}, 0 0 24px ${ch.color}80`,
          }}
        >
          {ch.display}
        </span>
      ))}
    </span>
  );
}
