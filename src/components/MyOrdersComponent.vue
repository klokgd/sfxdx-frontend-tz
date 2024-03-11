<template>
  <q-card>
    <q-card-header>
      <h4  class='q-ml-sm'>My Order</h4>
    </q-card-header>
    <q-table :columns="myOrdersTable" :rows="myOrdersRow" row-key="name" />
  </q-card>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MyOrdersComponent',
  setup() {
    const myOrdersTable = [
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
    ];
    const myOrdersRow = [
      { type: 'xxx' },
      { side: 'xxx' },
      { amount: 'xxx' },
      { price: 'xxx' },
      { filled: 'xxx' },
      { status: 'xxx' },
      { side: 'xxx' },
    ];
    return { myOrdersTable, myOrdersRow };
  },
});
</script>

<style lang="scss" scoped></style>
