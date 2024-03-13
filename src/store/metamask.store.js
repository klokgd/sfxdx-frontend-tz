import { defineStore } from 'pinia';
import detectEthereumProvider from '@metamask/detect-provider';
import Web3 from 'web3';
import abi from '../libs/abi.json';

export const useMetamaskStore = defineStore('web3ModalStore', {
  state: () => ({
    modal: null,
    provider: null,
    account: null,
    contract: null,
    chains: [],
  }),

  actions: {
    async connect() {
      await detectEthereumProvider();
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const account = accounts[0];
      this.account = account;
      this.interactionSmartContract();
    },
    async interactionSmartContract() {
      const web3 = new Web3(window.ethereum);
      const address = process.env.CONTRACT_ADDRESS;
      this.contract = new web3.eth.Contract(abi, address);
    },
  },
});
