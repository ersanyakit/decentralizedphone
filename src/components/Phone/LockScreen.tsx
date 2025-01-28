import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronUp, Sun, Moon, Bell } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useNavigation } from '@/contexts/NavigationContext';

export function LockScreen() {
  const { theme, isDarkMode, toggleTheme } = useTheme();
  const { navigate } = useNavigation();
  const [time, setTime] = useState(new Date());
  const [isUnlocking, setIsUnlocking] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleUnlock = () => {
    setIsUnlocking(true);
    setTimeout(() => {
      navigate('home');
    }, 300);
  };

  return (
    <motion.div 
      className={`h-full flex flex-col relative ${theme.gradients.main}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Üst Bar */}
      <div className="pt-14 px-4">
        <div className="flex justify-between items-stretch gap-3">
          {/* Bildirimler */}
          <div className={`flex-1 ${theme.glass} rounded-2xl backdrop-blur-lg
            ring-1 ${isDarkMode ? 'ring-white/10' : 'ring-black/5'}`}>
            <div className="p-3 flex items-center gap-2">
              <Bell className={`w-4 h-4 ${theme.text.secondary}`} />
              <p className={`text-xs ${theme.text.secondary} truncate`}>
                Bildirim yok
              </p>
            </div>
          </div>

          {/* Tema Değiştirici */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className={`p-3 rounded-2xl ${theme.glass} backdrop-blur-lg
              ring-1 ${isDarkMode ? 'ring-white/10' : 'ring-black/5'}
              transition-all duration-200
              hover:${isDarkMode ? 'bg-white/10' : 'bg-black/5'}`}
          >
            {isDarkMode ? (
              <Sun className={`w-4 h-4 ${theme.text.primary}`} />
            ) : (
              <Moon className={`w-4 h-4 ${theme.text.primary}`} />
            )}
          </motion.button>
        </div>
      </div>

      {/* Saat ve Tarih */}
      <div className="flex-1 flex flex-col items-center justify-center -mt-20">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <h1 className={`text-6xl font-light ${theme.text.primary}`}>
            {time.toLocaleTimeString('tr-TR', { 
              hour: '2-digit', 
              minute: '2-digit',
              hour12: false 
            })}
          </h1>
          <p className={`mt-2 text-lg ${theme.text.secondary}`}>
            {time.toLocaleDateString('tr-TR', { 
              weekday: 'long', 
              day: 'numeric', 
              month: 'long' 
            })}
          </p>
        </motion.div>
      </div>

      {/* Kilit Açma */}
      <motion.div
        className="pb-16 flex flex-col items-center gap-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            ease: "easeInOut"
          }}
        >
          <ChevronUp className={`w-6 h-6 ${theme.text.secondary}`} />
        </motion.div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleUnlock}
          className={`px-8 py-3 rounded-2xl ${theme.glass}
            backdrop-blur-lg
            ring-1 ${isDarkMode ? 'ring-white/10' : 'ring-black/5'}
            transition-all duration-300
            ${isUnlocking ? 'bg-blue-500 ring-blue-500/20' : ''}`}
        >
          <span className={`text-sm font-medium
            ${isUnlocking ? 'text-white' : theme.text.primary}`}>
            Kilidi Aç
          </span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}