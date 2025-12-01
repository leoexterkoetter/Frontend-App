import api from './axios';

export const contasApi = {
  listar: async (usuarioId) => {
    const response = await api.get(`/api/contas/${usuarioId}`);
    return response.data;
  },

  criar: async (data) => {
    const response = await api.post('/api/contas', data);
    return response.data;
  },

  atualizar: async (id, data) => {
    const response = await api.put(`/api/contas/${id}`, data);
    return response.data;
  },

  deletar: async (id) => {
    const response = await api.delete(`/api/contas/${id}`);
    return response.data;
  },

  calcularSaldo: async (id) => {
    const response = await api.get(`/api/contas/${id}/saldo`);
    return response.data;
  }
};
