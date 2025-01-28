import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, X, ChevronLeft } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useNavigation } from '@/contexts/NavigationContext';
import { Header } from './components/Header';
import React from 'react';

export function DialScreen() {
  const { theme, isDarkMode } = useTheme();
  const { navigate, goBack } = useNavigation();
  const [number, setNumber] = useState('');

  const dialPad = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['*', '0', '#']
  ];

  const handleNumberClick = (num: string) => {
    if (number.length < 15) { // Maksimum uzunluk kontrolü
      setNumber(prev => {
        const newNumber = prev + num;
        // Telefon numarası formatı: +90 (5XX) XXX XX XX
        if (newNumber.length === 3) return newNumber + ' ';
        if (newNumber.length === 7) return newNumber + ' ';
        if (newNumber.length === 10) return newNumber + ' ';
        return newNumber;
      });
    }
  };

  const handleDelete = () => {
    setNumber(prev => {
      const newNumber = prev.trim();
      return newNumber.slice(0, -1);
    });
  };

  const handleCall = () => {
    if (number.trim()) {
      navigate('call', { number: number.trim() });
    }
  };

  return (
    <div className={`h-full flex flex-col ${theme.gradients.main}`}>
      <Header 
        title="Telefon"
        leftAction={
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={goBack}
            className={`p-2 rounded-xl ${theme.buttons.primary}`}
          >
            <ChevronLeft className={`w-5 h-5 ${theme.text.primary}`} />
          </motion.button>
        }
      />

      {/* Number Display */}
      <div className="px-6 py-8 text-center">
        <h2 className={`text-3xl font-medium tracking-wider ${number ? theme.text.primary : theme.text.secondary}`}>
          {number || 'Numara Girin'}
        </h2>
      </div>

      {/* Dial Pad */}
      <div className="flex-1 px-6 pb-6">
        <div className="grid grid-cols-3 gap-4">
          {dialPad.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              {row.map((num) => (
                <motion.button
                  key={num}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNumberClick(num)}
                  className={`aspect-square rounded-2xl ${theme.glass}
                    flex flex-col items-center justify-center gap-1
                    ring-1 ${isDarkMode ? 'ring-white/10' : 'ring-black/5'}
                    backdrop-blur-sm`}
                >
                  <span className={`text-2xl font-medium ${theme.text.primary}`}>
                    {num}
                  </span>
                  {num !== '*' && num !== '#' && (
                    <span className={`text-[10px] ${theme.text.secondary}`}>
                      {num === '0' ? '+' : 'ABC'}
                    </span>
                  )}
                </motion.button>
              ))}
            </React.Fragment>
          ))}
        </div>

        {/* Call Controls */}
        <div className="mt-6 flex justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCall}
            disabled={!number.trim()}
            className={`p-4 rounded-full 
              ${number.trim() ? 'bg-green-500 hover:bg-green-600' : theme.glass}
              ring-1 ${number.trim() ? 'ring-green-600/20' : isDarkMode ? 'ring-white/10' : 'ring-black/5'}
              backdrop-blur-sm transition-all duration-200`}
          >
            <Phone className={`w-6 h-6 ${number.trim() ? 'text-white' : theme.text.secondary}`} />
          </motion.button>

          {number && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDelete}
              className={`p-4 rounded-full ${theme.glass}
                ring-1 ${isDarkMode ? 'ring-white/10' : 'ring-black/5'}
                backdrop-blur-sm`}
            >
              <X className={`w-6 h-6 ${theme.text.secondary}`} />
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
} 