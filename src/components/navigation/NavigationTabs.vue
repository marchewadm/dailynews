<script setup lang="ts">
import { IonIcon, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from "@ionic/vue";
import { bookmark, newspaperOutline, powerOutline, settingsOutline } from "ionicons/icons";
import { useRouter } from "vue-router";
import { logoutUserService } from "@/services/authenticationService";

const router = useRouter();
</script>

<template>
  <IonPage>
    <IonTabs>
      <IonRouterOutlet />
        <IonTabBar slot="bottom">
          <IonTabButton
            tab="home"
            href="/"
          >
            <IonIcon :icon="newspaperOutline" />
            <IonLabel>Latest News</IonLabel>
          </IonTabButton>

          <IonTabButton
            tab="saved"
            href="/saved-news"
          >
            <IonIcon :icon="bookmark" />
            <IonLabel>Saved News</IonLabel>
          </IonTabButton>

          <IonTabButton
            tab="settings"
            href="/settings"
          >
            <IonIcon :icon="settingsOutline" />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>

          <IonTabButton
            tab="signout"
            @click="logoutUserService(router)"
          >
            <IonIcon :icon="powerOutline" />
            <IonLabel>Sign Out</IonLabel>
          </IonTabButton>
        </IonTabBar>
    </IonTabs>
  </IonPage>
</template>
