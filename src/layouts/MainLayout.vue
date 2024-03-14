<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> OrderBook App </q-toolbar-title>

        <w3m-button />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue';
import { useMetamaskStore } from 'src/store/metamask.store';

export default defineComponent({
  name: 'MainLayout',
  setup() {
    return {
      metamaskStore: useMetamaskStore(),
    };
  },

  beforeCreate() {
    this.metamaskStore.connect();
  },
});
</script>src/store/metamask.store
