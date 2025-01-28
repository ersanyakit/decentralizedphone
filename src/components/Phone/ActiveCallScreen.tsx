import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic, PhoneOff, VolumeX, Phone } from 'lucide-react';
import { phoneTheme } from '@/utils/phoneTheme';

interface ActiveCallScreenProps {
  name: string;
  duration?: number;
}

export function ActiveCallScreen({ name }: ActiveCallScreenProps) {
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeakerOn, setIsSpeakerOn] = useState(false);
  const [callDuration, setCallDuration] = useState(0);

  // Call duration timer
  useState(() => {
    const timer = setInterval(() => {
      setCallDuration(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`h-full relative ${phoneTheme.gradients.main}`}>
      {/* Dekoratif arka plan */}
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
      </div>

      {/* Ana içerik */}
      <div className="relative h-full flex flex-col items-center pt-20">
        {/* Profil ve süre */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center"
        >
          <div className={`w-24 h-24 rounded-full ${phoneTheme.gradients.glass} mb-4 mx-auto
            flex items-center justify-center`}>
            <span className={`text-3xl ${phoneTheme.text.primary}`}>
              {name[0].toUpperCase()}
            </span>
          </div>
          <h1 className={`text-2xl font-semibold mb-2 ${phoneTheme.text.primary}`}>
            {name}
          </h1>
          <p className={`text-lg ${phoneTheme.text.secondary}`}>
            {formatDuration(callDuration)}
          </p>
        </motion.div>

        {/* Kontrol butonları */}
        <div className="absolute bottom-20 left-0 right-0">
          <div className="flex justify-center gap-6">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMuted(!isMuted)}
              className={`w-16 h-16 rounded-full ${isMuted ? phoneTheme.buttons.danger : phoneTheme.buttons.primary}
                flex items-center justify-center`}
            >
              <Mic className="w-6 h-6 text-white" />
            </motion.button>
            
            <motion.button
              whileTap={{ scale: 0.95 }}
              className={`w-16 h-16 rounded-full ${phoneTheme.buttons.danger}
                flex items-center justify-center`}
            >
              <PhoneOff className="w-6 h-6 text-white" />
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSpeakerOn(!isSpeakerOn)}
              className={`w-16 h-16 rounded-full ${isSpeakerOn ? phoneTheme.buttons.success : phoneTheme.buttons.primary}
                flex items-center justify-center`}
            >
              <VolumeX className="w-6 h-6 text-white" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
} 