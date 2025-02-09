import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Phone, Video, Mic, VolumeX, PhoneOff } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useNavigation } from '@/contexts/NavigationContext';
import { Header } from './components/Header';
import { useWebRTC } from '@/contexts/WebRTCContext';

interface CallScreenProps {
  type: 'incoming' | 'outgoing' | 'video';
  name: string;
}

export function CallScreen({ type, name }: CallScreenProps) {
  const { theme, isDarkMode } = useTheme();
  const { navigate } = useNavigation();
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeakerOn, setIsSpeakerOn] = useState(false);
  const [callStatus, setCallStatus] = useState<string>('Connecting...');
  const { startCall, endCall, localStream } = useWebRTC();
  const localVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (type === 'video' && localVideoRef.current && localStream) {
      localVideoRef.current.srcObject = localStream;
    }

    return () => {
      endCall();
    };
  }, [type, localStream]);

  const handleEndCall = () => {
    endCall();
    navigate('home');
  };

  const toggleMute = () => {
    if (localStream) {
      localStream.getAudioTracks().forEach(track => {
        track.enabled = !track.enabled;
      });
      setIsMuted(!isMuted);
    }
  };

  const toggleSpeaker = () => {
    setIsSpeakerOn(!isSpeakerOn);
    // Implement speaker logic here
  };

  const handleStartCall = async () => {
    if (type === 'video') {
      await startCall(name);
      navigate('videoCall');
    }
  };

  return (
    <div className="flex flex-col h-full bg-opacity-95" 
         style={{ backgroundColor: theme.backgroundColor }}>
      <Header title="Call" />
      
      <div className="flex-1 flex flex-col items-center justify-center space-y-6">
        {type === 'video' && (
          <div className="relative w-full h-64">
            <video
              ref={localVideoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        )}

        <h2 className="text-2xl font-semibold" style={{ color: theme.textColor }}>
          {name}
        </h2>
        <p className="text-gray-500">{callStatus}</p>

        <div className="flex space-x-6">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleMute}
            className={`p-4 rounded-full ${isMuted ? 'bg-red-500' : 'bg-gray-200'}`}
          >
            <Mic className={isMuted ? 'text-white' : 'text-gray-600'} />
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleSpeaker}
            className={`p-4 rounded-full ${isSpeakerOn ? 'bg-red-500' : 'bg-gray-200'}`}
          >
            <VolumeX className={isSpeakerOn ? 'text-white' : 'text-gray-600'} />
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={handleEndCall}
            className="p-4 rounded-full bg-red-500"
          >
            <PhoneOff className="text-white" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}