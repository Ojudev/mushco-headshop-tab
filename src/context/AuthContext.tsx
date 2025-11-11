import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '../services/api';
import { useToast } from '../components/ui/use-toast';

// 1. Definição de Tipos
interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

// 2. Criação do Contexto
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// 3. Provedor do Contexto
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  const isAuthenticated = !!user;

  // Lógica para obter o usuário do localStorage e configurar o estado
  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    const storedUser = localStorage.getItem('user');

    if (storedToken && storedUser) {
        try {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);
            // O interceptor em api.ts já lidará com o token no localStorage
        } catch (error) {
            console.error("Falha ao analisar usuário armazenado:", error);
            localStorage.removeItem('authToken');
            localStorage.removeItem('user');
        }
    }
    setIsLoading(false);
  }, []);

  const handleAuthResponse = (userData: any, token: string) => {
    const { id, name, email, role } = userData;
    const authUser: User = { id, name, email, role };

    // Armazenar no localStorage (crucial para o interceptor da API)
    localStorage.setItem('authToken', token);
    localStorage.setItem('user', JSON.stringify(authUser));
    setUser(authUser);
  };

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const response = await api.post('/auth/login', { email, password });
      
      handleAuthResponse(response.data.data, response.data.data.token);

      toast({
        title: "Login bem-sucedido!",
        description: `Bem-vindo(a) de volta, ${response.data.data.name}.`,
      });

    } catch (error: any) {
      const message = error.response?.data?.error || 'Falha ao realizar login.';
      toast({
        title: "Erro de Login",
        description: message,
        variant: "destructive",
      });
      throw new Error(message); // Propagar erro para o formulário
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    try {
      const response = await api.post('/auth/register', { name, email, password });

      handleAuthResponse(response.data.data, response.data.data.token);
      
      toast({
        title: "Registo bem-sucedido!",
        description: `Seu cadastro foi concluído, ${response.data.data.name}.`,
      });
    } catch (error: any) {
      const message = error.response?.data?.error || 'Falha ao registrar.';
      toast({
        title: "Erro de Registo",
        description: message,
        variant: "destructive",
      });
      throw new Error(message);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    setUser(null);
    toast({
      title: "Logout efetuado",
      description: "Você foi desconectado com sucesso.",
    });
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

// 4. Hook para uso
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};