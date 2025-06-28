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
import { bookmark, bookmarkOutline } from "ionicons/icons";

import { computed } from "vue";
import { formatNewsDate } from "@/utils/utils";

type Props = {
  title: string;
  articleUrl: string;
  imageUrl: string;
  publishedAt: string;
  description: string;
  isSaved?: boolean;
};

const props = defineProps<Props>();

const emit = defineEmits<{
  saveArticle: [title: string, url: string, urlToImage: string, publishedAt: string, description: string];
  removeArticle: [title: string];
}>();

function toggleSaveArticle() {
  if (props.isSaved) {
    emit("removeArticle", props.title);
  }
  else {
    emit(
      "saveArticle",
      props.title,
      props.articleUrl,
      props.imageUrl,
      props.publishedAt,
      props.description,
    );
  }
}

const getArticleStatusText = computed(() => {
  return props.isSaved ? "Remove from saved" : "Save article";
});

const getArticleStatusIcon = computed(() => {
  return props.isSaved ? bookmark : bookmarkOutline;
});
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
        {{ formatNewsDate(publishedAt) }}
      </IonCardSubtitle>
    </IonCardHeader>
    <IonCardContent>
      {{ description }}
    </IonCardContent>
    <div style="display: flex; justify-content: flex-end;">
      <IonButton
        shape="round"
        fill="clear"
        @click="toggleSaveArticle"
      >
        <IonIcon :icon="getArticleStatusIcon" />
        <span style="margin-left: 5px;">{{ getArticleStatusText }}</span>
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
