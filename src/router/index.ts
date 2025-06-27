import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "@ionic/vue-router";
import { getCurrentUserService } from "@/services/authenticationService";

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

router.beforeEach(async (to) => {
  const isAuthenticated = await getCurrentUserService();

  if (!isAuthenticated && to.path !== "/auth") {
    return { path: "/auth" };
  }

  if (isAuthenticated && to.path === "/auth") {
    return { path: "/" };
  }
});

export default router;
