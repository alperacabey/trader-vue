
<template>
  <main class="main">
    <h1 class="heading1">Watch List</h1>
    
    <section  class="search-box">
      <TextField  
        name="isin"
        placeholder="Enter a ISIN"
        class="search-box__input"
        :value="isin"
        :error="error || ''"
        @update:value="handleIsinChange"
        @click:enter="subscribe"
        />

      <Tooltip 
        class="search-box__info" 
        message="An ISIN is a 12-character alphanumeric code. Example:- US0378331005"
        />

      <Button 
        class="search-box__button"
        :disabled="isDisabled"
        @click="subscribe">
        Subscribe
      </Button>
    </section>

    <section v-if="stocks.length > 0">
        <StockCard 
        v-for="stock in stocks" 
        :key="stock.isin" 
        :stock="stock"
        @unsubscribe="unsubscribe"
        data-test="stock-card"
        />
    </section>

    <section v-else>
      <p>No stocks subscribed</p>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, reactive , watch} from 'vue';
import { useToast } from "vue-toastification";
import { TextField, Card, Button, Tooltip } from '@/components/common';
import StockCard from '@/components/watchList/StockCard.vue';
import { Stock } from '@/entities/types/stock';
import useValidation from '@/composables/useValidation';
import { sendWebSocketData, socket, socketStatus } from '@/services/socket';

export default defineComponent({
  name: 'WatchList',
  components: {
    TextField,
    Card,
    Button,
    StockCard,
    Tooltip
  },
  setup() {
    const isin = ref('US0378331005')
    const stocks = reactive<Stock[]>([])
    const toast = useToast();
    const { isValid, error, validate } = useValidation(isin, 12, 12)
    const isDisabled = ref(false);

    const handleIsinChange = (value: string): void => {
      isin.value = value;
      isDisabled.value = false;
    }

    const subscribe = (): void => {
      validate();
      if (isValid.value) {
        const isAlreadySubscribed = stocks.find(stock => stock.isin.toLowerCase() === isin.value.toLowerCase());
        if (isAlreadySubscribed) {
          isDisabled.value = true;
          toast.warning("Stock already subscribed");
        } else {
          sendWebSocketData({
            subscribe: isin.value
          })
          toast.success(`Stock(${isin.value}) subscribed successfully!`);
          isin.value = ''
        }
      }
    }

    const unsubscribe = (isin: string): void => {
      sendWebSocketData({
        unsubscribe: isin
      })
      toast.success(`Stock(${isin}) unsubscribed successfully!`);
      stocks.splice(stocks.findIndex(stock => stock.isin === isin), 1);
    }

    const handleWebSocketMessage = (event: Stock): void => {
      const existingStock = stocks.find((stock) => stock.isin === event.isin);
      if (existingStock) {
        existingStock.price = event.price;
        existingStock.bid = event.bid;
        existingStock.ask = event.ask;
      } else {
        stocks.push(event);
      }
    };


    onMounted(() => {
      socket.subscribe(handleWebSocketMessage);
      subscribe();
    });

    watch(socketStatus, (newStatus) => {
      if (newStatus) {
        toast.success('WebSocket connection is open!');
      } else {
        toast.error('WebSocket connection is closed!');
      }
    });

    return {
      isin,
      stocks,
      error,
      isDisabled,
      subscribe,
      unsubscribe,
      handleIsinChange
    }
  }
})
</script>