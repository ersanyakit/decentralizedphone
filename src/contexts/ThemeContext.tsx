import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Theme {
  gradients: {
    main: string;
    glass: string;
  };
  text: {
    primary: string;
    secondary: string;
  };
  buttons: {
    primary: string;
    secondary: string;
  };
  glass: string;
  border: string;
  backgroundColor: string;
  textColor: string;
}

const lightTheme: Theme = {
  gradients: {
    main: 'bg-gradient-to-b from-gray-50 to-gray-100',
    glass: 'bg-white/80'
  },
  text: {
    primary: 'text-gray-900',
    secondary: 'text-gray-500'
  },
  buttons: {
    primary: 'hover:bg-gray-100 active:bg-gray-200',
    secondary: 'bg-blue-500 hover:bg-blue-600 text-white'
  },
  glass: 'bg-white/80 backdrop-blur-md',
  border: 'ring-1 ring-black/5',
  backgroundColor: 'bg-gray-50',
  textColor: 'text-gray-900'
};

const darkTheme: Theme = {
  gradients: {
    main: 'bg-gradient-to-b from-gray-900 to-gray-950',
    glass: 'bg-gray-900/80'
  },
  text: {
    primary: 'text-gray-100',
    secondary: 'text-gray-400'
  },
  buttons: {
    primary: 'hover:bg-white/10 active:bg-white/20',
    secondary: 'bg-blue-500 hover:bg-blue-600 text-white'
  },
  glass: 'bg-gray-800/30 backdrop-blur-md',
  border: 'ring-1 ring-white/10',
  backgroundColor: 'bg-gray-900',
  textColor: 'text-gray-100'
};

// Özel renkler
export const colors = {
  blue: {
    primary: 'bg-blue-500 hover:bg-blue-600',
    text: 'text-blue-500',
    border: 'ring-blue-500/20'
  },
  green: {
    primary: 'bg-emerald-500 hover:bg-emerald-600',
    text: 'text-emerald-500',
    border: 'ring-emerald-500/20'
  },
  red: {
    primary: 'bg-rose-500 hover:bg-rose-600',
    text: 'text-rose-500',
    border: 'ring-rose-500/20'
  },
  yellow: {
    primary: 'bg-amber-500 hover:bg-amber-600',
    text: 'text-amber-500',
    border: 'ring-amber-500/20'
  },
  purple: {
    primary: 'bg-violet-500 hover:bg-violet-600',
    text: 'text-violet-500',
    border: 'ring-violet-500/20'
  }
};

interface ThemeContextType {
  theme: Theme;
  isDarkMode: boolean;
  toggleTheme: () => void;
  colors: typeof colors;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    darkModeMediaQuery.addEventListener('change', handler);
    return () => darkModeMediaQuery.removeEventListener('change', handler);
  }, []);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 