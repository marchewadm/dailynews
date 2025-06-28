<script setup lang="ts">
import {
  IonApp,
  IonRouterOutlet,
} from "@ionic/vue";
import ToastNotification from "./components/toast/ToastNotification.vue";
</script>

<template>
  <IonApp>
    <IonRouterOutlet />
    <ToastNotification />
  </IonApp>
</template>
