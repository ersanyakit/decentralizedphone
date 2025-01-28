import { useState } from 'react';
 
import { Button } from '@nextui-org/react';
import { LockScreen } from '@/components/Phone/LockScreen';
import { HomeScreen } from '@/components/Phone/HomeScreen';
import { ContactsScreen } from '@/components/Phone/ContactsScreen';
import { DialScreen } from '@/components/Phone/DialScreen';
import { CallScreen } from '@/components/Phone/CallScreen';
import { Phone } from '@/components/Phone';
import { ActiveCallScreen } from '@/components/Phone/ActiveCallScreen';
import { ActiveVideoCallScreen } from '@/components/Phone/ActiveVideoCallScreen';


export default function Home() {
  const [screen, setScreen] = useState('lock');

  const screens: Record<string, JSX.Element> = {
    lock: <LockScreen />,
    home: <HomeScreen />,
    dial: <DialScreen />,
    contacts: <ContactsScreen />,
    incoming: <CallScreen type="incoming" name="Alice" />,
    outgoing: <CallScreen type="outgoing" name="Bob" />,
    video: <CallScreen type="video" name="Charlie" />,
    active: <ActiveCallScreen  name="Bob" />,
    activeAudio: <ActiveVideoCallScreen  name="Charlie" />,
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="fixed top-4 left-4 space-x-2">
        {Object.keys(screens).map((screenName) => (
          <Button
            key={screenName}
            size="sm"
            onPress={() => setScreen(screenName)}
            className="capitalize"
          >
            {screenName}
          </Button>
        ))}
      </div>
      <Phone>
        {screens[screen]}
      </Phone>
    </div>
  );
}