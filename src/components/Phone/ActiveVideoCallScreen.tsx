import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic, PhoneOff, Camera, CameraOff, Video, VideoOff } from 'lucide-react';
import { phoneTheme } from '@/utils/phoneTheme';

interface ActiveVideoCallScreenProps {
  name: string;
}

export function ActiveVideoCallScreen({ name }: ActiveVideoCallScreenProps) {
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(true);
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
      {/* Video görüntüsü */}
      <div className="absolute inset-0 bg-neutral-900/50 backdrop-blur">
        {isCameraOn ? (
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
        ) : (
          <div className="h-full flex items-center justify-center">
            <div className={`w-32 h-32 rounded-full ${phoneTheme.gradients.glass} 
              flex items-center justify-center`}>
              <span className={`text-5xl ${phoneTheme.text.primary}`}>
                {name[0].toUpperCase()}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Küçük video önizleme */}
      {isCameraOn && (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="absolute top-4 right-4 w-32 h-48 rounded-2xl overflow-hidden border-2 border-white/20"
        >
          <div className={`h-full ${phoneTheme.gradients.glass}`} />
        </motion.div>
      )}

      {/* Kontrol paneli */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm">
        <div className="p-6">
          {/* Üst bilgi */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className={`text-xl font-semibold ${phoneTheme.text.primary}`}>
                {name}
              </h2>
              <p className={`text-sm ${phoneTheme.text.secondary}`}>
                {formatDuration(callDuration)}
              </p>
            </div>
          </div>

          {/* Kontrol butonları */}
          <div className="flex justify-center gap-4">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMuted(!isMuted)}
              className={`w-14 h-14 rounded-full ${isMuted ? phoneTheme.buttons.danger : phoneTheme.buttons.primary}
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
              onClick={() => setIsCameraOn(!isCameraOn)}
              className={`w-14 h-14 rounded-full ${!isCameraOn ? phoneTheme.buttons.danger : phoneTheme.buttons.primary}
                flex items-center justify-center`}
            >
              {isCameraOn ? (
                <Camera className="w-5 h-5 text-white" />
              ) : (
                <CameraOff className="w-5 h-5 text-white" />
              )}
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.95 }}
              className={`w-14 h-14 rounded-full ${phoneTheme.buttons.primary}
                flex items-center justify-center`}
            >
              <Video className="w-5 h-5 text-white rotate-90" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
} 