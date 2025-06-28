<script setup lang="ts">
import type { Article } from "@/types/news";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import CardArticle from "@/components/card/article/CardArticle.vue";
import SpinnerArticles from "@/components/spinner/SpinnerArticles.vue";
import { getSavedArticlesService, removeSavedArticleService } from "@/services/newsService";

const savedArticles = ref<Article[]>([]);
const isLoading = ref(true);

const route = useRoute();

async function loadData() {
  isLoading.value = true;

  try {
    await fetchSavedArticles();
  }
  catch (error) {
    console.error("Error loading data:", error);
  }
  finally {
    isLoading.value = false;
  }
}

async function fetchSavedArticles() {
  try {
    const saved = await getSavedArticlesService();
    if (saved) {
      savedArticles.value = saved;
    }
  }
  catch (error) {
    console.error("Error fetching saved articles.");
  }
}

async function handleRemoveArticle(articleTitle: string) {
  await removeSavedArticleService(articleTitle);
  savedArticles.value = savedArticles.value.filter(article => article.title !== articleTitle);
}

onMounted(() => {
  loadData();
});

watch(
  () => route.fullPath,
  async (newPath, oldPath) => {
    if (newPath !== oldPath) {
      await loadData();
    }
  },
);
</script>

<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Saved News</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <SpinnerArticles
        v-if="isLoading"
        message="Loading saved articles..."
      />
      <template v-else>
        <template v-if="savedArticles.length > 0">
          <CardArticle
            v-for="article in savedArticles"
            :key="article.title"
            :title="article.title"
            :article-url="article.url"
            :image-url="article.urlToImage"
            :published-at="article.publishedAt"
            :description="article.description"
            :is-saved="true"
            @remove-article="handleRemoveArticle"
          />
        </template>
        <p
          v-else
          class="ion-text-center ion-padding"
        >
          No saved articles yet.
        </p>
      </template>
    </IonContent>
  </IonPage>
</template>
