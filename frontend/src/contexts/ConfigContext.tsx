import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '../types';

interface Config {
  name: string;
  company: string;
  tagline: string;
  description: string;
  heroDescription: string;
  whatsapp: {
    number: string;
    display: string;
    messageTemplate: string;
  };
  email: string;
  address: string;
  googleMapsUrl?: string;
  instagram: {
    main: string;
    mainLink: string;
    dtf: string;
    dtfLink: string;
  };
  facebook: string;
  tiktok: string;
  shopee?: string;
  shopeeUrl?: string;
}

interface AppData {
  config: Config | null;
  products: Product[];
  loading: boolean;
  error: string | null;
}

const ConfigContext = createContext<AppData>({ config: null, products: [], loading: true, error: null });

export function AppProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<AppData>({ config: null, products: [], loading: true, error: null });

  useEffect(() => {
    Promise.all([
      fetch('/api/config').then(r => r.ok ? r.json() : Promise.reject('Failed to fetch config')),
      fetch('/api/products').then(r => r.ok ? r.json() : Promise.reject('Failed to fetch products'))
    ]).then(([config, products]) => {
      setData({ config, products, loading: false, error: null });
    }).catch(err => {
      setData(prev => ({ ...prev, loading: false, error: err.toString() }));
    });
  }, []);

  return <ConfigContext.Provider value={data}>{children}</ConfigContext.Provider>;
}

export const useAppConfig = () => useContext(ConfigContext);
