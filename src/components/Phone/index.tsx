import React from 'react';
import { Card } from '@nextui-org/react';
import { motion } from 'framer-motion';

interface PhoneProps {
  children: React.ReactNode;
}

export const Phone: React.FC<PhoneProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8">
      <motion.div 
        className="relative"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* Premium Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-[100px] animate-float" />
        
        {/* Reflective Surface */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-[60px] backdrop-blur-3xl" />
        
        {/* Phone Frame */}
        <Card className="relative w-[375px] h-[812px] bg-black rounded-[54px] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.3)] border border-white/10">
          {/* Glass Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl" />
          
          {/* Premium Notch Design */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[160px] h-[34px] bg-black rounded-b-[24px] z-50">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Dynamic Island Effect */}
              <motion.div 
                className="w-24 h-[22px] bg-black rounded-[20px] flex items-center justify-center"
                animate={{ width: ["96px", "100px", "96px"] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Screen Content with Premium Glass Effect */}
          <div className="h-full w-full pt-[34px] overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
            <div className="relative h-full w-full backdrop-blur-lg">
              {children}
            </div>
          </div>
          
          {/* Enhanced Home Indicator */}
          <motion.div 
            className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full"
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Premium Side Buttons */}
          <div className="absolute right-[-2px] top-[120px] w-[2px] h-16 bg-zinc-800 rounded-l" />
          <div className="absolute left-[-2px] top-[100px] w-[2px] h-10 bg-zinc-800 rounded-r" />
          <div className="absolute left-[-2px] top-[160px] w-[2px] h-10 bg-zinc-800 rounded-r" />
        </Card>
      </motion.div>
    </div>
  );
};