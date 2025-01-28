import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Video, Mic, VolumeX, Camera, SignalHigh, LayoutGrid, PhoneOff } from 'lucide-react';
import { phoneTheme, commonComponents } from '../../utils/phoneTheme';
import { useTheme } from '@/contexts/ThemeContext';
import { useNavigation } from '@/contexts/NavigationContext';
import { Header } from './components/Header';
const { StatusBar, ActionButton } = commonComponents;

interface CallScreenProps {
  type: 'incoming' | 'outgoing' | 'video';
  name: string;
}

export function CallScreen({ type, name }: CallScreenProps) {
  const { theme, isDarkMode } = useTheme();
  const { navigate } = useNavigation();
  const [isCameraFlipped, setIsCameraFlipped] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [isSpeakerOn, setIsSpeakerOn] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCallDuration(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleEndCall = () => {
    navigate('home');
  };

  return (
    <div className={`h-full flex flex-col ${theme.gradients.main}`}>
      <Header 
        title={type === 'video' ? 'Görüntülü Arama' : 'Sesli Arama'}
        showBack={false}
      />

      {/* Dekoratif arka plan efektleri */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Ana içerik */}
      <div className="flex-1 flex flex-col items-center">
        {/* Caller Info */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
          <div className={`w-24 h-24 rounded-full ${theme.glass} mb-6
            flex items-center justify-center`}>
            <span className={`text-4xl font-medium ${theme.text.primary}`}>
              {name[0]}
            </span>
          </div>
          
          <h2 className={`text-2xl font-semibold ${theme.text.primary} mb-2`}>
            {name}
          </h2>
          
          <p className={`${theme.text.secondary} text-sm`}>
            {type === 'outgoing' ? 'Aranıyor...' : formatTime(callDuration)}
          </p>
        </div>

        {/* Call Controls */}
        <div className="w-full px-6 pb-8">
          <div className="grid grid-cols-3 gap-4 mb-6">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMuted(!isMuted)}
              className={`p-4 rounded-xl ${theme.glass} 
                ${isMuted ? 'bg-red-500/20' : ''} 
                transition-colors duration-200`}
            >
              <div className="flex flex-col items-center gap-2">
                <Mic className={`w-6 h-6 ${isMuted ? 'text-red-500' : theme.text.primary}`} />
                <span className={`text-xs ${isMuted ? 'text-red-500' : theme.text.secondary}`}>
                  Mikrofon
                </span>
              </div>
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSpeakerOn(!isSpeakerOn)}
              className={`p-4 rounded-xl ${theme.glass}
                ${isSpeakerOn ? 'bg-blue-500/20' : ''}
                transition-colors duration-200`}
            >
              <div className="flex flex-col items-center gap-2">
                <VolumeX className={`w-6 h-6 ${isSpeakerOn ? 'text-blue-500' : theme.text.primary}`} />
                <span className={`text-xs ${isSpeakerOn ? 'text-blue-500' : theme.text.secondary}`}>
                  Hoparlör
                </span>
              </div>
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('videoCall')}
              className={`p-4 rounded-xl ${theme.glass}`}
            >
              <div className="flex flex-col items-center gap-2">
                <Video className={`w-6 h-6 ${theme.text.primary}`} />
                <span className={`text-xs ${theme.text.secondary}`}>
                  Video
                </span>
              </div>
            </motion.button>
          </div>

          {/* End Call Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleEndCall}
            className="w-full py-4 rounded-xl bg-red-500 hover:bg-red-600
              transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <Phone className="w-6 h-6 text-white rotate-[135deg]" />
            <span className="text-white font-medium">
              Aramayı Sonlandır
            </span>
          </motion.button>
        </div>
      </div>
    </div>
  );
}