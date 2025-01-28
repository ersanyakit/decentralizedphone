import { createContext, useContext, useState, ReactNode } from 'react';

type Screen = 'lock' | 'home' | 'dial' | 'contacts' | 'call' | 'videoCall' | 
              'messages' | 'messageDetail' | 'newMessage';

interface NavigationContextType {
  currentScreen: Screen;
  navigate: (screen: Screen, params?: any) => void;
  goBack: () => void;
  params: any;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

interface NavigationProviderProps {
  children: ReactNode;
}

export function NavigationProvider({ children }: NavigationProviderProps) {
  const [currentScreen, setCurrentScreen] = useState<Screen>('lock');
  const [screenHistory, setScreenHistory] = useState<Screen[]>(['lock']);
  const [params, setParams] = useState<any>(null);

  const navigate = (screen: Screen, newParams?: any) => {
    setScreenHistory(prev => [...prev, screen]);
    setCurrentScreen(screen);
    setParams(newParams || null);
  };

  const goBack = () => {
    if (screenHistory.length > 1) {
      const newHistory = [...screenHistory];
      newHistory.pop(); // Remove current screen
      const previousScreen = newHistory[newHistory.length - 1];
      setScreenHistory(newHistory);
      setCurrentScreen(previousScreen);
      setParams(null);
    }
  };

  return (
    <NavigationContext.Provider value={{ currentScreen, navigate, goBack, params }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
} 