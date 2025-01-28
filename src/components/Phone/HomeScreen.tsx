import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageSquare, Camera, Chrome, Calendar, Music2, 
         Settings, Image, Map, Cloud, Calculator, Mail, Users } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useNavigation } from '@/contexts/NavigationContext';

interface AppIconProps {
  icon: React.ReactNode;
  label: string;
  gradient: string;
  notification?: number;
  onClick?: () => void;
}

// Yeni premium renk paleti
const theme = {
  bg: {
    primary: '#0A0F2C',    // Koyu lacivert
    secondary: '#1C1D3B',  // Orta lacivert
    accent: '#252A4A'      // Açık lacivert
  },
  gradient: {
    primary: 'linear-gradient(135deg, #0A0F2C 0%, #252A4A 100%)',
    overlay: 'linear-gradient(180deg, rgba(10, 15, 44, 0.8) 0%, rgba(37, 42, 74, 0.8) 100%)',
  },
  glass: 'glass',
  text: 'text-white/90'
};

// App ikonları için yeni gradyanlar
const gradients = {
  blue: 'linear-gradient(135deg, #0EA5E9 0%, #2563EB 100%)',
  purple: 'linear-gradient(135deg, #A855F7 0%, #6366F1 100%)',
  pink: 'linear-gradient(135deg, #EC4899 0%, #D946EF 100%)',
  green: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
  orange: 'linear-gradient(135deg, #F59E0B 0%, #EA580C 100%)',
  red: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
  indigo: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
  teal: 'linear-gradient(135deg, #14B8A6 0%, #0D9488 100%)',
};

