import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "@ionic/vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    redirect: "/folder/Inbox",
  },
  {
    path: "/folder/:id",
    component: () => import ("../views/FolderPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
