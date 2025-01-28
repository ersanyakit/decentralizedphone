import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mic, Camera, VolumeX, FlipHorizontal } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useNavigation } from '@/contexts/NavigationContext';
import { Header } from './components/Header';

interface VideoCallScreenProps {
  name: string;
}

export function ActiveVideoCallScreen({ name }: VideoCallScreenProps) {
  const { theme } = useTheme();
  const { navigate } = useNavigation();
  const [callDuration, setCallDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(true);

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
    <div className={`h-full relative ${theme.gradients.main}`}>
      {/* Main Video Area (Remote User) */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center">
            <span className="text-3xl text-white">{name[0]}</span>
          </div>
        </div>
        
        {/* Call Duration */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 
          px-4 py-1 rounded-full bg-black/50 backdrop-blur-md">
          <p className="text-white text-sm font-medium">
            {formatTime(callDuration)}
          </p>
        </div>

        {/* Self View */}
        <motion.div 
          drag
          dragConstraints={{
            top: 60,
            left: 20,
            right: 20,
            bottom: 100
          }}
          className="absolute top-20 right-4 w-32 h-48 rounded-2xl overflow-hidden
            shadow-lg border-2 border-white/20"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900
            flex items-center justify-center">
            {isCameraOn ? (
              <div className="w-12 h-12 rounded-full bg-gray-700 
                flex items-center justify-center">
                <span className="text-xl text-white">Me</span>
              </div>
            ) : (
              <Camera className="w-8 h-8 text-gray-400" />
            )}
          </div>
        </motion.div>

        {/* Controls */}
        <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-6">
          {/* Additional Controls */}
          <div className="flex items-center gap-4">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMuted(!isMuted)}
              className={`p-3 rounded-full backdrop-blur-md
                ${isMuted ? 'bg-red-500/90' : 'bg-white/10'}`}
            >
              <Mic className={`w-5 h-5 ${isMuted ? 'text-white' : 'text-white'}`} />
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsCameraOn(!isCameraOn)}
              className={`p-3 rounded-full backdrop-blur-md
                ${!isCameraOn ? 'bg-red-500/90' : 'bg-white/10'}`}
            >
              <Camera className={`w-5 h-5 ${!isCameraOn ? 'text-white' : 'text-white'}`} />
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-white/10 backdrop-blur-md"
            >
              <FlipHorizontal className="w-5 h-5 text-white" />
            </motion.button>
          </div>

          {/* End Call Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleEndCall}
            className="p-4 rounded-full bg-red-500 shadow-lg
              hover:bg-red-600 transition-colors duration-200"
          >
            <Phone className="w-6 h-6 text-white rotate-[135deg]" />
          </motion.button>
        </div>
      </div>
    </div>
  );
} 