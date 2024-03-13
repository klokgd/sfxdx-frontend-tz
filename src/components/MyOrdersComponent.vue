<template>
  <q-card>
    <q-card-header>
      <h4 class="q-ml-sm">My Order</h4>
    </q-card-header>
    <q-table :columns="myOrdersTable" :rows="this.orderStore.myOrders" row-key="name" />
  </q-card>
</template>

<script>
import { useMetamaskStore } from 'src/store/metamask.store';
import { useOrderStore } from 'src/store/order.store';
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'MyOrdersComponent',
  setup() {
    const metamaskStore = useMetamaskStore();
    const orderStore = useOrderStore();
    const isLoggedIn = computed(() => !!metamaskStore.account);
    metamaskStore.$watch('account', orderStore.getMyOrders(null, null, metamaskStore.account, null));
    return {
      myOrdersTable: [
        {
          name: 'type',
          label: 'TYPE',
          align: 'center',
        },
        {
          name: 'side',
          label: 'SIDE',
          align: 'center',
        },
        {
          name: 'amount',
          label: 'AMOUNT',
          align: 'center',
        },
        {
          name: 'price',
          label: 'PRICE',
          align: 'center',
        },
        {
          name: 'filled',
          label: 'FILLED',
          align: 'center',
        },
        {
          name: 'status',
          label: 'STATUS',
          align: 'center',
        },
        {
          name: 'side',
          label: 'SIDE',
          align: 'center',
        },
      ],
      metamaskStore,
      isLoggedIn,
    };
  },
});
</script>

<style lang="scss" scoped></style>
