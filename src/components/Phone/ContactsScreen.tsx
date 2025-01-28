import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Plus, Phone, Video, Mail, Star, Heart, 
         MessageSquare, ChevronRight, User2 } from 'lucide-react';
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
  const { theme, isDarkMode } = useTheme();
  const { navigate } = useNavigation();
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
    navigate('call');
  };

  const handleVideoCall = (contact: Contact) => {
    navigate('videoCall');
  };

  return (
    <div className={`h-full flex flex-col ${theme.gradients.main}`}>
      <Header 
        title="Kişiler" 
        rightAction={
          <motion.button
            whileTap={{ scale: 0.95 }}
            className={`p-2 rounded-xl ${theme.buttons.primary}`}
          >
            <Plus className={`w-5 h-5 ${theme.text.primary}`} />
          </motion.button>
        }
      />
      
      {/* View Selector */}
      <div className="px-4 py-2">
        <div className={`flex gap-2 p-1 rounded-xl ${isDarkMode ? 'bg-black/20' : 'bg-white/20'}`}>
          {['all', 'favorites', 'recent'].map((v) => (
            <motion.button
              key={v}
              onClick={() => setView(v as any)}
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium
                ${view === v 
                  ? `${isDarkMode ? 'bg-white/10' : 'bg-black/5'} ${theme.text.primary}` 
                  : theme.text.secondary}`}
              whileTap={{ scale: 0.98 }}
            >
              {v.charAt(0).toUpperCase() + v.slice(1)}
            </motion.button>
          ))}
        </div>
      </div>

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
      <div className="flex-1 overflow-y-auto hide-scrollbar">
        <div className="px-4 py-2 space-y-2">
          <AnimatePresence>
            {filteredContacts.map((contact) => (
              <motion.div
                key={contact.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`${theme.glass} rounded-xl
                  ${selectedContact?.id === contact.id 
                    ? (isDarkMode ? 'bg-white/15' : 'bg-black/10') 
                    : ''}
                  transition-colors duration-200`}
              >
                <div className="p-3 flex items-center gap-3">
                  {/* Avatar or Initial */}
                  <div className={`w-12 h-12 rounded-full 
                    ${isDarkMode ? 'bg-white/10' : 'bg-black/5'}
                    flex items-center justify-center relative group`}>
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
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
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
                            ? 'bg-red-500/20 text-red-500' 
                            : contact.recentCall === 'incoming'
                              ? 'bg-green-500/20 text-green-500'
                              : 'bg-blue-500/20 text-blue-500'}`}>
                          {contact.recentCall}
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
                  <div className="flex items-center gap-2">
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleCall(contact)}
                      className={`p-2 rounded-xl ${theme.buttons.primary}
                        hover:bg-green-500/20 active:bg-green-500/30 
                        transition-colors duration-200`}
                    >
                      <Phone className={`w-4 h-4 ${theme.text.primary}`} />
                    </motion.button>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleVideoCall(contact)}
                      className={`p-2 rounded-xl ${theme.buttons.primary}
                        hover:bg-blue-500/20 active:bg-blue-500/30 
                        transition-colors duration-200`}
                    >
                      <Video className={`w-4 h-4 ${theme.text.primary}`} />
                    </motion.button>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedContact(contact)}
                      className={`p-2 rounded-xl ${theme.buttons.primary}`}
                    >
                      <ChevronRight className={`w-4 h-4 ${theme.text.primary}`} />
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
                          {[
                            { icon: <MessageSquare className="w-4 h-4" />, label: 'Message' },
                            { icon: <Mail className="w-4 h-4" />, label: 'Email' },
                            { icon: <Heart className="w-4 h-4" />, label: 'Favorite' },
                          ].map((action, index) => (
                            <motion.button
                              key={index}
                              whileTap={{ scale: 0.95 }}
                              className={`flex-1 py-2 px-3 rounded-xl ${theme.buttons.primary}
                                flex items-center justify-center gap-2`}
                            >
                              {action.icon}
                              <span className="text-sm">{action.label}</span>
                            </motion.button>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
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