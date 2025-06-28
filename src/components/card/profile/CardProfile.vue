<script setup lang="ts">
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonText,
} from "@ionic/vue";
import FormProfileInfoUpdate from "@/components/form/profile/FormProfileInfoUpdate.vue";
import FormProfilePasswordUpdate from "@/components/form/profile/FormProfilePasswordUpdate.vue";
import ModalReauthenticate from "@/components/modal/ModalReauthenticate.vue";
</script>

<template>
  <IonCard class="card">
    <IonCardHeader>
      <IonCardTitle class="ion-text-center">
        Edit your profile
      </IonCardTitle>
    </IonCardHeader>
    <IonCardContent>
      <IonText class="ion-text-center">
        <p class="margin-bottom">
          You can update your profile information and credentials here.
        </p>
      </IonText>
      <div class="margin-bottom-sm">
        <FormProfileInfoUpdate />
      </div>
      <div>
        <FormProfilePasswordUpdate />
      </div>
      <ModalReauthenticate />
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

.margin-bottom-sm {
  margin-bottom: 8px;
}
</style>
