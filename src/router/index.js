import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/plan",
    name: "plan",
    component: () => import("../views/Plan.vue"),
  },
  {
    path: "/construction",
    name: "construction",
    component: () => import("../views/Construction.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
