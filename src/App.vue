<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue';
import { useMetamaskStore } from './store/metamask.store';

export default defineComponent({
  name: 'App',
  setup() {
    const web3ModalStore = useMetamaskStore();
    return {
      web3ModalStore,
    };
  },
  async beforeCreate() {
    await this.web3ModalStore.connect();
    await this.web3ModalStore.interactionSmartContract();
  },
});
</script>./store/wallet.store
./store/metamask.store
