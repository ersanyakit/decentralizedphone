import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Image, Smile, Paperclip, MoreVertical, ChevronLeft, User2, Phone, Video, Check } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useNavigation } from '@/contexts/NavigationContext';
import { Header } from './components/Header';

interface Message {
  id: number;
  text: string;
  time: string;
  sent: boolean;
  status?: 'sent' | 'delivered' | 'read';
}

export function MessageDetailScreen() {
  const { theme, isDarkMode } = useTheme();
  const { navigate } = useNavigation();
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Merhaba! Nasılsın?",
      time: "14:30",
      sent: false,
    },
    {
      id: 2,
      text: "İyiyim, teşekkürler! Sen nasılsın?",
      time: "14:31",
      sent: true,
      status: 'read'
    },
    {
      id: 3,
      text: "Ben de iyiyim. Yarın toplantı saat kaçtaydı?",
      time: "14:32",
      sent: false,
    },
    {
      id: 4,
      text: "Saat 15:00'te başlayacak 👍",
      time: "14:33",
      sent: true,
      status: 'read'
    }
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages(prev => [...prev, {
        id: Date.now(),
        text: newMessage,
        time: new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' }),
        sent: true,
        status: 'sent'
      }]);
      setNewMessage('');
    }
  };

  return (
    <div className={`h-full flex flex-col ${theme.gradients.main}`}>
      {/* Custom Header */}
      <div className={`px-4 py-2 flex items-center gap-3 ${theme.glass}`}>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('messages')}
          className="p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5"
        >
          <ChevronLeft className={`w-5 h-5 ${theme.text.primary}`} />
        </motion.button>

        <div className="flex-1 flex items-center gap-3">
          <div className="relative">
            <div className={`w-10 h-10 rounded-full ${theme.glass} 
              flex items-center justify-center
              ring-2 ${isDarkMode ? 'ring-white/20' : 'ring-black/10'}`}>
              <User2 className={`w-5 h-5 ${theme.text.secondary}`} />
            </div>
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 
              bg-green-500 rounded-full ring-2 ring-white dark:ring-gray-900" />
          </div>
          
          <div className="flex-1 min-w-0">
            <h2 className={`font-medium ${theme.text.primary} truncate`}>
              Alice Johnson
            </h2>
            <p className={`text-xs ${theme.text.secondary}`}>
              Çevrimiçi
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('call')}
            className="p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5"
          >
            <Phone className={`w-5 h-5 ${theme.text.primary}`} />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('videoCall')}
            className="p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5"
          >
            <Video className={`w-5 h-5 ${theme.text.primary}`} />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5"
          >
            <MoreVertical className={`w-5 h-5 ${theme.text.primary}`} />
          </motion.button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto hide-scrollbar p-4">
        <div className="space-y-3">
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${message.sent ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[75%] ${message.sent 
                ? 'bg-blue-500 text-white rounded-t-2xl rounded-l-2xl' 
                : `${theme.glass} ${theme.text.primary} rounded-t-2xl rounded-r-2xl`}
                p-3 shadow-sm
                ring-1 ${message.sent ? 'ring-blue-600/20' : isDarkMode ? 'ring-white/10' : 'ring-black/5'}`}>
                <p className="text-sm">{message.text}</p>
                <div className={`flex items-center justify-end gap-1 mt-1
                  text-xs ${message.sent ? 'text-blue-100' : theme.text.secondary}`}>
                  <span>{message.time}</span>
                  {message.sent && message.status && (
                    <Check className={`w-3 h-3 ${
                      message.status === 'read' ? 'text-blue-200' : ''
                    }`} />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="p-4">
        <div className={`${theme.glass} rounded-2xl p-2
          ring-1 ${isDarkMode ? 'ring-white/10' : 'ring-black/5'}
          flex items-center gap-2`}>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5"
          >
            <Smile className={`w-5 h-5 ${theme.text.secondary}`} />
          </motion.button>
          
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Mesaj yazın..."
            className={`flex-1 bg-transparent outline-none ${theme.text.primary}
              placeholder:${theme.text.secondary} text-sm`}
          />
          
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5"
          >
            <Paperclip className={`w-5 h-5 ${theme.text.secondary}`} />
          </motion.button>
          
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5"
          >
            <Image className={`w-5 h-5 ${theme.text.secondary}`} />
          </motion.button>
          
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleSend}
            disabled={!newMessage.trim()}
            className={`p-2 rounded-xl ${newMessage.trim() 
              ? 'bg-blue-500 hover:bg-blue-600' 
              : 'opacity-50'} 
              transition-colors duration-200`}
          >
            <Send className="w-5 h-5 text-white" />
          </motion.button>
        </div>
      </div>
    </div>
  );
} 