<template>
  <button :class="buttonClasses" @click="handleClick" :disabled="disabled" id="button">
    <span class="button-content">
      <slot />
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'Button',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click'],
  setup(props, { emit }) {
    const buttonClasses = computed(() => ({
      'button': true,
      'button--disabled': props.disabled,
    }));

    const handleClick = () => {
      if (!props.disabled) {
        emit('click');
      }
    };

    return {
      buttonClasses,
      handleClick,
    };
  },
});
</script>