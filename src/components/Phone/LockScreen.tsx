import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { Battery, Signal, Wifi, Lock } from 'lucide-react';

export function LockScreen() {
  const [time, setTime] = useState(new Date());
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [unlockProgress, setUnlockProgress] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleUnlockStart = () => {
    setIsUnlocking(true);
    let startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min((elapsed / 1000) * 100, 100);
      setUnlockProgress(progress);
      
      if (progress < 100 && isUnlocking) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  };

  const handleUnlockEnd = () => {
    setIsUnlocking(false);
    setUnlockProgress(0);
  };

  const handleUnlock = () => {
    setIsUnlocking(true);
    setUnlockProgress(100);
    setTimeout(() => {

    }, 1000); // 1 saniye bekleyip yönlendirme
  };

  return (
    <div className="h-full bg-gradient-to-br from-[#0A0F2C] via-[#1C1D3B] to-[#252A4A] relative overflow-hidden">
      {/* Status Bar */}
      <div className="px-4 py-2 flex justify-between items-center text-white/95 bg-black/10">
        <span className="text-sm font-medium">
          {time.toLocaleTimeString('en-US', { 
            hour: 'numeric', 
            minute: '2-digit',
            hour12: true 
          })}
        </span>
        <div className="flex items-center gap-2.5">
          <Signal className="w-4 h-4" />
          <Wifi className="w-4 h-4" />
          <Battery className="w-5 h-5" />
        </div>
      </div>

      {/* Clock & Date */}
      <motion.div 
        className="mt-20 text-center px-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h1 className="text-[72px] font-light text-white tracking-tight leading-none">
          {time.toLocaleTimeString('tr-TR', { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: false 
          })}
        </h1>
        <p className="mt-1 text-lg font-normal text-white/70">
          {time.toLocaleDateString('tr-TR', { 
            weekday: 'long',
            day: 'numeric',
            month: 'long'
          })}
        </p>
      </motion.div>

      {/* Notifications */}
      <div className="mt-10 px-4 space-y-2.5">
        <motion.div 
          className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-white/90 text-sm font-medium">Hoş geldiniz ✨</p>
        </motion.div>
      </div>

      {/* Unlock Button */}
      <div className="absolute bottom-24 left-0 right-0 flex justify-center">
        <motion.div className="relative">
          <motion.button
            className="relative w-[60px] h-[60px] rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center"
            onPointerDown={handleUnlockStart}
            onPointerUp={handleUnlockEnd}
            onPointerLeave={handleUnlockEnd}
            onClick={handleUnlock}
          >
            <AnimatePresence>
              {isUnlocking && (
                <>
                  {/* Progress Ring */}
                  <svg className="absolute inset-0 w-full h-full -rotate-90">
                    <circle
                      className="text-white/20"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      r="28"
                      cx="30"
                      cy="30"
                    />
                    <motion.circle
                      className="text-white"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      r="28"
                      cx="30"
                      cy="30"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: unlockProgress / 100 }}
                      transition={{ duration: 0.1, ease: "linear" }}
                    />
                  </svg>

                  {/* Glow Effect */}
                  <motion.div
                    className="absolute inset-[-8px] rounded-full bg-white/5"
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </>
              )}
            </AnimatePresence>

            {/* Lock Icon */}
            <motion.div
              animate={{
                scale: isUnlocking ? 0.8 : 1,
                rotate: unlockProgress >= 100 ? 360 : 0
              }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <Lock 
                className={`transition-colors duration-300 ${
                  isUnlocking ? 'text-white' : 'text-white/80'
                }`}
                size={22}
              />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>

      {/* Unlock Instruction */}
      <motion.p 
        className="absolute bottom-16 left-0 right-0 text-center text-white/60 text-sm font-normal"
        animate={{
          opacity: isUnlocking ? 0 : 1,
          y: isUnlocking ? 10 : 0
        }}
        transition={{ duration: 0.2 }}
      >
        Kilidi açmak için basılı tutun
      </motion.p>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      </div>
    </div>
  );
}