import { defineStore } from 'pinia';

export const useOrdersStore = defineStore('orders', {
  state: () => ({
    list: [],
    selectedToken: '',
    selectedType: 'buy',
  }),
  actions: {
    setOrders(orders) {
      this.list = orders;
    },
    setSelectedToken(token) {
      this.selectedToken = token;
    },
    setSelectedType(type) {
      this.selectedType = type;
    },
  },
});
