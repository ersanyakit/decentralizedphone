import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, ChevronLeft } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useNavigation } from '@/contexts/NavigationContext';
import { Header } from '../components/Header';

interface Message {
  id: number;
  text: string;
  time: string;
  sent: boolean;
}

export function MessageDetail() {
  const { theme, isDarkMode, colors } = useTheme();
  const { goBack, params } = useNavigation();
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Merhaba! Nasılsın?",
      time: "14:30",
      sent: false
    },
    {
      id: 2,
      text: "İyiyim, teşekkürler. Sen nasılsın?",
      time: "14:31",
      sent: true
    }
  ]);

  const contact = params?.contact;

  useEffect(() => {
    if (!contact) {
      goBack();
    }
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [contact, messages]);

  const handleSend = () => {
    if (newMessage.trim()) {
      const now = new Date();
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        text: newMessage.trim(),
        time: now.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' }),
        sent: true
      }]);
      setNewMessage('');
    }
  };

  return (
    <div className={`h-full flex flex-col ${theme.gradients.main}`}>
      <Header 
        title={contact?.name || 'Mesaj'}
        leftAction={
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={goBack}
            className={`p-2 rounded-xl ${theme.buttons.primary}`}
          >
            <ChevronLeft className={`w-5 h-5 ${theme.text.primary}`} />
          </motion.button>
        }
      />

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto hide-scrollbar p-4 space-y-4">
        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`flex ${message.sent ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[75%] px-4 py-2 rounded-2xl
              ${message.sent 
                ? `${colors.blue.primary} text-white rounded-tr-none` 
                : `${theme.glass} rounded-tl-none ${theme.border}`}`}
            >
              <p className="text-sm break-words leading-relaxed">
                {message.text}
              </p>
              <p className={`text-[10px] mt-1 opacity-75 ${message.sent ? 'text-white' : theme.text.secondary}`}>
                {message.time}
              </p>
            </div>
          </motion.div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-gradient-to-t from-gray-50 to-transparent dark:from-gray-900">
        <div className={`${theme.glass} rounded-full px-4 py-2 ${theme.border}
          flex items-center gap-2`}>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Mesaj yazın..."
            className={`flex-1 bg-transparent outline-none ${theme.text.primary}
              placeholder:${theme.text.secondary} text-sm min-h-[24px]`}
          />
          
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleSend}
            disabled={!newMessage.trim()}
            className={`p-2 rounded-full transition-all duration-200
              ${newMessage.trim() ? colors.blue.primary : ''}`}
          >
            <Send className={`w-5 h-5 ${newMessage.trim() ? 'text-white' : theme.text.secondary}`} />
          </motion.button>
        </div>
      </div>

      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
} 