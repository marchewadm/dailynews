<script setup lang="ts">
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonModal,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { storeToRefs } from "pinia";
import FormAuthenticationRenew from "@/components/form/authentication/FormAuthenticationRenew.vue";
import { useModalStore } from "@/stores/modalStore";

const modalStore = useModalStore();

const { $reset } = modalStore;
const { isOpen } = storeToRefs(modalStore);
</script>

<template>
  <IonModal :is-open="isOpen">
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonButton
            type="button"
            @click="$reset"
          >
            Cancel
          </IonButton>
        </IonButtons>
        <IonTitle>Reauthenticate</IonTitle>
        <IonButtons slot="end">
          <IonButton
            :strong="true"
            type="submit"
            form="reauthenticateForm"
          >
            Confirm
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
    <IonContent class="ion-padding">
      <FormAuthenticationRenew />
    </IonContent>
  </IonModal>
</template>
