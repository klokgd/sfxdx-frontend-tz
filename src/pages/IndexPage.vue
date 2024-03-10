<template>
  <div class="orderbook__container">
    <EssentialLink/>

    <SailingComponent class="orderbook__sailing"/>

    <AllOrdersComponent class="orderbook__allOrders"/>

    <MyOrdersComponent class="orderbook__myOrders"/>

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

<style>
.orderbook__container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto min-content 20em 1fr;

  grid-template-areas:
    'mo mts'
    'mlc mts'
}

.orderbook__sailing {
  grid-area: 'mo'
}

.orderbook__allOrders {
  grid-area: 'mts';
}

.orderbook__myOrders {
  grid-area: 'mlc';
}
</style>
