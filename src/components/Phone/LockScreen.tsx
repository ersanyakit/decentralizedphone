import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { useNavigation } from '@/contexts/NavigationContext';
import { ChevronUp } from 'lucide-react';

export function LockScreen() {
  const { theme, isDarkMode } = useTheme();
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
      className={`h-full flex flex-col ${theme.gradients.main}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Saat ve Tarih */}
      <div className="flex-1 flex flex-col items-center justify-center">
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

      {/* Kilit Açma Göstergesi */}
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

      {/* Bildirimler için yer tutucu */}
      <div className="absolute top-0 left-0 right-0 p-4">
        <div className={`${theme.glass} rounded-2xl p-4 backdrop-blur-lg
          ring-1 ${isDarkMode ? 'ring-white/10' : 'ring-black/5'}`}>
          <p className={`text-sm ${theme.text.secondary}`}>
            Bildirim yok
          </p>
        </div>
      </div>
    </motion.div>
  );
}