import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Phone, Video, Mic, VolumeX, PhoneOff } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useNavigation } from '@/contexts/NavigationContext';
import { Header } from './components/Header';
import { webRTCService } from '@/services/WebRTCService';

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
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);
  const [isCameraReady, setIsCameraReady] = useState(false);

  useEffect(() => {
    let stream: MediaStream | null = null;

    const setupCamera = async () => {
      if (type !== 'video') return;

      try {
        // Kamera erişimi iste
        stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: 'user',
            width: { ideal: 1280 },
            height: { ideal: 720 }
          },
          audio: true
        });

        // Yerel videoyu göster
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream;
          await localVideoRef.current.play().catch(() => {
            console.log('Autoplay prevented, waiting for user interaction');
          });
          setIsCameraReady(true);
        }

        // WebRTC bağlantısını başlat
        await webRTCService.startCall(true);

      } catch (error) {
        console.error('Camera access error:', error);
        handleEndCall();
      }
    };

    setupCamera();

    webRTCService.onRemoteStream.subscribe(stream => {
      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = stream;
      }
    });

    // Bağlantı durumunu dinle
    webRTCService.onConnectionStateChange.subscribe(state => {
      switch (state) {
        case 'connected':
          setCallStatus('Connected');
          break;
        case 'disconnected':
        case 'failed':
          handleEndCall();
          break;
        case 'connecting':
          setCallStatus('Connecting...');
          break;
      }
    });

    // Cleanup
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
      webRTCService.endCall();
    };
  }, [type]);

  const handleEndCall = () => {
    webRTCService.endCall();
    navigate('home');
  };

  const toggleMute = () => {
    const localStream = webRTCService.getLocalStream();
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

  return (
    <div className={`h-full flex flex-col ${theme.gradients.main}`}>
      <Header 
        title={type === 'video' ? 'Video Call' : 'Voice Call'}
        subtitle={name}
      />

      <div className="flex-1 flex flex-col items-center justify-center relative">
        {type === 'video' && (
          <>
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
                       ${isCameraReady ? 'opacity-100' : 'opacity-0'}`}
              onLoadedMetadata={() => {
                if (localVideoRef.current) {
                  localVideoRef.current.play().catch(console.error);
                }
              }}
            />
            {!isCameraReady && (
              <div className="absolute bottom-4 right-4 w-32 h-48 
                           rounded-2xl border border-white/20 
                           bg-black/40 flex items-center justify-center">
                <span className="text-white/60 text-sm">Kamera başlatılıyor...</span>
              </div>
            )}
          </>
        )}

        {type !== 'video' && (
          <div className="text-center">
            <div className={`w-24 h-24 rounded-full ${theme.glass} mb-6
              flex items-center justify-center mx-auto`}>
              <span className={`text-4xl ${theme.text.primary}`}>
                {name[0]}
              </span>
            </div>
            <h2 className={`text-2xl font-semibold ${theme.text.primary} mb-2`}>
              {name}
            </h2>
            <p className={`${theme.text.secondary}`}>
              {callStatus}
            </p>
          </div>
        )}
      </div>

      {/* Call Controls */}
      <div className="p-4 space-y-4">
        <div className="flex justify-center gap-4">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleMute}
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
            onClick={toggleSpeaker}
            className={`p-4 rounded-full ${isSpeakerOn ? 'bg-blue-500' : theme.glass}`}
          >
            <VolumeX className={`w-6 h-6 ${isSpeakerOn ? 'text-white' : theme.text.primary}`} />
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