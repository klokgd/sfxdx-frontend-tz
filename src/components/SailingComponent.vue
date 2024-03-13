<template>
  <q-card>
    <q-card-header>
      <h4 class="q-ml-sm">Place the Order</h4>
    </q-card-header>
    <q-card-body>
      <q-form @submit="createOrder">
        <q-btn-toggle
          class="q-ma-sm"
          v-model="orderOption"
          toggle-color="primary"
          :options="[
            { label: 'Buy', value: 'buy' },
            { label: 'Sell', value: 'sell' },
          ]"
        />
        <div class="row justify-between">
          <q-select
            :options="tokenOptions"
            class="col-5 q-ma-sm"
            v-model="tokenA"
            label="Token A smart contract address"
            :rules="[(val) => !!val || 'This field is required']"
          />
          <q-input
            class="col-5 q-ma-sm"
            v-model="amountA"
            label="Token A Amount"
            type="number"
            :rules="[
              (val) => val > 0 || 'Amount must be greater than zero',
            ]"
          />
          <q-select
            :options="tokenOptions"
            class="col-5 q-ma-sm"
            v-model="tokenB"
            label="Token B smart contract address"
            :rules="[(val) => !!val || 'This field is required']"
          />
          <q-input
            class="col-5 q-ma-sm"
            v-model="amountB"
            label="Limit price (in Token B)"
            type="number"
            :rules="[
              (val) => val > 0 || 'Amount must be greater than zero'
            ]"
          />
          <q-input
          readonly=""
            class="q-ma-sm col-5"
            v-model="orderPrice"
            label="Expected order price"
            :loading="loadingPrice"
          />
        </div>
        <q-btn
          :disabled="!validateForm"
          @click="createOrder(tokenA, tokenB, amountA, amountB)"
          class="q-mb-sm"
          >Place Order</q-btn
        >
      </q-form>
    </q-card-body>
  </q-card>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useOrderStore } from 'src/store/order.store';
import axios from 'axios';
import { Notify } from 'quasar';
import { useMetamaskStore } from '../store/metamask.store';

export default defineComponent({
  name: 'SailingComponent',
  setup() {
    return {
      orderOption: ref({ label: 'Sell', value: 'sell' }),
      tokenA: ref(''),
      tokenB: ref(''),
      amountA: ref(0),
      amountB: ref(0),
      orderPrice: ref(0),
      web3ModalStore: useMetamaskStore(),
      orderStore: useOrderStore(),
      // validateForm: ref(false),
      loadingPrice: ref(false),
      tokenOptions: [
        {
          label: 'ETH',
          value: '0xdD69DB25F6D620A7baD3023c5d32761D353D3De9',
          category: '1',
        },
        {
          label: 'DAI',
          value: '0x2f3A40A3db8a7e3D09B0adfEfbCe4f6F81927557',
          category: '2',
        },
      ],
    };
  },
  computed: {
    validateForm() {
      if (
        this.tokenA.value
        && this.tokenB.value
        && this.amountA > 0
        && this.amountB > 0
      ) {
        return true;
      }
      return false;
    },
  },
  watch: {
    tokenA() {
      if (this.tokenA && this.tokenB) {
        this.fetchPrice();
      }
    },
    tokenB() {
      if (this.tokenB && this.tokenA) {
        this.fetchPrice();
      }
    },
  },
  methods: {
    createOrder(tokenA, tokenB, amountA, amountB) {
      const isGoerli = this.orderStore.checkNetwork();
      if (!isGoerli) {
        Notify.create({
          type: 'negative',
          message: 'Error network',
        });
        return;
      }
      this.orderStore.createOrder(tokenA.value, tokenB.value, amountA, amountB);
    },
    async fetchPrice() {
      try {
        this.loadingPrice = true;
        const response = await axios.get(`https://min-api.cryptocompare.com/data/price?fsym=${this.tokenA.label}&tsyms=${this.tokenB.label}`);
        this.orderPrice = response.data[this.tokenB.label];
        this.loadingPrice = false;
      } catch (error) {
        this.orderPrice = 'Error fetching price:';
      } finally {
        this.loading = false; // Сбрасываем флаг загрузки
      }
    },
  },
});
</script>

<style lang="scss" scoped></style>
../store/metamask.store
