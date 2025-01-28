import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SignalHigh, Wifi, Battery } from 'lucide-react';
import type { ReactElement } from 'react';

export const phoneTheme = {
  bg: {
    primary: '#0A0F2C',    // Ana arka plan
    secondary: '#1C1D3B',  // İkincil arka plan
    accent: '#252A4A'      // Vurgu arka planı
  },
  gradients: {
    main: 'bg-gradient-to-br from-[#0A0F2C] via-[#1C1D3B] to-[#252A4A]',
    overlay: 'bg-gradient-to-b from-black/10 via-transparent to-black/10',
    glass: 'bg-white/10 backdrop-blur-xl border border-white/20',
    glow: 'bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10'
  },
  effects: {
    glass: 'backdrop-blur-xl border border-white/20',
    hover: 'hover:bg-white/10 transition-all duration-300',
    pressable: 'active:scale-95 transition-transform',
    glow: 'shadow-lg shadow-black/20'
  },
  buttons: {
    primary: 'bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20',
    danger: 'bg-red-500/90 hover:bg-red-600/90',
    success: 'bg-green-500/90 hover:bg-green-600/90'
  },
  text: {
    primary: 'text-white',
    secondary: 'text-white/70',
    muted: 'text-white/40'
  }
};

export const appGradients = {
  blue: 'linear-gradient(135deg, #0EA5E9 0%, #2563EB 100%)',
  purple: 'linear-gradient(135deg, #A855F7 0%, #6366F1 100%)',
  pink: 'linear-gradient(135deg, #EC4899 0%, #D946EF 100%)',
  green: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
  orange: 'linear-gradient(135deg, #F59E0B 0%, #EA580C 100%)',
  red: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
  indigo: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
  teal: 'linear-gradient(135deg, #14B8A6 0%, #0D9488 100%)',
};

interface ActionButtonProps {
  icon: React.ReactNode;
  color?: 'primary' | 'danger' | 'success';
  onClick?: () => void;
  className?: string;
}

export const commonComponents = {
  StatusBar: () => {
    const [time, setTime] = useState(new Date());
    
    useEffect(() => {
      const timer = setInterval(() => setTime(new Date()), 1000);
      return () => clearInterval(timer);
    }, []);

    return (
      <div className="px-4 py-2 flex justify-between items-center text-white/95 bg-black/10">
        <span className="text-sm font-medium">
          {time.toLocaleTimeString('en-US', { 
            hour: 'numeric', 
            minute: '2-digit',
            hour12: true 
          })}
        </span>
        <div className="flex items-center gap-2.5">
          <SignalHigh className="w-4 h-4" />
          <Wifi className="w-4 h-4" />
          <Battery className="w-5 h-5" />
        </div>
      </div>
    );
  },

  ActionButton: ({ icon, color = 'primary', onClick, className = '' }: ActionButtonProps) => (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${phoneTheme.buttons[color]} ${phoneTheme.effects.glass} 
                 ${phoneTheme.effects.glow} rounded-2xl p-4 ${className}`}
    >
      {icon}
    </motion.button>
  ),
}; 