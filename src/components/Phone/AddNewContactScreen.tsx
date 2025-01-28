import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, User, Phone, Mail, Save } from 'lucide-react';
import { phoneTheme } from '@/utils/phoneTheme';

interface AddNewContactScreenProps {
  onBack: () => void;
  onSave: (contact: { name: string; number: string; email?: string }) => void;
}

export function AddNewContactScreen({ onBack, onSave }: AddNewContactScreenProps) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSave = () => {
    if (name && number) {
      onSave({ name, number, email });
      onBack();
    }
  };

  return (
    <div className={`h-full relative ${phoneTheme.gradients.main}`}>
      {/* Dekoratif arka plan */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <div className="relative flex items-center justify-between px-6 pt-4 pb-2">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={onBack}
          className="p-2 -ml-2 rounded-xl hover:bg-white/10"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </motion.button>
        <h1 className={`text-xl font-semibold ${phoneTheme.text.primary}`}>
          Yeni Kişi
        </h1>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleSave}
          disabled={!name || !number}
          className={`p-2 -mr-2 rounded-xl ${
            name && number ? 'hover:bg-white/10' : 'opacity-50'
          }`}
        >
          <Save className="w-6 h-6 text-white" />
        </motion.button>
      </div>

      {/* Form */}
      <div className="px-6 pt-4">
        <div className="space-y-4">
          <div className={`${phoneTheme.gradients.glass} rounded-2xl p-4`}>
            <div className="flex items-center gap-4">
              <User className="w-6 h-6 text-white/60" />
              <input
                type="text"
                placeholder="İsim"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 bg-transparent text-white placeholder:text-white/40 
                  focus:outline-none text-lg"
              />
            </div>
          </div>

          <div className={`${phoneTheme.gradients.glass} rounded-2xl p-4`}>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-white/60" />
              <input
                type="tel"
                placeholder="Telefon"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="flex-1 bg-transparent text-white placeholder:text-white/40 
                  focus:outline-none text-lg"
              />
            </div>
          </div>

          <div className={`${phoneTheme.gradients.glass} rounded-2xl p-4`}>
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-white/60" />
              <input
                type="email"
                placeholder="E-posta (İsteğe bağlı)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent text-white placeholder:text-white/40 
                  focus:outline-none text-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 