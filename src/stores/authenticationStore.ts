import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthenticationStore = defineStore("authenticationStore", () => {
  const authenticationForm = ref<"login" | "register">("login");

  function toggleForm() {
    authenticationForm.value = authenticationForm.value === "login" ? "register" : "login";
  }

  return {
    authenticationForm,
    toggleForm,
  };
});
