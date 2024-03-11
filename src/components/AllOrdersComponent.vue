<template>
  <q-card>
    <q-card-header >
      <h4 class='q-ml-sm'>Orderbook</h4>
    </q-card-header>
    <q-table :columns="tablesSizeEth" :rows="rowSizeEth" row-key="name" />
    <q-table
      :columns="tableMarketPrice"
      :rows="rowMarketPrice"
      row-key="name"
    />
  </q-card>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AllOrdersComponent',

  setup() {
    const sizeEthTable = [
      {
        name: 'sizeEth',
        label: 'Size ETH',
        align: 'center',
      },
      {
        name: 'priceUSDT',
        label: 'Price USDT',
        align: 'center',
      },
    ];
    const sizeEthRow = [
      {
        sizeEth: 'xxx',
        priceUSDT: 'xxx',
      },
    ];
    const marketPriceTable = [
      {
        name: 'marketPrice',
        label: 'Market Price',
        align: 'center',
      },
      {
        name: 'priceUSDT',
        label: 'Price USDT',
        align: 'center',
      },
    ];
    const marketPriceRow = [
      {
        marketPrice: 'xxx',
        priceUSDT: 'xxx',
      },
    ];
    return {
      tablesSizeEth: sizeEthTable,
      rowSizeEth: sizeEthRow,
      tableMarketPrice: marketPriceTable,
      rowMarketPrice: marketPriceRow,
    };
  },
});
</script>

<style lang="scss" scoped></style>
