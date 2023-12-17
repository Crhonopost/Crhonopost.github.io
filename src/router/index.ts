import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import MainView from "@/views/MainView.vue"
import ContactView from "@/views/ContactView.vue"
import ProjectView from "@/views/ProjectView.vue"

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: HomeView,
  // },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
  {
    path: "/",
    name: "home",
    component: MainView
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView
  },
  {
    path: "/project/:name",
    name: "project",
    component: ProjectView,
    props: true
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
