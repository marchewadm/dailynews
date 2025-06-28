<script setup lang="ts">
import { IonSpinner } from "@ionic/vue";

type Props = {
  message: string;
};

defineProps<Props>();
</script>

<template>
  <div class="loading-container">
    <IonSpinner name="crescent" />
    <p>
      {{ message }}
    </p>
  </div>
</template>

<style scoped>
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 10px;
  color: var(--ion-color-medium);
}
</style>
