<template>
<!-- <div class="place-order"> -->
  <q-card>
    <q-card-header>
      <h1>Place the Order</h1>
    </q-card-header>
    <q-card-body>
      <q-form @submit="placeOrder">
        <q-input v-model="token" label="Token Address" />
        <q-input v-model="amount" label="Token Amount" type="number" />
        <q-select v-model="type" label="Type">
          <option value="buy">Buy</option>
          <option value="sell">Sell</option>
        </q-select>
        <q-input v-model="limitPrice" label="Limit Price (in Token B)" />
        <q-btn>Place Order</q-btn>
      </q-form>
    </q-card-body>
    <q-card-footer>
      <div class="expected-order-price">
        <span>Expected Order Price:</span>
        <span>{{ expectedOrderPrice }}</span>
      </div>
    </q-card-footer>
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
