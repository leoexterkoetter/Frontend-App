import api from './axios';

export const transacoesApi = {
  listar: async (usuarioId) => {
    const response = await api.get(`/api/transacoes/${usuarioId}`);
    return response.data;
  },

  criar: async (data) => {
    const response = await api.post('/api/transacoes', data);
    return response.data;
  },

  criarParcelada: async (data) => {
    const response = await api.post('/api/transacoes/parcelada', data);
    return response.data;
  },

  atualizar: async (id, data) => {
    const response = await api.put(`/api/transacoes/${id}`, data);
    return response.data;
  },

  deletar: async (id) => {
    const response = await api.delete(`/api/transacoes/${id}`);
    return response.data;
  }
};
