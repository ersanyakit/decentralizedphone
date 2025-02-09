import { useNavigation } from '@/contexts/NavigationContext';
import { useTheme } from '@/contexts/ThemeContext';
import { LockScreen } from './LockScreen';
import { HomeScreen } from './HomeScreen';
import { DialScreen } from './DialScreen';
import { ContactsScreen } from './ContactsScreen';
import { CallScreen } from './CallScreen';
import { ActiveVideoCallScreen } from './ActiveVideoCallScreen';
import { Messages } from './Messages';
import { MessageDetail } from './Messages/MessageDetail';
import { NewMessage } from './Messages/NewMessage';
import { AnimatePresence, motion } from 'framer-motion';
import { useWebRTC } from '@/contexts/WebRTCContext';
import { IncomingCallScreen } from './IncomingCallScreen';

export function Phone() {
  const { currentScreen } = useNavigation();
  const { theme, isDarkMode } = useTheme();
  const { incomingCall } = useWebRTC();

  const screens = {
    lock: <LockScreen />,
    home: <HomeScreen />,
    dial: <DialScreen />,
    contacts: <ContactsScreen />,
    call: <CallScreen type="outgoing" name="John Doe" />,
    videoCall: <ActiveVideoCallScreen name="John Doe" />,
    messages: <Messages />,
    messageDetail: <MessageDetail />,
    newMessage: <NewMessage />,
    incomingCall: <IncomingCallScreen />
  };

  // Gelen arama varsa IncomingCallScreen'i göster
  if (incomingCall) {
    return screens.incomingCall;
  }

  return (
    <div className="relative w-full h-[calc(100vh)] flex items-center justify-center  overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900" />
      
      {/* Phone Frame - Boyutları artırıldı */}
      <div className={`relative w-[340px] h-[95vh] max-h-[700px] rounded-[45px] 
        ${isDarkMode ? 'bg-[#1a1a1a]' : 'bg-[#ffffff]'}
        shadow-[0_0_0_12px_rgba(0,0,0,0.15),0_20px_40px_-12px_rgba(0,0,0,0.25)]
        transition-all duration-500`}>
        
        {/* Screen Border */}
        <div className="absolute inset-0 rounded-[40px] pointer-events-none
          ring-1 ring-inset ring-white/20 dark:ring-white/10" />

        {/* Dynamic Island */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90px] h-[25px] 
          bg-black rounded-b-[18px] z-50">
          {/* Camera */}
          <div className="absolute right-[30%] top-[50%] -translate-y-1/2
            w-[6px] h-[6px] rounded-full bg-[#1a1a1a]
            ring-[0.5px] ring-inset ring-[#000000]
            before:absolute before:inset-0 before:rounded-full 
            before:ring-[2px] before:ring-[#0a0a0a]/50" />
          {/* Sensor */}
          <div className="absolute left-[30%] top-[50%] -translate-y-1/2
            w-[8px] h-[8px] rounded-full bg-[#1a1a1a]
            ring-[0.5px] ring-inset ring-[#000000]" />
        </div>

        {/* Power Button */}
        <div className={`absolute right-[-10px] top-[90px] w-[3px] h-[60px] 
          ${isDarkMode ? 'bg-[#2a2a2b]' : 'bg-[#e3e3e3]'}
          rounded-r-sm shadow-lg`} />

        {/* Volume Buttons */}
        <div className={`absolute left-[-10px] top-[90px] w-[3px] h-[30px] 
          ${isDarkMode ? 'bg-[#2a2a2b]' : 'bg-[#e3e3e3]'}
          rounded-l-sm shadow-lg mb-4`} />
        <div className={`absolute left-[-10px] top-[135px] w-[3px] h-[30px] 
          ${isDarkMode ? 'bg-[#2a2a2b]' : 'bg-[#e3e3e3]'}
          rounded-l-sm shadow-lg`} />
        
        {/* Screen Content */}
        <div className="absolute inset-0 rounded-[40px] overflow-hidden">
          <div className={`h-full ${theme.gradients.main}`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentScreen}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
                className="h-full relative"
              >
                {screens[currentScreen]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Bar Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 
          w-[100px] h-[4px] bg-black/20 dark:bg-white/20 rounded-full" />

        {/* Glass Reflection */}
        <div className="absolute inset-0 rounded-[40px] pointer-events-none
          bg-gradient-to-b from-white/10 via-transparent to-transparent opacity-50" />
      </div>

      {/* Ambient Light Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
          w-[400px] h-[400px] rounded-full
          ${isDarkMode 
            ? 'bg-gradient-to-r from-violet-500/5 via-purple-500/5 to-indigo-500/5' 
            : 'bg-gradient-to-r from-violet-200/20 via-purple-200/20 to-indigo-200/20'} 
          blur-[80px] opacity-60
          animate-pulse duration-5000`} />
      </div>
    </div>
  );
}