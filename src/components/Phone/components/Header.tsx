import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

interface HeaderProps {
  title: string;
  leftAction?: React.ReactNode;
  rightAction?: React.ReactNode;
  subtitle?: string;
}

export function Header({ title, subtitle, leftAction, rightAction }: HeaderProps) {
  const { theme, isDarkMode } = useTheme();

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`px-4 py-3 ${theme.glass} backdrop-blur-lg
        border-b ${isDarkMode ? 'border-white/5' : 'border-black/5'}
        rounded-t-[40px] mt-2 mx-0.5`}
    >
      <div className="flex items-center gap-3 pt-8">
        {/* Sol Aksiyon */}
        {leftAction && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            {leftAction}
          </motion.div>
        )}

        {/* Başlık Alanı */}
        <div className="flex-1 min-w-0">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={`text-lg font-semibold ${theme.text.primary} truncate`}
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className={`text-xs ${theme.text.secondary} truncate mt-0.5`}
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        {/* Sağ Aksiyon */}
        {rightAction && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            {rightAction}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
} 