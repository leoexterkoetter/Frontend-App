import api from './axios';

export const caixinhasApi = {
  listar: async (usuarioId) => {
    const response = await api.get(`/api/caixinhas/${usuarioId}`);
    return response.data;
  },

  criar: async (data) => {
    const response = await api.post('/api/caixinhas', data);
    return response.data;
  },

  atualizar: async (id, data) => {
    const response = await api.put(`/api/caixinhas/${id}`, data);
    return response.data;
  },

  pagarParcela: async (id, valor) => {
    const response = await api.put(`/api/caixinhas/${id}/pagar`, { valor });
    return response.data;
  },

  deletar: async (id) => {
    const response = await api.delete(`/api/caixinhas/${id}`);
    return response.data;
  }
};
