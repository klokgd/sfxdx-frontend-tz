import { defineStore } from 'pinia';
import axios from 'axios';
import { useMetamaskStore } from './metamask.store';

export const useOrderStore = defineStore('orders', {
  state: () => ({
    list: [],
    selectedToken: '',
    selectedType: 'buy',
    metamaskStore: useMetamaskStore(),
    orders: [],
    matchingOrders: [],
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
    async getMyOrders(tokenA, tokenB, user, active) {
      const hostname = process.env.HOSTNAME;
      const res = await axios.get(`${hostname}/getOrders`, {
        params: {
          tokenA,
          tokenB,
          user,
          active,
        },
      });
      const row = res.data.map((order) => ({
        cancel: order.isCancel,
        amount: order.amountA,
        price: order.amountB,
      }));
      this.orders = row;
    },
    checkNetwork() {
      if (window.ethereum.networkVersion === '5') {
        return true;
      }
      return false;
    },
    async getMatchingOrders(tokenA, tokenB, amountA, amountB) {
      const hostname = process.env.HOSTNAME;
      const res = await axios.get(`${hostname}/getMatchingOrders`, {
        params: {
          tokenA,
          tokenB,
          amountA,
          amountB,
        },
      });
      this.matchingOrders = res.data;
    },

    async createOrder(tokenA, tokenB, amountA, amountB) {
      const res = await this.metamaskStore.contract.methods
        .createOrder(tokenA, tokenB, amountA, amountB)
        .send({
          from: window.ethereum.selectedAddress,
          gas: 500000,
          gasPrice: '5000000000',
        });
      return res;
    },
  },
});
