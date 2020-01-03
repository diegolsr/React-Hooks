/* eslint-disable */
export const state = {
  products: [],
  today: '',
};

export const mutations = {
  loadProducts(state, products) {
    state.products = products || [];
  },
  getTime() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const newDate = new Date();
    state.today = `${days[newDate.getDay()]}, ${newDate.getDate()} ${months[newDate.getMonth()]}`;
  }
};
