import { ThemeProvider } from '@/contexts/ThemeContext';
import { NavigationProvider } from '@/contexts/NavigationContext';
import { Phone } from '@/components/Phone';

export default function Home() {
  return (
    <ThemeProvider>
      <NavigationProvider>
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
          <Phone />
        </div>
      </NavigationProvider>
    </ThemeProvider>
  );
}