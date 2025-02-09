import { useWebRTC } from '@/contexts/WebRTCContext';
import { useNavigation } from '@/contexts/NavigationContext';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Video, Mic, VolumeX, PhoneOff } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Header } from './components/Header';
import { webRTCService } from '@/services/WebRTCService';

export function ActiveVideoCallScreen({ name }: { name: string }) {
  const { localStream, remoteStream, endCall } = useWebRTC();
  const { navigate } = useNavigation();
  const { theme } = useTheme();
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOff, setIsCameraOff] = useState(false);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (localVideoRef.current && localStream) {
      localVideoRef.current.srcObject = localStream;
    }
    if (remoteVideoRef.current && remoteStream) {
      remoteVideoRef.current.srcObject = remoteStream;
    }
  }, [localStream, remoteStream]);

  const handleEndCall = () => {
    endCall();
    navigate('home');
  };

  const toggleCamera = () => {
    const localStream = webRTCService.getLocalStream();
    if (localStream) {
      localStream.getVideoTracks().forEach(track => {
        track.enabled = !track.enabled;
      });
      setIsCameraOff(!isCameraOff);
    }
  };

  return (
    <div className={`h-full flex flex-col ${theme.gradients.main}`}>
      <Header title="Video Call" subtitle={name} />

      <div className="flex-1 relative">
        <video
          ref={remoteVideoRef}
          autoPlay
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <video
          ref={localVideoRef}
          autoPlay
          playsInline
          muted
          className={`absolute bottom-4 right-4 w-32 h-48 
                   object-cover rounded-2xl border border-white/20 
                   shadow-lg z-10 transform mirror
                   ${isCameraReady && !isCameraOff ? 'opacity-100' : 'opacity-0'}`}
          onLoadedMetadata={() => {
            if (localVideoRef.current) {
              localVideoRef.current.play().catch(console.error);
            }
          }}
        />
        {(!isCameraReady || isCameraOff) && (
          <div className="absolute bottom-4 right-4 w-32 h-48 
                       rounded-2xl border border-white/20 
                       bg-black/40 flex items-center justify-center">
            <span className="text-white/60 text-sm">
              {!isCameraReady ? 'Kamera başlatılıyor...' : 'Kamera kapalı'}
            </span>
          </div>
        )}
      </div>

      {/* Call Controls */}
      <div className="p-4">
        <div className="flex justify-center gap-4">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMuted(!isMuted)}
            className={`p-4 rounded-full ${isMuted ? 'bg-red-500' : theme.glass}`}
          >
            <Mic className={`w-6 h-6 ${isMuted ? 'text-white' : theme.text.primary}`} />
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleEndCall}
            className="p-4 rounded-full bg-red-500"
          >
            <PhoneOff className="w-6 h-6 text-white" />
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleCamera}
            className={`p-4 rounded-full ${isCameraOff ? 'bg-red-500' : theme.glass}`}
          >
            <Video className={`w-6 h-6 ${isCameraOff ? 'text-white' : theme.text.primary}`} />
          </motion.button>
        </div>
      </div>

      <style jsx global>{`
        .mirror {
          transform: scaleX(-1);
        }
      `}</style>
    </div>
  );
} 