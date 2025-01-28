import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageSquare, Camera, Chrome, Calendar, Music, Mail, 
         Settings, Image, Map, Cloud, Battery, Wifi, SignalHigh } from 'lucide-react';

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
  }
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

const apps = [
  { 
    icon: <Phone className="w-6 h-6 text-white" />, 
    label: 'Phone',
    gradient: 'linear-gradient(135deg, #00F5A0 0%, #00D9F5 100%)',
    notification: 2
  },
  { 
    icon: <MessageSquare className="w-6 h-6 text-white" />, 
    label: 'Messages',
    gradient: 'linear-gradient(135deg, #00C6FB 0%, #005BEA 100%)',
    notification: 5
  },
  { 
    icon: <Camera className="w-6 h-6 text-white" />, 
    label: 'Camera',
    gradient: 'linear-gradient(135deg, #F6D242 0%, #FF52E5 100%)'
  },
  { 
    icon: <Chrome className="w-6 h-6 text-white" />, 
    label: 'Chrome',
    gradient: 'linear-gradient(135deg, #FF9897 0%, #F650A0 100%)'
  },
  { 
    icon: <Calendar className="w-6 h-6 text-white" />, 
    label: 'Calendar',
    gradient: 'linear-gradient(135deg, #FDD819 0%, #E80505 100%)'
  },
  { 
    icon: <Music className="w-6 h-6 text-white" />, 
    label: 'Music',
    gradient: 'linear-gradient(135deg, #30C5D2 0%, #471069 100%)'
  },
  { 
    icon: <Mail className="w-6 h-6 text-white" />, 
    label: 'Mail',
    gradient: 'linear-gradient(135deg, #B721FF 0%, #21D4FD 100%)'
  },
  { 
    icon: <Map className="w-6 h-6 text-white" />, 
    label: 'Maps',
    gradient: 'linear-gradient(135deg, #4E65FF 0%, #92EFFD 100%)'
  },
];

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

export const HomeScreen: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const [weather] = useState({ temp: '24°', condition: 'Partly Cloudy' });

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-full bg-gradient-to-br from-[#0A0F2C] via-[#1C1D3B] to-[#252A4A] flex flex-col">
      {/* Status Bar */}
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

      {/* Weather Widget */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-4 mt-4 p-4 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20
                  relative overflow-hidden group shadow-lg shadow-black/10"
        whileHover={{ scale: 1.02 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-bold text-white">{weather.temp}</h2>
            <div className="flex items-center gap-2 mt-1">
              <Cloud className="w-4 h-4 text-white/70" />
              <p className="text-white/70 text-sm">{weather.condition}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-white/90 text-lg font-medium">San Francisco</p>
            <p className="text-white/60 text-sm">H:27° L:18°</p>
          </div>
        </div>
      </motion.div>

      {/* App Grid */}
      <div className="flex-1 px-4 py-8">
        <div className="grid grid-cols-4 gap-y-8 gap-x-4">
          {apps.map((app, index) => (
            <AppIcon
              key={index}
              icon={app.icon}
              label={app.label}
              gradient={app.gradient}
              notification={app.notification}
            />
          ))}
        </div>
      </div>

      {/* Dock */}
      <div className="p-4">
        <div className="p-4 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20
                      shadow-lg shadow-black/20">
          <div className="flex justify-around">
            {dockApps.map((app, index) => (
              <AppIcon
                key={index}
                icon={app.icon}
                label={app.label}
                gradient={app.gradient}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};