import { NextUIProvider } from '@nextui-org/react';
import type { AppProps } from 'next/app';
import '../globals.css';
import React, { useEffect } from 'react';
import { ChainIdProvider } from '@/context/ChainIdProvider';
import { FirebaseProvider } from '@/context/FirebaseProvider';
import { QueryProvider } from '@/context/GlobalQueryContext';
import { Web3Provider } from '@/context/web3modal';
import { ContactsProvider } from '@/contexts/ContactsContext';
import { WebRTCProvider } from '@/contexts/WebRTCContext';




const App = ({ Component, pageProps }: AppProps) => (
  <>
    <NextUIProvider>
    <FirebaseProvider>

      <QueryProvider>
      <WebRTCProvider>

        <Web3Provider>
          <ChainIdProvider>

              <ContactsProvider>
                <main className={`text-base`}>
                  <Component {...pageProps} />
                </main>
              </ContactsProvider>
          </ChainIdProvider>

        </Web3Provider>
        </WebRTCProvider>

      </QueryProvider>
      </FirebaseProvider>
    </NextUIProvider>
  </>
);

export default App;
