import { createContext, useContext, useState, ReactNode } from 'react';

export interface Contact {
  id: number;
  name: string;
  address: string;
  email?: string;
  isFavorite: boolean;
  recentCall?: 'missed' | 'incoming' | 'outgoing';
  lastContacted?: string;
  avatar?: string;
  isOnline: boolean;
}

interface ContactsContextType {
  contacts: Contact[];
  addContact: (contact: Omit<Contact, 'id'>) => void;
  removeContact: (id: string) => void;
  updateContact: (id: string, contact: Partial<Contact>) => void;
  toggleFavorite: (id: string) => void;
}

const ContactsContext = createContext<ContactsContextType | undefined>(undefined);

const initialContacts: Contact[] = [
  {
    id: 1,
    name: "Ersan Efendi",
    address: "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96046",
    isOnline: true,
    isFavorite: true
  },
  {
    id: 2,
    name: "Vitalik Buterin",
    address: "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
    isOnline: true,
    isFavorite: true
  },
  {
    id: 3,
    name: "CZ Binance",
    address: "0xF977814e90dA44bFA03b6295A0616a897441aceC",
    isOnline: true,
    isFavorite: false
  }
];

export function ContactsProvider({ children }: { children: ReactNode }) {
  const [contacts, setContacts] = useState<Contact[]>(initialContacts);

  const addContact = (contact: Omit<Contact, 'id'>) => {
    const newContact = {
      ...contact,
      id: Date.now()
    };
    setContacts(prev => [...prev, newContact]);
  };

  const removeContact = (id: string) => {
    setContacts(prev => prev.filter(contact => contact.id.toString() !== id));
  };

  const updateContact = (id: string, updatedContact: Partial<Contact>) => {
    setContacts(prev => prev.map(contact => 
      contact.id.toString() === id ? { ...contact, ...updatedContact } : contact
    ));
  };

  const toggleFavorite = (id: string) => {
    setContacts(prev => prev.map(contact =>
      contact.id.toString() === id ? { ...contact, isFavorite: !contact.isFavorite } : contact
    ));
  };

  return (
    <ContactsContext.Provider value={{ 
      contacts, 
      addContact, 
      removeContact, 
      updateContact,
      toggleFavorite 
    }}>
      {children}
    </ContactsContext.Provider>
  );
}

export function useContacts() {
  const context = useContext(ContactsContext);
  if (context === undefined) {
    throw new Error('useContacts must be used within a ContactsProvider');
  }
  return context;
} 