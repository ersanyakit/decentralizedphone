import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, ChevronLeft } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useNavigation } from '@/contexts/NavigationContext';
import { Contact, useContacts } from '@/contexts/ContactsContext';
import { Header } from './components/Header';

interface NewMessageScreenProps {
  contactId?: number;
  name?: string;
  address?: string;
}

export function NewMessageScreen({ contactId, name, address }: NewMessageScreenProps) {
  const { theme, colors } = useTheme();
  const { navigate, goBack } = useNavigation();
  const { contacts } = useContacts();
  const [message, setMessage] = useState('');
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  useEffect(() => {
    if (contactId) {
      const contact = contacts.find(c => c.id === contactId);
      if (contact) {
        setSelectedContact(contact);
      } else {
        navigate('contacts', { selectionMode: 'message' });
      }
    } else if (!name || !address) {
      navigate('contacts', { selectionMode: 'message' });
    }
  }, [contactId, name, address]);

  const handleSend = () => {
    if (message.trim() && (selectedContact || (name && address))) {
      // Mesaj gönderme işlemi
      navigate('messages', { 
        contactId: selectedContact?.id || contactId,
        name: selectedContact?.name || name,
        address: selectedContact?.address || address
      });
    }
  };

  return (
    <div className={`h-full flex flex-col ${theme.gradients.main}`}>
      <Header
        title="Yeni Mesaj"
        subtitle={selectedContact?.name || name}
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

      <div className="flex-1 p-4">
        {(selectedContact || (name && address)) && (
          <div className={`${theme.glass} rounded-2xl p-4 mb-4 ${theme.border}`}>
            <p className={`text-sm ${theme.text.primary}`}>
              {selectedContact?.name || name}
            </p>
            <p className={`text-xs ${theme.text.secondary} mt-1`}>
              {(selectedContact?.address || address)?.slice(0, 6)}...
              {(selectedContact?.address || address)?.slice(-4)}
            </p>
          </div>
        )}

        <div className={`flex-1 ${theme.glass} rounded-2xl p-4 ${theme.border}`}>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Mesajınızı yazın..."
            className={`w-full h-full bg-transparent resize-none outline-none
              ${theme.text.primary} placeholder:${theme.text.secondary}`}
          />
        </div>
      </div>

      <div className="p-4">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleSend}
          disabled={!message.trim()}
          className={`w-full py-3 rounded-xl flex items-center justify-center gap-2
            ${message.trim() ? colors.blue.primary : theme.buttons.disabled}
            transition-all duration-200`}
        >
          <Send className={`w-5 h-5 ${message.trim() ? 'text-white' : theme.text.secondary}`} />
          <span className={`font-medium ${message.trim() ? 'text-white' : theme.text.secondary}`}>
            Gönder
          </span>
        </motion.button>
      </div>
    </div>
  );
} 