import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("userStore", () => {
  const isAuthenticated = ref(false);

  function $reset() {
    isAuthenticated.value = false;
  }

  return {
    isAuthenticated,
    $reset,
  };
});
