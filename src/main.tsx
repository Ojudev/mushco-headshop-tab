import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { AuthProvider } from './context/AuthContext.tsx'; // Importe o novo provedor
import { StoreProvider } from './context/StoreContext.tsx'; // Mantém o StoreProvider
import { Toaster } from './components/ui/toaster.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <StoreProvider>
        <App />
        <Toaster />
      </StoreProvider>
    </AuthProvider>
  </React.StrictMode>,
);