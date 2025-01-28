import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Video, Delete } from 'lucide-react';
import { phoneTheme } from '@/utils/phoneTheme';
import React from 'react';

export function DialScreen() {
  const [number, setNumber] = useState('');

  const handleNumberClick = (num: string) => {
    if (number.length < 10) {
      setNumber(prev => prev + num);
    }
  };

  const handleDelete = () => {
    setNumber(prev => prev.slice(0, -1));
  };

  const formatPhoneNumber = (num: string) => {
    if (num.length === 0) return '';
    
    const cleaned = num.replace(/\D/g, '');
    const parts = [];
    
    if (cleaned.length > 0) parts.push(cleaned.slice(0, 3));
    if (cleaned.length > 3) parts.push(cleaned.slice(3, 6));
    if (cleaned.length > 6) parts.push(cleaned.slice(6, 10));
    
    if (parts.length === 1) return `(${parts[0]}`;
    if (parts.length === 2) return `(${parts[0]}) ${parts[1]}`;
    if (parts.length === 3) return `(${parts[0]}) ${parts[1]}-${parts[2]}`;
    
    return num;
  };

  const dialPadButtons = [
    [
      { number: '1', letters: '' },
      { number: '2', letters: 'ABC' },
      { number: '3', letters: 'DEF' },
    ],
    [
      { number: '4', letters: 'GHI' },
      { number: '5', letters: 'JKL' },
      { number: '6', letters: 'MNO' },
    ],
    [
      { number: '7', letters: 'PQRS' },
      { number: '8', letters: 'TUV' },
      { number: '9', letters: 'WXYZ' },
    ],
    [
      { number: '*', letters: '' },
      { number: '0', letters: '+' },
      { number: '#', letters: '' },
    ],
  ];

  return (
    <div className={`h-full relative ${phoneTheme.gradients.main}`}>
      {/* Dekoratif arka plan */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      {/* Numara gösterimi */}
      <div className="pt-12 px-6 pb-8">
        <div className="relative text-center min-h-[60px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={number}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`text-4xl font-light tracking-wider ${number ? phoneTheme.text.primary : phoneTheme.text.secondary}`}
            >
              {number ? formatPhoneNumber(number) : 'Numara girin'}
            </motion.span>
          </AnimatePresence>
          
          {number && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={handleDelete}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-xl hover:bg-white/10"
            >
              <Delete className="w-6 h-6 text-white/60" />
            </motion.button>
          )}
        </div>
      </div>

      {/* Tuş takımı */}
      <div className="px-6">
        <div className="grid grid-cols-3 gap-x-4 gap-y-6">
          {dialPadButtons.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              {row.map((button) => (
                <motion.button
                  key={button.number}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNumberClick(button.number)}
                  className={`w-16 h-16 rounded-full ${phoneTheme.buttons.primary}
                    flex flex-col items-center justify-center group transition-all duration-200
                    hover:bg-white/15 active:bg-white/20`}
                >
                  <span className={`text-2xl font-light ${phoneTheme.text.primary}`}>
                    {button.number}
                  </span>
                  {button.letters && (
                    <span className={`text-[10px] mt-0.5 ${phoneTheme.text.secondary}`}>
                      {button.letters}
                    </span>
                  )}
                </motion.button>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Arama butonları */}
      <div className="absolute bottom-8 left-0 right-0">
        <div className="flex justify-center items-center gap-6">
          <motion.button
            whileTap={{ scale: 0.95 }}
            disabled={!number}
            className={`w-16 h-16 rounded-full flex items-center justify-center
              ${number ? phoneTheme.buttons.success : 'bg-white/10'}
              transition-colors duration-200`}
          >
            <Phone className="w-6 h-6 text-white" />
          </motion.button>
          
          <motion.button
            whileTap={{ scale: 0.95 }}
            disabled={!number}
            className={`w-16 h-16 rounded-full ${phoneTheme.buttons.primary}
              flex items-center justify-center hover:bg-white/15 active:bg-white/20
              transition-all duration-200 ${!number && 'opacity-50'}`}
          >
            <Video className="w-6 h-6 text-white" />
          </motion.button>
        </div>
      </div>
    </div>
  );
} 