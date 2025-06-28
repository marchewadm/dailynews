import { defineStore } from "pinia";
import { ref } from "vue";

export const useToastStore = defineStore("toastStore", () => {
  const message = ref("");
  const isOpen = ref(false);
  const isError = ref(false);

  function showToast(msg: string, error: boolean = false) {
    isOpen.value = true;
    message.value = msg;
    isError.value = error;
  }

  function $reset() {
    isOpen.value = false;
    message.value = "";
    isError.value = false;
  }

  return {
    message,
    isOpen,
    isError,
    showToast,
    $reset,
  };
});
