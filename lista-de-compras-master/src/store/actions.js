import axios from 'axios';

/* eslint-disable */
const sleep = (ms) => { 
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const actions = {
  async getTime({ commit }) {
    commit('getTime');
  },
  async getAllProducts({ commit }) {
    const response = await axios.get(`/products`);

    if(response && response.data) {
      const updatedProducts = response.data;
      commit('loadProducts', updatedProducts);
    }
  },

  async addProduct({ dispatch }, data) {
    await axios.post(`/products`, { text: data });

    await dispatch('getAllProducts');
  },

  async checkProduct({ dispatch }, data) {
    await axios.put(`/products/${data.id}`, { bought: data.bought });

    await dispatch('getAllProducts');
  },

  async removeProduct({ dispatch }, id) {
    await axios.delete(`/products/${id}`);

    await dispatch('getAllProducts');
  },
};
