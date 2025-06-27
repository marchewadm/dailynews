<script setup lang="ts">
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonText,
} from "@ionic/vue";

import { useAuthenticationStore } from "@/stores/authenticationStore";

const { toggleForm } = useAuthenticationStore();
</script>

<template>
  <IonCard class="card">
    <IonCardHeader>
      <IonCardTitle class="ion-text-center">
        <slot name="title" />
      </IonCardTitle>
    </IonCardHeader>
    <IonCardContent>
      <IonText class="ion-text-center">
        <p class="margin-bottom">
          <slot name="description" />
        </p>
      </IonText>
      <div class="margin-bottom">
        <slot name="form" />
      </div>
      <div class="footer">
        <p class="reset-margin">
          <slot name="footerParagraph" />
        </p>
        <button
          class="footer-button"
          @click="toggleForm"
        >
          <slot name="footerButtonText" />
        </button>
      </div>
    </IonCardContent>
  </IonCard>
</template>

<style scoped>
.card {
  z-index: 999;
}

.margin-bottom {
  margin-bottom: 16px;
}

.reset-margin {
  margin: 0;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-button {
  border: none;
  color: inherit;
  background-color: inherit;
  text-decoration: underline;
}
</style>
