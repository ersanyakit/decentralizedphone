import { useWebRTC } from '@/contexts/WebRTCContext';
import { useNavigation } from '@/contexts/NavigationContext';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';
import { Phone, PhoneOff } from 'lucide-react';

export function IncomingCallScreen() {
  const { answerCall, endCall, incomingCall } = useWebRTC();
  const { navigate } = useNavigation();
  const { theme } = useTheme();

  const handleAnswer = async () => {
    await answerCall(incomingCall);
    navigate('videoCall');
  };

  const handleReject = () => {
    endCall();
    navigate('home');
  };

  return (
    <div className={`h-full flex flex-col ${theme.gradients.main}`}>
      <div className="flex-1 flex flex-col items-center justify-center space-y-6">
        <h2 className={`text-2xl font-semibold ${theme.text.primary}`}>
          Gelen Arama
        </h2>
        <p className={`text-lg ${theme.text.secondary}`}>
          {incomingCall?.fromName}
        </p>

        <div className="flex space-x-8">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleAnswer}
            className="p-4 rounded-full bg-green-500"
          >
            <Phone className="w-6 h-6 text-white" />
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleReject}
            className="p-4 rounded-full bg-red-500"
          >
            <PhoneOff className="w-6 h-6 text-white" />
          </motion.button>
        </div>
      </div>
    </div>
  );
} 