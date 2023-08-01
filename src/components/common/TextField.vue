<template>
  <div class="text-field">
    <input class="text-field__input" 
      :id="name" 
      :value="inputValue" 
      :placeholder="placeholder" 
      autocomplete="off"
      @input="handleInput"
      @keyEnter="clickEnter"
      />
    <p v-if="error" 
      class="text-field__error-message">
      {{ error }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'TextField',
  props: {
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      required: true,
    },
    error: {
      type: String,
      default: null,
    },
  },
  emits: ['update:value','click:enter'],
  setup(props, { emit }) {
    const inputValue = computed(() => props.value);

    const handleInput = (event: Event) : void => {
      const target = event.target as HTMLInputElement;
      emit('update:value', target.value);
    };

    const clickEnter = () : void => {
      emit('click:enter');
    };

    return {
      inputValue,
      handleInput,
      clickEnter
    };
  },
});
</script>