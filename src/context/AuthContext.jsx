import React, { createContext, useState, useContext, useEffect } from 'react';
import { authApi } from '../api/authApi';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Carregar usuário do localStorage
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');
    
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, senha) => {
    try {
      const data = await authApi.login(email, senha);
      
      setUser({
        id: data.id,
        nome: data.nome,
        email: data.email
      });
      
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify({
        id: data.id,
        nome: data.nome,
        email: data.email
      }));

      toast.success(`Bem-vindo, ${data.nome}!`);
      return true;
    } catch (error) {
      const message = error.response?.data?.error || 'Erro ao fazer login';
      toast.error(message);
      return false;
    }
  };

  const cadastro = async (nome, email, senha) => {
    try {
      const data = await authApi.cadastro(nome, email, senha);
      
      setUser({
        id: data.id,
        nome: data.nome,
        email: data.email
      });
      
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify({
        id: data.id,
        nome: data.nome,
        email: data.email
      }));

      toast.success('Cadastro realizado com sucesso!');
      return true;
    } catch (error) {
      const message = error.response?.data?.error || 'Erro ao cadastrar';
      toast.error(message);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    toast.success('Logout realizado');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, cadastro, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
