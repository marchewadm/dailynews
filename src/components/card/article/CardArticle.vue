<script setup lang="ts">
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
  IonImg,
} from "@ionic/vue";

import { bookmarkOutline } from "ionicons/icons";

type Props = {
  title: string;
  articleUrl: string;
  imageUrl: string;
  publishedAt: string;
  description: string;
};

defineProps<Props>();
</script>

<template>
  <IonCard>
    <a
      :href="articleUrl"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IonImg
        :src="imageUrl"
        alt="Article Image"
      />
    </a>
    <IonCardHeader>
      <IonCardTitle>
        {{ title }}
      </IonCardTitle>
      <IonCardSubtitle>
        {{ publishedAt }}
      </IonCardSubtitle>
    </IonCardHeader>
    <IonCardContent>
      {{ description }}
    </IonCardContent>
    <div style="display: flex; justify-content: flex-end;">
      <IonButton
        shape="round"
        fill="clear"
      >
        <IonIcon :icon="bookmarkOutline" />
        <span style="margin-left: 5px;">Save article</span>
      </IonButton>
      <IonButton
        :href="articleUrl"
        fill="clear"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read More
      </IonButton>
    </div>
  </IonCard>
</template>
