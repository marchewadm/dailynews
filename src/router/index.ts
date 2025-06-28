import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "@ionic/vue-router";
import { getCurrentUserService } from "@/services/authenticationService";
import { getUserProfileService } from "@/services/userService";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/tabs/home",
  },
  {
    path: "/tabs/",
    component: () => import("../components/navigation/NavigationTabs.vue"),
    children: [
      {
        path: "",
        redirect: "home",
      },
      {
        path: "home",
        component: () => import("../views/HomeView.vue"),
      },
      {
        path: "saved-news",
        component: () => import("../views/SavedNewsView.vue"),
      },
      {
        path: "profile",
        component: () => import("../views/ProfileView.vue"),
        beforeEnter: async () => {
          await getUserProfileService();
        },
      },
    ],
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
    return { path: "/tabs/home" };
  }
});

export default router;
