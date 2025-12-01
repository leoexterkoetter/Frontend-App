import api from './axios';

export const authApi = {
  login: async (email, senha) => {
    try {
      console.log("📤 Enviando login:", { email, senha });
      const response = await api.post('/api/login', { email, senha });
      console.log("📥 Recebido login:", response.data);
      return response.data;
    } catch (err) {
      console.error("❌ ERRO LOGIN:", err.response?.data || err.message);
      throw err;
    }
  },

  cadastro: async (nome, email, senha) => {
    try {
      console.log("📤 Enviando cadastro:", { nome, email, senha });
      const response = await api.post('/api/cadastro', { nome, email, senha });
      console.log("📥 Recebido cadastro:", response.data);
      return response.data;
    } catch (err) {
      console.error("❌ ERRO CADASTRO:", err.response?.data || err.message);
      throw err;
    }
  }
};
