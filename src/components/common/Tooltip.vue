<template>
  <div class="custom-tooltip">
    <span class="custom-tooltip__icon" @mouseover="mouseover" @mouseleave="mouseleave">
      <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12" y2="8" />
      </svg>
    </span>
    <div class="custom-tooltip__container" v-if="showTooltip">
      <p class="custom-tooltip__content">{{ message }}</p>
    </div>
  </div>
</template>
  
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'Tooltip',
    props: {
      message: {
        type: String,
        required: true,
      },
    },
    setup(props) {
        const showTooltip = ref(false);
        
        const mouseover = () => {
          showTooltip.value = true;
        }

        const mouseleave = () => {
          showTooltip.value = false;
        }

        return {
          showTooltip,
          message: props.message,
          mouseover,
          mouseleave
        };
    },
  });
</script>