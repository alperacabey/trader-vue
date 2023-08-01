<template>
    <Card>
        <dl class="description-list">
            <div>
                <dt class="description-list__title">isin</dt>
                <dd class="description-list__description">{{ stock.isin }}</dd>
            </div>
            <div v-for="(key, index) in Object.keys(stock)" :key="index">
                <template v-if="key !== 'isin'">
                    <dt class="description-list__title">{{ key }}</dt>
                    <dd class="description-list__description">{{ stock[key].toFixed(2) }} €</dd>
                </template>
            </div>
            <Button class="description-list__button button--secondary" @click="handleUnsubscribe">Unsubscribe</Button>
        </dl>
  </Card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Button, Card } from '@/components/common';
import { Stock } from '@/entities/types/stock';

export default defineComponent({
    name: 'StockCard',
    props: {
        stock: {
            type: Object as PropType<Stock>,
            required: true,
        },
    },
    components: {
        Button,
        Card,
    },
    emits: ['unsubscribe'],
    setup(props, { emit }) {
        const handleUnsubscribe = (): void => {
            emit('unsubscribe', props.stock.isin);
        }

        return {
            handleUnsubscribe,
        };
    },
});
</script>