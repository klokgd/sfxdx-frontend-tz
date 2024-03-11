<template>
  <!-- <div class="place-order"> -->
  <q-card>
    <q-card-header >
      <h4 class='q-ml-sm'>Place the Order</h4>
    </q-card-header>
    <q-card-body>
      <q-form @submit="placeOrder">
        <q-btn-toggle
        class="q-ma-sm"
        v-model="model"
        toggle-color="primary"
        :options="[
          {label: 'Buy', value: 'buy'},
          {label: 'Sell', value: 'sell'}
        ]"
      />
        <div class="row justify-between">
          <q-input
            class="col-5 q-ma-sm"
            v-model="tokenA"
            label="Token A smart contract address"
          />
          <q-input
            class="col-5 q-ma-sm "
            v-model="amountA"
            label="Token A Amount"
            type="number"
          />
          <q-input
            class="col-5 q-ma-sm"
            v-model="tokenB"
            label="Token B smart contract address"
          />
          <q-input
            class="col-5 q-ma-sm"
            v-model="amountB"
            label="Limit price (in Token B)"
            type="number"
          />
          <q-input class="q-ma-sm col-5" v-model="orderPrice" label="Expected order price" />
        </div>
        <q-btn class="q-mb-sm">Place Order</q-btn>
      </q-form>
    </q-card-body>
  </q-card>
  <!-- </div> -->
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SailingComponent',
});
</script>

<style lang="scss" scoped></style>
