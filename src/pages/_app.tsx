import { NextUIProvider } from '@nextui-org/react';
import type { AppProps } from 'next/app';
import '../globals.css';
import React, { useEffect } from 'react';
import { ChainIdProvider } from '@/context/ChainIdProvider';
import { FirebaseProvider } from '@/context/FirebaseProvider';
import { QueryProvider } from '@/context/GlobalQueryContext';
import { Web3Provider } from '@/context/web3modal';
import { ContactsProvider } from '@/contexts/ContactsContext';




const App = ({ Component, pageProps }: AppProps) => (
  <>
    <NextUIProvider>
    <FirebaseProvider>

      <QueryProvider>

        <Web3Provider>
          <ChainIdProvider>

              <ContactsProvider>
                <main className={`text-base`}>
                  <Component {...pageProps} />
                </main>
              </ContactsProvider>
          </ChainIdProvider>

        </Web3Provider>

      </QueryProvider>
      </FirebaseProvider>
    </NextUIProvider>
  </>
);

export default App;
