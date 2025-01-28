import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Video, MessageSquare, Star, Search, Users, ChevronLeft } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useNavigation } from '@/contexts/NavigationContext';
import { Contact, useContacts } from '@/contexts/ContactsContext';
import { Header } from './components/Header';

type ActionType = 'call' | 'video' | 'message';

export function DialScreen() {
  const { theme, colors } = useTheme();
  const { navigate, goBack } = useNavigation();
  const { contacts } = useContacts();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAction, setSelectedAction] = useState<ActionType>('call');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.address.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 5);
  const handleContactAction = (contact: Contact) => {
    switch (selectedAction) {
      case 'call':
        navigate('call', { type: 'outgoing', name: contact.name });
        break;
      case 'video':
        navigate('call', { type: 'video', name: contact.name });
        break;
      case 'message':
        navigate('newMessage', { 
          contactId: contact.id,
          name: contact.name,
          address: contact.address
        });
        break;
    }
  };

  return (
    <div className={`h-full flex flex-col ${theme.gradients.main}`}>
      <Header 
        title="İletişim"
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

      {/* Search Bar */}
      <div className="px-4 pt-2">
        <div className={`${theme.glass} rounded-full flex items-center gap-3 p-2.5
          border border-white/10 backdrop-blur-xl`}>
          <Search className={`w-4 h-4 ml-2 ${theme.text.secondary}`} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="İsim veya adres ara..."
            className={`flex-1 bg-transparent border-none outline-none text-sm
              ${theme.text.primary} placeholder:${theme.text.secondary}`}
          />
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('contacts', { selectionMode: selectedAction })}
            className={`p-1.5 rounded-full ${colors.blue.primary}`}
          >
            <Users className="w-4 h-4 text-white" />
          </motion.button>
        </div>
      </div>

      {/* Action Types */}
      <div className="px-4 py-4">
        <div className={`${theme.glass} rounded-2xl p-2 border border-white/10 backdrop-blur-xl`}>
          <div className="flex gap-2">
            {[
              { type: 'call', icon: Phone, label: 'Sesli' },
              { type: 'video', icon: Video, label: 'Görüntülü' },
              { type: 'message', icon: MessageSquare, label: 'Mesaj' }
            ].map(({ type, icon: Icon, label }) => (
              <motion.button
                key={type}
                onClick={() => setSelectedAction(type as ActionType)}
                className={`flex-1 py-3 rounded-xl flex flex-col items-center gap-1.5
                  transition-all duration-300
                  ${selectedAction === type 
                    ? `${colors.blue.primary} shadow-lg shadow-blue-500/20` 
                    : 'hover:bg-white/5'}`}
                whileTap={{ scale: 0.97 }}
              >
                <Icon className={`w-5 h-5 ${selectedAction === type ? 'text-white' : theme.text.primary}`} />
                <span className={`text-xs font-medium ${selectedAction === type ? 'text-white' : theme.text.primary}`}>
                  {label}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Contacts List */}
      <div className="flex-1 px-4 overflow-y-auto hide-scrollbar space-y-2">
        <AnimatePresence>
          {filteredContacts.map((contact, index) => (
            <motion.button
              key={contact.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => handleContactAction(contact)}
              className={`w-full p-3 ${theme.glass} rounded-2xl
                flex items-center gap-3 group hover:bg-white/5 
                border border-white/10 backdrop-blur-xl
                transition-all duration-300`}
            >
              {/* Avatar */}
              <div className={`w-12 h-12 rounded-xl ${colors.blue.primary} 
                flex items-center justify-center relative
                shadow-lg shadow-blue-500/20`}>
                {contact.avatar ? (
                  <img 
                    src={contact.avatar} 
                    alt={contact.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                ) : (
                  <span className="text-lg font-medium text-white">
                    {contact.name[0].toUpperCase()}
                  </span>
                )}
                {contact.isOnline && (
                  <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 
                    bg-emerald-500 rounded-full border-2 border-black" />
                )}
              </div>

              {/* Contact Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <h3 className={`font-medium ${theme.text.primary} truncate text-sm`}>
                    {contact.name}
                  </h3>
                  {contact.isFavorite && (
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 flex-shrink-0" />
                  )}
                </div>
                <p className={`text-xs ${theme.text.secondary} truncate mt-0.5`}>
                  {contact.address.slice(0, 6)}...{contact.address.slice(-4)}
                </p>
              </div>

              {/* Action Icon */}
              <div className={`w-8 h-8 rounded-lg ${colors.blue.primary} 
                flex items-center justify-center opacity-0 group-hover:opacity-100
                shadow-lg shadow-blue-500/20 transition-all duration-300`}>
                {selectedAction === 'call' && <Phone className="w-3.5 h-3.5 text-white" />}
                {selectedAction === 'video' && <Video className="w-3.5 h-3.5 text-white" />}
                {selectedAction === 'message' && <MessageSquare className="w-3.5 h-3.5 text-white" />}
              </div>
            </motion.button>
          ))}
        </AnimatePresence>

        {/* View All Contacts */}
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate('contacts', { selectionMode: selectedAction })}
          className={`w-full p-3 rounded-2xl ${theme.glass} 
            flex items-center justify-center gap-2
            border border-white/10 backdrop-blur-xl
            hover:bg-white/5 transition-all duration-300`}
        >
          <Users className={`w-4 h-4 ${theme.text.secondary}`} />
          <span className={`text-sm ${theme.text.secondary}`}>
            Tüm Kişiler
          </span>
        </motion.button>
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