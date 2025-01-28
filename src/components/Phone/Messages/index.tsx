import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Edit2, User2, ChevronLeft } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useNavigation } from '@/contexts/NavigationContext';
import { Header } from '../components/Header';

interface MessagesProps {}

export function Messages({}: MessagesProps) {
  const { theme, isDarkMode, colors } = useTheme();
  const { navigate, goBack } = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');

  const messages = [
    {
      id: 1,
      contact: "Alice Johnson",
      lastMessage: "Tamam, yarın görüşürüz! 👋",
      time: "14:30",
      unread: true,
      isOnline: true,
      phone: "+90 532 123 45 67"
    },
    {
      id: 2,
      contact: "John Smith",
      lastMessage: "Toplantı saati değişti mi?",
      time: "12:15",
      unread: true,
      phone: "+90 533 234 56 78"
    },
    {
      id: 3,
      contact: "Emma Davis",
      lastMessage: "Fotoğrafları gönderdim ✨",
      time: "Dün",
      isOnline: true,
      phone: "+90 535 345 67 89"
    }
  ];

  const handleMessageClick = (message: any) => {
    navigate('messageDetail', { 
      contact: {
        id: message.id,
        name: message.contact,
        phone: message.phone
      }
    });
  };

  return (
    <div className={`h-full flex flex-col ${theme.gradients.main}`}>
      <Header 
        title="Mesajlar"
        leftAction={
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={goBack}
            className={`p-2 rounded-xl ${theme.buttons.primary}`}
          >
            <ChevronLeft className={`w-5 h-5 ${theme.text.primary}`} />
          </motion.button>
        }
        rightAction={
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('newMessage')}
            className={`p-2 rounded-xl bg-blue-500 hover:bg-blue-600 
              transition-colors duration-200`}
          >
            <Edit2 className="w-5 h-5 text-white" />
          </motion.button>
        }
      />

      {/* Search Bar */}
      <div className="px-4 py-2">
        <div className={`${theme.glass} rounded-xl p-2 flex items-center gap-2
          ring-1 ${isDarkMode ? 'ring-white/10' : 'ring-black/5'}`}>
          <Search className={`w-5 h-5 ${theme.text.secondary}`} />
          <input
            type="text"
            placeholder="Mesajlarda ara..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`bg-transparent flex-1 outline-none ${theme.text.primary} 
              placeholder:${theme.text.secondary} text-sm`}
          />
        </div>
      </div>

      {/* Messages List */}
      <div className="flex-1 overflow-y-auto hide-scrollbar px-4 py-2">
        <AnimatePresence>
          {messages
            .filter(message =>
              message.contact.toLowerCase().includes(searchQuery.toLowerCase()) ||
              message.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => handleMessageClick(message)}
                className={`mb-2 p-3 rounded-2xl ${theme.glass}
                  ${isDarkMode ? 'hover:bg-white/5' : 'hover:bg-black/5'}
                  transition-colors duration-200 cursor-pointer
                  ${theme.border}`}
              >
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="relative">
                    <div className={`w-12 h-12 rounded-full ${theme.glass} 
                      flex items-center justify-center
                      ring-2 ${isDarkMode ? 'ring-white/20' : 'ring-black/10'}`}>
                      <User2 className={`w-6 h-6 ${theme.text.secondary}`} />
                    </div>
                    {message.isOnline && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 
                        bg-green-500 rounded-full ring-2 ring-white dark:ring-gray-900" />
                    )}
                  </div>

                  {/* Message Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className={`font-medium ${theme.text.primary} truncate`}>
                        {message.contact}
                      </h3>
                      <span className={`text-xs ${message.unread ? 'text-blue-500' : theme.text.secondary}`}>
                        {message.time}
                      </span>
                    </div>
                    <p className={`text-sm ${message.unread ? theme.text.primary : theme.text.secondary} 
                      truncate mt-0.5`}>
                      {message.lastMessage}
                    </p>
                  </div>

                  {/* Unread Indicator */}
                  {message.unread && (
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                  )}
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
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