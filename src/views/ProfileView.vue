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
import CardProfile from "@/components/card/profile/CardProfile.vue";
</script>

<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Profile</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonGrid style="height: 100%;">
        <IonRow
          style="height: 100%"
          class="ion-align-items-center ion-justify-content-center"
        >
          <IonCol>
            <CardProfile />
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonPage>
</template>
