import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import ContactView from '@/views/ContactView.vue'
import MainView from '@/views/MainView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: MainView
  }
  ,{
    path: "/contact",
    name: "contact",
    component: ContactView
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
