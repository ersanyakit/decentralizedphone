import React, { createContext, useContext, ReactNode } from 'react';
import { useRouter } from 'next/router';

interface QueryContextProps {
  action: string | null;
  address: string | null;
}

const QueryContext = createContext<QueryContextProps | undefined>(undefined);

export const QueryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter();

  const action = router.query.action ? String(router.query.action) : null;
  const address = router.query.address ? String(router.query.address) : null;

  return (
    <QueryContext.Provider value={{ action, address }}>
      {children}
    </QueryContext.Provider>
  );
};

export const useQueryContext = () => {
  const context = useContext(QueryContext);
  if (!context) {
    throw new Error('useQueryContext must be used within a QueryProvider');
  }
  return context;
};