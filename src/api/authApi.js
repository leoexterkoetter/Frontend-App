import api from './axios';

export const authApi = {
  login: async (email, senha) => {
    const response = await api.post('/api/login', { email, senha });
    return response.data;
  },

  cadastro: async (nome, email, senha) => {
    const response = await api.post('/api/cadastro', { nome, email, senha });
    return response.data;
  }
};
