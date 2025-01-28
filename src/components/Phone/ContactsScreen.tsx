import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Plus, Phone, Video, Mail, Star, Heart, 
         MessageSquare, ChevronRight, User2, ChevronLeft } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useNavigation } from '@/contexts/NavigationContext';
import { Header } from './components/Header';

interface Contact {
  id: number;
  name: string;
  number: string;
  email?: string;
  favorite?: boolean;
  recentCall?: 'missed' | 'incoming' | 'outgoing';
  lastContacted?: string;
  avatar?: string;
}

export function ContactsScreen() {
  const { theme, isDarkMode, colors } = useTheme();
  const { navigate, goBack } = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [view, setView] = useState<'all' | 'favorites' | 'recent'>('all');

  const [contacts] = useState<Contact[]>([
    { 
      id: 1, 
      name: 'Alice Johnson', 
      number: '+1 234 567 89 00', 
      email: 'alice@example.com',
      favorite: true,
      recentCall: 'missed',
      lastContacted: '2 hours ago'
    },
    { id: 2, name: 'Bob Smith', number: '+1 234 567 89 01', email: 'bob@example.com' },
    { id: 3, name: 'Charlie Brown', number: '+1 234 567 89 02' },
    { id: 4, name: 'David Wilson', number: '+1 234 567 89 03', email: 'david@example.com' },
    { id: 5, name: 'Eve Anderson', number: '+1 234 567 89 04' },
    { id: 6, name: 'Frank Thomas', number: '+1 234 567 89 05', email: 'frank@example.com' },
    { id: 7, name: 'Grace Lee', number: '+1 234 567 89 06' },
    { id: 8, name: 'Henry Davis', number: '+1 234 567 89 07', email: 'henry@example.com' },
  ]);

  const filteredContacts = contacts.filter(contact => {
    const matchesSearch = contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         contact.number.includes(searchQuery);
    if (view === 'favorites') return matchesSearch && contact.favorite;
    if (view === 'recent') return matchesSearch && contact.recentCall;
    return matchesSearch;
  });

  const handleCall = (contact: Contact) => {
    navigate('call', { name: contact.name });
  };

  const handleVideoCall = (contact: Contact) => {
    navigate('videoCall', { name: contact.name });
  };

  const handleContactClick = (contact: Contact) => {
    setSelectedContact(selectedContact?.id === contact.id ? null : contact);
  };

  return (
    <div className={`h-full flex flex-col ${theme.gradients.main}`}>
      <Header 
        title="Kişiler"
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
            className={`p-2 rounded-xl ${colors.blue.primary} text-white`}
          >
            <Plus className="w-5 h-5" />
          </motion.button>
        }
      />
      
      {/* Search and View Selector */}
      <div className="px-3 pt-2 pb-1 space-y-2">
        {/* Search Bar */}
        <div className={`${theme.glass} rounded-xl p-2 flex items-center gap-2 ${theme.border}`}>
          <Search className={`w-4 h-4 ${theme.text.secondary}`} />
          <input
            type="text"
            placeholder="Kişi ara..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`bg-transparent flex-1 outline-none ${theme.text.primary} 
              placeholder:${theme.text.secondary} text-sm`}
          />
        </div>

        {/* View Selector */}
        <div className={`grid grid-cols-3 gap-1 p-0.5 rounded-xl ${theme.glass} ${theme.border}`}>
          {['all', 'favorites', 'recent'].map((v) => (
            <motion.button
              key={v}
              onClick={() => setView(v as any)}
              className={`py-1.5 px-2 rounded-lg text-xs font-medium
                transition-all duration-200
                ${view === v 
                  ? `${colors.blue.primary} text-white shadow-sm` 
                  : theme.text.secondary}`}
              whileTap={{ scale: 0.98 }}
            >
              {v === 'all' && 'Tümü'}
              {v === 'favorites' && 'Favoriler'}
              {v === 'recent' && 'Son'}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Contacts List */}
      <div className="flex-1 overflow-y-auto hide-scrollbar px-3 py-2">
        <AnimatePresence>
          {filteredContacts.map((contact, index) => (
            <motion.div
              key={contact.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.05 }}
              className={`mb-2 rounded-xl ${theme.glass} ${theme.border}
                ${selectedContact?.id === contact.id 
                  ? (isDarkMode ? 'bg-white/10' : 'bg-black/5') 
                  : ''}`}
            >
              <div className="p-3 flex items-center gap-3">
                {/* Avatar */}
                <div className={`w-12 h-12 rounded-full 
                  ${isDarkMode ? 'bg-white/10' : 'bg-black/5'}
                  flex items-center justify-center relative`}>
                  {contact.avatar ? (
                    <img 
                      src={contact.avatar} 
                      alt={contact.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <User2 className={`w-6 h-6 ${theme.text.secondary}`} />
                  )}
                  {contact.favorite && (
                    <div className="absolute -top-1 -right-1">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    </div>
                  )}
                </div>

                {/* Contact Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className={`font-medium ${theme.text.primary} truncate`}>
                      {contact.name}
                    </h3>
                    {contact.recentCall && (
                      <span className={`text-xs px-2 py-0.5 rounded-full
                        ${contact.recentCall === 'missed' 
                          ? 'bg-rose-500/20 text-rose-500' 
                          : contact.recentCall === 'incoming'
                            ? 'bg-emerald-500/20 text-emerald-500'
                            : 'bg-blue-500/20 text-blue-500'}`}>
                        {contact.recentCall === 'missed' && 'Cevapsız'}
                        {contact.recentCall === 'incoming' && 'Gelen'}
                        {contact.recentCall === 'outgoing' && 'Giden'}
                      </span>
                    )}
                  </div>
                  <p className={`text-sm ${theme.text.secondary} truncate`}>
                    {contact.number}
                  </p>
                  {contact.lastContacted && (
                    <p className={`text-xs ${theme.text.secondary} mt-0.5`}>
                      {contact.lastContacted}
                    </p>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="flex items-center gap-1">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleCall(contact)}
                    className={`p-2 rounded-lg ${colors.green.primary} text-white`}
                  >
                    <Phone className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleVideoCall(contact)}
                    className={`p-2 rounded-lg ${colors.blue.primary} text-white`}
                  >
                    <Video className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleContactClick(contact)}
                    className={`p-2 rounded-lg ${theme.buttons.primary}`}
                  >
                    <ChevronRight 
                      className={`w-4 h-4 ${theme.text.primary} transition-transform duration-200
                        ${selectedContact?.id === contact.id ? 'rotate-90' : ''}`} 
                    />
                  </motion.button>
                </div>
              </div>

              {/* Expanded Contact Details */}
              <AnimatePresence>
                {selectedContact?.id === contact.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className={`px-4 py-3 border-t 
                      ${isDarkMode ? 'border-white/10' : 'border-black/5'}`}>
                      <div className="flex gap-2">
                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          onClick={() => navigate('messages')}
                          className={`flex-1 py-2 px-3 rounded-lg ${colors.blue.primary}
                            flex items-center justify-center gap-2 text-white`}
                        >
                          <MessageSquare className="w-4 h-4" />
                          <span className="text-sm">Mesaj</span>
                        </motion.button>
                        {contact.email && (
                          <motion.button
                            whileTap={{ scale: 0.95 }}
                            className={`flex-1 py-2 px-3 rounded-lg ${colors.purple.primary}
                              flex items-center justify-center gap-2 text-white`}
                          >
                            <Mail className="w-4 h-4" />
                            <span className="text-sm">E-posta</span>
                          </motion.button>
                        )}
                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          className={`flex-1 py-2 px-3 rounded-lg 
                            ${contact.favorite ? colors.red.primary : colors.yellow.primary}
                            flex items-center justify-center gap-2 text-white`}
                        >
                          {contact.favorite ? (
                            <Heart className="w-4 h-4" />
                          ) : (
                            <Star className="w-4 h-4" />
                          )}
                          <span className="text-sm">
                            {contact.favorite ? 'Favorilerden Çıkar' : 'Favorilere Ekle'}
                          </span>
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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