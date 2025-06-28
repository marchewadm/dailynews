import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("userStore", () => {
  const name = ref("");
  const email = ref("");

  function setUserName(nameValue: string) {
    name.value = nameValue;
  }

  function setUserEmail(emailValue: string) {
    email.value = emailValue;
  }

  function setUserProfile(nameValue: string, emailValue: string) {
    name.value = nameValue;
    email.value = emailValue;
  }

  function $reset() {
    name.value = "";
    email.value = "";
  }

  return {
    name,
    email,
    setUserName,
    setUserEmail,
    setUserProfile,
    $reset,
  };
});
