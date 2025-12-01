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

  // Carrega usuário salvo no navegador
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');
    
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
    }

    setLoading(false);
  }, []);

  // LOGIN
  const login = async (email, senha) => {
    try {
      const data = await authApi.login(email, senha);
      console.log("🔍 RESPOSTA DO BACKEND LOGIN:", data);

      // Aceita vários formatos de backend
      const userData = {
        id: data.id || data.user?.id || data.usuario?.id,
        nome: data.nome || data.user?.nome || data.usuario?.nome,
        email: data.email || data.user?.email || data.usuario?.email,
      };

      // Segurança: se o back não mandar ID → erro
      if (!userData.id) {
        console.error("❌ ERRO: Backend não enviou ID válido:", data);
        toast.error("Erro inesperado: resposta inválida do servidor.");
        return false;
      }

      // Salva estado e localStorage
      setUser(userData);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(userData));

      toast.success(`Bem-vindo, ${userData.nome}!`);
      return true;

    } catch (error) {
      const message = error.response?.data?.error || 'Erro ao fazer login';
      toast.error(message);
      return false;
    }
  };

  // CADASTRO
  const cadastro = async (nome, email, senha) => {
    try {
      const data = await authApi.cadastro(nome, email, senha);

      const userData = {
        id: data.id,
        nome: data.nome,
        email: data.email
      };

      setUser(userData);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(userData));

      toast.success('Cadastro realizado com sucesso!');
      return true;

    } catch (error) {
      const message = error.response?.data?.error || 'Erro ao cadastrar';
      toast.error(message);
      return false;
    }
  };

  // LOGOUT
  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    toast.success('Logout realizado');
  };

  // ⚠️ Proteção contra renderização antes de carregar user
  if (loading) {
    return (
      <div className="text-white w-full h-screen flex items-center justify-center">
        Carregando...
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, cadastro, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
