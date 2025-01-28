import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Video, Mic, VolumeX, Camera, SignalHigh, LayoutGrid, PhoneOff } from 'lucide-react';
import { phoneTheme, commonComponents } from '../../utils/phoneTheme';
const { StatusBar, ActionButton } = commonComponents;

interface CallScreenProps {
  type: 'incoming' | 'outgoing' | 'video';
  name: string;
}

export function CallScreen({ type, name }: CallScreenProps) {
  const [isCameraFlipped, setIsCameraFlipped] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);

  return (
    <div className={`h-full relative ${phoneTheme.gradients.main}`}>
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
      <div className="relative h-full flex flex-col items-center pt-20">
        {/* Profil alanı */}
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
            {type === 'incoming' ? 'Gelen Arama' : 
             type === 'outgoing' ? 'Aranıyor...' : 
             'Görüntülü Arama'}
          </p>
        </motion.div>

        {/* Arama durumu animasyonu */}
        <motion.div
          className="mt-8 flex gap-3"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className={`w-2 h-2 rounded-full ${phoneTheme.text.primary}`}
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>

        {/* Kontrol butonları */}
        <div className="absolute bottom-20 left-0 right-0">
          <div className="flex justify-center gap-6">
            {type === 'incoming' ? (
              <>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className={`w-16 h-16 rounded-full ${phoneTheme.buttons.danger} 
                    flex items-center justify-center`}
                >
                  <PhoneOff className="w-6 h-6 text-white" />
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className={`w-16 h-16 rounded-full ${phoneTheme.buttons.success}
                    flex items-center justify-center`}
                >
                  <Phone className="w-6 h-6 text-white" />
                </motion.button>
              </>
            ) : (
              <div className="flex gap-4">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className={`w-14 h-14 rounded-full ${phoneTheme.buttons.primary}
                    flex items-center justify-center`}
                >
                  <Mic className="w-5 h-5 text-white" />
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className={`w-14 h-14 rounded-full ${phoneTheme.buttons.danger}
                    flex items-center justify-center`}
                >
                  <PhoneOff className="w-5 h-5 text-white" />
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className={`w-14 h-14 rounded-full ${phoneTheme.buttons.primary}
                    flex items-center justify-center`}
                >
                  <VolumeX className="w-5 h-5 text-white" />
                </motion.button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}