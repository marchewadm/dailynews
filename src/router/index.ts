import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "@ionic/vue-router";
import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/userStore";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/auth",
    component: () => import("../views/AuthenticationView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to) => {
  const userStore = useUserStore();
  const { isAuthenticated } = storeToRefs(userStore);

  if (!isAuthenticated.value && to.path !== "/auth") {
    return { path: "/auth" };
  }

  if (isAuthenticated.value && to.path === "/auth") {
    return { path: "/" };
  }
});

export default router;
