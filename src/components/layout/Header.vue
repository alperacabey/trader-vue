<template>
  <header class="header">
    <nav>
      <router-link to="/" :class="{
        'header__nav-link': true,
        'header__nav-link--active': activeRoute === 'Home',
      }">Home</router-link>
      <router-link to="/watch-list" :class="{
        'header__nav-link': true,
        'header__nav-link--active': activeRoute === 'WatchList',
      }">Watch List</router-link>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  props: ['activeRoute'],
})
</script>