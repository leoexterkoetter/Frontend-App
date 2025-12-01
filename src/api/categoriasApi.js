import api from './axios';

export const categoriasApi = {
  listar: async (usuarioId) => {
    const response = await api.get(`/api/categorias/${usuarioId}`);
    return response.data;
  },

  criar: async (data) => {
    const response = await api.post('/api/categorias', data);
    return response.data;
  },

  atualizar: async (id, data) => {
    const response = await api.put(`/api/categorias/${id}`, data);
    return response.data;
  },

  deletar: async (id) => {
    const response = await api.delete(`/api/categorias/${id}`);
    return response.data;
  }
};
