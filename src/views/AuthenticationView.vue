<script setup lang="ts">
import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { storeToRefs } from "pinia";
import { computed } from "vue";

import AnimationWave from "@/components/animation/AnimationWave.vue";
import CardAuthenticationLogin from "@/components/card/authentication/CardAuthenticationLogin.vue";
import CardAuthenticationRegister from "@/components/card/authentication/CardAuthenticationRegister.vue";

import { useAuthenticationStore } from "@/stores/authenticationStore";

const authenticationStore = useAuthenticationStore();

const { authenticationForm } = storeToRefs(authenticationStore);

const formTitle = computed(() => {
  return authenticationForm.value === "login" ? "Sign in" : "Sign up";
});
</script>

<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>
          {{ formTitle }}
        </IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonGrid style="height: 100%;">
        <IonRow
          style="height: 100%"
          class="ion-align-items-center ion-justify-content-center"
        >
          <IonCol>
            <CardAuthenticationLogin
              v-if="authenticationForm === 'login'"
            />
            <CardAuthenticationRegister
              v-else
            />
          </IonCol>
        </IonRow>
      </IonGrid>
      <AnimationWave />
    </IonContent>
  </IonPage>
</template>
