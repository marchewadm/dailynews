<script setup lang="ts">
import type { Article } from "@/types/news";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { onBeforeMount, ref } from "vue";
import CardArticle from "@/components/card/article/CardArticle.vue";
import { getLatestNewsService } from "@/services/newsService";
import { formatNewsDate } from "@/utils/utils";

const latestNews = ref<Article[]>([]);

onBeforeMount(async () => {
  const response = await getLatestNewsService();
  latestNews.value = response.articles;
});
</script>

<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Latest News</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <CardArticle
        v-for="article in latestNews"
        :key="article.title"
        :title="article.title"
        :article-url="article.url"
        :image-url="article.urlToImage"
        :published-at="formatNewsDate(article.publishedAt)"
        :description="article.description"
      />
    </IonContent>
  </IonPage>
</template>
