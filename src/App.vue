<template>
  <div>
    <Header :activeRoute="activeRoute" />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent , computed} from 'vue';
import { useRoute } from 'vue-router';
import Header from '@/components/layout/Header.vue';
import './assets/index.scss';

export default defineComponent({
  name: 'App',
  components: {
    Header,
  },
  setup() {
    const route = useRoute();
    const activeRoute = computed(() => route.name);

    return {
      activeRoute
    };
  }
});
</script>
