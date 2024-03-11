<template>
  <div class="orderbook__container">

    <SailingComponent class="orderbook__sailing q-ma-xs"/>
    <AllOrdersComponent class="orderbook__allOrders q-ma-xs"/>
    <MyOrdersComponent class="orderbook__myOrders q-ma-xs"/>

  </div>
</template>

<script>
import { defineComponent } from 'vue';
import AllOrdersComponent from 'components/AllOrdersComponent.vue';
import MyOrdersComponent from 'components/MyOrdersComponent.vue';
import SailingComponent from 'components/SailingComponent.vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    AllOrdersComponent, MyOrdersComponent, SailingComponent,
  },
});
</script>

<style scoped>
.orderbook__container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto min-content 20em 1fr;
  grid-template-areas:
    'os oao'
    'omo oao'
}

.orderbook__sailing {
  grid-area: os
}
.orderbook__myOrders {
  grid-area: omo;
}
.orderbook__allOrders {
  grid-area: oao;
}

</style>
