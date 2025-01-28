import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ChevronRight, User2, Check } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useNavigation } from '@/contexts/NavigationContext';
import { Header } from './components/Header';

interface Contact {
  id: number;
  name: string;
  phone: string;
  recent?: boolean;
  avatar?: string;
}

export function NewMessageScreen() {
  const { theme, isDarkMode } = useTheme();
  const { navigate } = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedContacts, setSelectedContacts] = useState<Contact[]>([]);

  const contacts: Contact[] = [
    {
      id: 1,
      name: "Alice Johnson",
      phone: "+90 532 123 45 67",
      recent: true
    },
    {
      id: 2,
      name: "John Smith",
      phone: "+90 533 234 56 78",
      recent: true
    },
    {
      id: 3,
      name: "Emma Davis",
      phone: "+90 535 345 67 89"
    },
    // ... diğer kişiler
  ];

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.phone.includes(searchQuery)
  );

  const handleContactSelect = (contact: Contact) => {
    if (selectedContacts.find(c => c.id === contact.id)) {
      setSelectedContacts(prev => prev.filter(c => c.id !== contact.id));
    } else {
      setSelectedContacts(prev => [...prev, contact]);
    }
  };

  const handleNext = () => {
    if (selectedContacts.length > 0) {
      navigate('messageDetail');
    }
  };

  return (
    <div className={`h-full flex flex-col ${theme.gradients.main}`}>
      <Header 
        title="Yeni Mesaj" 
        leftAction={
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('messages')}
            className={`p-2 rounded-xl ${theme.buttons.primary}`}
          >
            <X className={`w-5 h-5 ${theme.text.primary}`} />
          </motion.button>
        }
        rightAction={
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            className={`px-4 py-2 rounded-xl 
              ${selectedContacts.length > 0 
                ? 'bg-blue-500 hover:bg-blue-600' 
                : `${theme.buttons.primary} opacity-50`}
              transition-colors duration-200`}
          >
            <span className={`text-sm font-medium 
              ${selectedContacts.length > 0 ? 'text-white' : theme.text.primary}`}>
              İleri
            </span>
          </motion.button>
        }
      />

      {/* Selected Contacts */}
      {selectedContacts.length > 0 && (
        <div className="px-4 py-2">
          <div className="flex flex-wrap gap-2">
            {selectedContacts.map(contact => (
              <motion.div
                key={contact.id}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className={`${theme.glass} px-3 py-1.5 rounded-full
                  flex items-center gap-2
                  ring-1 ${isDarkMode ? 'ring-white/10' : 'ring-black/5'}`}
              >
                <span className={`text-sm ${theme.text.primary}`}>
                  {contact.name}
                </span>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleContactSelect(contact)}
                  className="p-0.5 rounded-full hover:bg-black/5 dark:hover:bg-white/5"
                >
                  <X className={`w-4 h-4 ${theme.text.secondary}`} />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Search Bar */}
      <div className="px-4 py-2">
        <div className={`${theme.glass} rounded-xl p-2 flex items-center gap-2
          ring-1 ${isDarkMode ? 'ring-white/10' : 'ring-black/5'}`}>
          <Search className={`w-5 h-5 ${theme.text.secondary}`} />
          <input
            type="text"
            placeholder="Kişi ara..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`bg-transparent flex-1 outline-none ${theme.text.primary} 
              placeholder:${theme.text.secondary} text-sm`}
          />
        </div>
      </div>

      {/* Recent Header */}
      {!searchQuery && (
        <div className="px-4 py-2">
          <h3 className={`text-sm font-medium ${theme.text.secondary}`}>
            Son Mesajlaşılanlar
          </h3>
        </div>
      )}

      {/* Contacts List */}
      <div className="flex-1 overflow-y-auto hide-scrollbar px-4 py-2">
        <AnimatePresence>
          {filteredContacts.map((contact, index) => (
            <motion.div
              key={contact.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => handleContactSelect(contact)}
              className={`mb-2 p-3 rounded-2xl ${theme.glass}
                ${isDarkMode ? 'hover:bg-white/5' : 'hover:bg-black/5'}
                transition-colors duration-200 cursor-pointer
                ring-1 ${isDarkMode ? 'ring-white/10' : 'ring-black/5'}
                ${selectedContacts.find(c => c.id === contact.id) ? 'bg-blue-500/10' : ''}`}
            >
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className={`w-10 h-10 rounded-full ${theme.glass} 
                  flex items-center justify-center
                  ring-2 ${isDarkMode ? 'ring-white/20' : 'ring-black/10'}`}>
                  {contact.avatar ? (
                    <img 
                      src={contact.avatar} 
                      alt={contact.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <User2 className={`w-5 h-5 ${theme.text.secondary}`} />
                  )}
                </div>

                {/* Contact Info */}
                <div className="flex-1 min-w-0">
                  <h3 className={`font-medium ${theme.text.primary} truncate`}>
                    {contact.name}
                  </h3>
                  <p className={`text-sm ${theme.text.secondary} truncate`}>
                    {contact.phone}
                  </p>
                </div>

                {/* Selection Indicator */}
                <div className={`w-6 h-6 rounded-full 
                  ${selectedContacts.find(c => c.id === contact.id)
                    ? 'bg-blue-500'
                    : `${theme.glass} ring-1 ${isDarkMode ? 'ring-white/20' : 'ring-black/10'}`}
                  flex items-center justify-center`}>
                  {selectedContacts.find(c => c.id === contact.id) && (
                    <Check className="w-4 h-4 text-white" />
                  )}
                </div>
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