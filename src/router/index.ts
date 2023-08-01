import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { Routes } from '@/entities/constants/router';

const routes: Array<RouteRecordRaw> = [
  {
    path: Routes.Home,
    name: 'Home',
    component: import('@/views/Home.vue')
  },
  {
    path: Routes.WatchList,
    name: 'WatchList',
    component: import('@/views/WatchList.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