const AppIcon: React.FC<AppIconProps> = ({ icon, label, gradient, notification, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    onClick={onClick}
    className="relative group"
  >
    <div className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"
         style={{ background: gradient }} />
    <div className="relative flex flex-col items-center">
      <div className="relative">
        <div className="w-[4.2rem] h-[4.2rem] rounded-2xl relative overflow-hidden backdrop-blur-lg
                      border border-white/20 group-hover:border-white/30 transition-all duration-300
                      shadow-lg shadow-black/20">
          <div className="absolute inset-0 opacity-95" style={{ background: gradient }} />
          <div className="absolute inset-0 flex items-center justify-center">
            {icon}
          </div>
        </div>
        {notification && (
          <div className="absolute -top-2 -right-2 min-w-[1.25rem] h-5 px-1 bg-red-500 rounded-full 
                        flex items-center justify-center border-2 border-[#0A0F2C] shadow-lg">
            <span className="text-[10px] font-bold text-white leading-none">
              {notification}
            </span>
          </div>
        )}
      </div>
      <span className="mt-2 text-xs font-medium text-white/90 group-hover:text-white 
                     tracking-wide transition-colors duration-200">
        {label}
      </span>
    </div>
  </motion.button>
);

const dockApps = [
  { 
    icon: <Phone className="w-6 h-6 text-white" />, 
    label: 'Phone',
    gradient: 'linear-gradient(135deg, #00F5A0 0%, #00D9F5 100%)'
  },
  { 
    icon: <MessageSquare className="w-6 h-6 text-white" />, 
    label: 'Messages',
    gradient: 'linear-gradient(135deg, #00C6FB 0%, #005BEA 100%)'
  },
  { 
    icon: <Camera className="w-6 h-6 text-white" />, 
    label: 'Camera',
    gradient: 'linear-gradient(135deg, #F6D242 0%, #FF52E5 100%)'
  },
  { 
    icon: <Settings className="w-6 h-6 text-white" />, 
    label: 'Settings',
    gradient: 'linear-gradient(135deg, #4E65FF 0%, #92EFFD 100%)'
  },
];

export function HomeScreen() {
  const { theme, isDarkMode } = useTheme();
  const { navigate } = useNavigation();

  const apps = [
    { 
      icon: <Phone className="w-6 h-6" />, 
      label: 'Phone', 
      onClick: () => navigate('dial'),
      gradient: 'from-emerald-400 to-green-500 dark:from-emerald-500 dark:to-green-600'
    },
    { 
      icon: <MessageSquare className="w-6 h-6" />, 
      label: 'Messages',
      onClick: () => navigate('messages'),
      gradient: 'from-blue-400 to-indigo-500 dark:from-blue-500 dark:to-indigo-600'
    },
    { 
      icon: <Users className="w-6 h-6" />, 
      label: 'Contacts',
      onClick: () => navigate('contacts'),
      gradient: 'from-violet-400 to-purple-500 dark:from-violet-500 dark:to-purple-600'
    },
    { 
      icon: <Camera className="w-6 h-6" />, 
      label: 'Camera',
      onClick: () => {},
      gradient: 'from-orange-400 to-red-500 dark:from-orange-500 dark:to-red-600'
    },
    { 
      icon: <Chrome className="w-6 h-6" />, 
      label: 'Browser',
      onClick: () => {},
      gradient: 'from-orange-400 to-red-500 dark:from-orange-500 dark:to-red-600'
    },
    { 
      icon: <Calendar className="w-6 h-6" />, 
      label: 'Calendar',
      onClick: () => {},
      gradient: 'from-pink-400 to-rose-500 dark:from-pink-500 dark:to-rose-600'
    },
    { 
      icon: <Music2 className="w-6 h-6" />, 
      label: 'Music',
      onClick: () => {},
      gradient: 'from-fuchsia-400 to-pink-500 dark:from-fuchsia-500 dark:to-pink-600'
    },
    { 
      icon: <Mail className="w-6 h-6" />, 
      label: 'Mail',
      onClick: () => {},
      gradient: 'from-cyan-400 to-sky-500 dark:from-cyan-500 dark:to-sky-600'
    },
    { 
      icon: <Map className="w-6 h-6" />, 
      label: 'Maps',
      onClick: () => {},
      gradient: 'from-lime-400 to-green-500 dark:from-lime-500 dark:to-green-600'
    },
    { 
      icon: <Cloud className="w-6 h-6" />, 
      label: 'Weather',
      onClick: () => {},
      gradient: 'from-sky-400 to-blue-500 dark:from-sky-500 dark:to-blue-600'
    },
    { 
      icon: <Calculator className="w-6 h-6" />, 
      label: 'Calculator',
      onClick: () => {},
      gradient: 'from-gray-400 to-slate-500 dark:from-gray-500 dark:to-slate-600'
    },
    { 
      icon: <Image className="w-6 h-6" />, 
      label: 'Photos',
      onClick: () => {},
      gradient: 'from-yellow-400 to-orange-500 dark:from-yellow-500 dark:to-orange-600'
    },
    { 
      icon: <Settings className="w-6 h-6" />, 
      label: 'Settings',
      onClick: () => {},
      gradient: 'from-slate-400 to-gray-500 dark:from-slate-500 dark:to-gray-600'
    }
  ];

  const dockApps = apps.slice(0, 4);

  return (
    <div className={`h-full relative ${theme.gradients.main}`}>
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full 
          bg-gradient-to-br from-purple-500/20 to-pink-500/20 dark:from-purple-500/10 dark:to-pink-500/10 
          blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full 
          bg-gradient-to-br from-blue-500/20 to-cyan-500/20 dark:from-blue-500/10 dark:to-cyan-500/10 
          blur-3xl" />
      </div>

      {/* Status Bar Space */}
      <div className="h-14" />

      {/* Apps Grid */}
      <div className="px-6 py-4">
        <div className="grid grid-cols-4 gap-x-4 gap-y-6">
          {apps.map((app, index) => (
            <motion.button
              key={index}
              onClick={app.onClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center gap-2"
            >
              <div className={`w-[52px] h-[52px] rounded-2xl bg-gradient-to-br ${app.gradient}
                flex items-center justify-center shadow-lg
                ring-1 ring-white/20 dark:ring-white/10
                backdrop-blur-sm`}>
                <div className="text-white">
                  {app.icon}
                </div>
              </div>
              <span className={`text-xs font-medium ${theme.text.primary}
                text-center max-w-full truncate`}>
                {app.label}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Dock */}
      <div className="absolute bottom-8 left-4 right-4">
        <div className={`bg-white/10 dark:bg-white/5 backdrop-blur-xl 
          rounded-2xl p-4 ring-1 ring-white/20 dark:ring-white/10
          shadow-lg`}>
          <div className="flex justify-around items-center gap-2">
            {dockApps.map((app, index) => (
              <motion.button
                key={index}
                onClick={app.onClick}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${app.gradient}
                  flex items-center justify-center shadow-lg
                  ring-1 ring-white/20 dark:ring-white/10`}
              >
                <div className="text-white">
                  {app.icon}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}