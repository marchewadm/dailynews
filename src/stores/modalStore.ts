import { defineStore } from "pinia";
import { ref } from "vue";

export const useModalStore = defineStore("modalStore", () => {
  const isOpen = ref(false);

  function openModal() {
    isOpen.value = true;
  }

  function $reset() {
    isOpen.value = false;
  }

  return {
    openModal,
    isOpen,
    $reset,
  };
});
