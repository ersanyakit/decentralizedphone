import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, User2, ChevronLeft } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useNavigation } from '@/contexts/NavigationContext';
import { Header } from '../components/Header';

interface Contact {
  id: number;
  name: string;
  phone: string;
  avatar?: string;
}

export function NewMessage() {
  const { theme, isDarkMode } = useTheme();
  const { navigate, goBack } = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedContacts, setSelectedContacts] = useState<Contact[]>([]);

  const contacts: Contact[] = [
    {
      id: 1,
      name: "Alice Johnson",
      phone: "+90 532 123 45 67"
    },
    {
      id: 2,
      name: "John Smith",
      phone: "+90 533 234 56 78"
    },
    {
      id: 3,
      name: "Emma Davis",
      phone: "+90 535 345 67 89"
    }
  ];

  const handleContactSelect = (contact: Contact) => {
    navigate('messageDetail', { 
      contact: {
        id: contact.id,
        name: contact.name,
        phone: contact.phone,
        avatar: contact.avatar
      }
    });
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.phone.includes(searchQuery)
  );

  return (
    <div className={`h-full flex flex-col ${theme.gradients.main}`}>
      <Header 
        title="Yeni Mesaj"
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
                ring-1 ${isDarkMode ? 'ring-white/10' : 'ring-black/5'}`}
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
                <div className="flex-1">
                  <h3 className={`font-medium ${theme.text.primary}`}>
                    {contact.name}
                  </h3>
                  <p className={`text-sm ${theme.text.secondary}`}>
                    {contact.phone}
                  </p>
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