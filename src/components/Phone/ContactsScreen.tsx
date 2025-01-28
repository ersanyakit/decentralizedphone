import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Plus, Phone, Video, Mail } from 'lucide-react';
import { phoneTheme } from '@/utils/phoneTheme';
import { AddNewContactScreen } from './AddNewContactScreen';

interface Contact {
  id: number;
  name: string;
  number: string;
  email?: string;
}

export function ContactsScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showAddContact, setShowAddContact] = useState(false);
  const [contacts, setContacts] = useState<Contact[]>([
    { 
      id: 1, 
      name: 'Alice Johnson', 
      number: '+1 (234) 567-8901',
      email: 'alice@example.com'
    },
    { 
      id: 2, 
      name: 'Bob Smith', 
      number: '+1 (345) 678-9012',
      email: 'bob@example.com'
    },
    { 
      id: 3, 
      name: 'Charlie Brown', 
      number: '+1 (456) 789-0123',
      email: 'charlie@example.com'
    },
    { 
      id: 4, 
      name: 'David Wilson', 
      number: '+1 (567) 890-1234',
      email: 'david@example.com'
    }
  ]);

  const handleAddContact = (newContact: Omit<Contact, 'id'>) => {
    setContacts(prev => [...prev, {
      ...newContact,
      id: Math.max(...prev.map(c => c.id)) + 1
    }]);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.number.includes(searchQuery)
  );

  return (
    <div className={`h-full relative ${phoneTheme.gradients.main}`}>
      <AnimatePresence mode="wait">
        {showAddContact ? (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="absolute inset-0 z-10"
          >
            <AddNewContactScreen
              onBack={() => setShowAddContact(false)}
              onSave={(contact) => {
                handleAddContact(contact);
                setShowAddContact(false);
              }}
            />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="h-full"
          >
            {/* Dekoratif arka plan efektleri */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
            </div>

            {/* Ana içerik */}
            <div className="relative h-full flex flex-col">
              {/* Başlık */}
              <div className="pt-4 px-6 pb-2">
                <h1 className={`text-2xl font-semibold ${phoneTheme.text.primary}`}>
                  Kişiler
                </h1>
              </div>

              {/* Arama çubuğu */}
              <div className="px-4 mb-4">
                <div className={`${phoneTheme.gradients.glass} rounded-2xl`}>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full h-12 bg-transparent pl-12 pr-4 text-[15px] font-medium text-white placeholder:text-white/40 focus:outline-none"
                      placeholder="Kişilerde ara..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onFocus={() => setIsSearchFocused(true)}
                      onBlur={() => setIsSearchFocused(false)}
                    />
                    <Search 
                      className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5
                        ${isSearchFocused ? 'text-white/70' : 'text-white/40'}`}
                    />
                  </div>
                </div>
              </div>

              {/* Kişiler listesi */}
              <div className="flex-1 px-4 overflow-y-auto">
                <AnimatePresence>
                  {filteredContacts.map((contact, index) => (
                    <motion.div
                      key={contact.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ delay: index * 0.05 }}
                      className={`mb-2 ${phoneTheme.gradients.glass} rounded-2xl p-4`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 rounded-full ${phoneTheme.gradients.glass} flex items-center justify-center`}>
                            <span className={`text-lg font-medium ${phoneTheme.text.primary}`}>
                              {contact.name[0]}
                            </span>
                          </div>
                          <div>
                            <h3 className={`text-base font-medium ${phoneTheme.text.primary}`}>
                              {contact.name}
                            </h3>
                            <p className={`text-sm ${phoneTheme.text.secondary}`}>
                              {contact.number}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            className={`p-2.5 rounded-full ${phoneTheme.buttons.primary}`}
                          >
                            <Phone className="w-4 h-4 text-white" />
                          </motion.button>
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            className={`p-2.5 rounded-full ${phoneTheme.buttons.primary}`}
                          >
                            <Video className="w-4 h-4 text-white" />
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Plus butonu güncellendi */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAddContact(true)}
                className={`absolute bottom-6 right-6 w-14 h-14 rounded-full 
                  ${phoneTheme.buttons.primary} flex items-center justify-center`}
              >
                <Plus className="w-6 h-6 text-white" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 