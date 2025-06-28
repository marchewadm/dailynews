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
import {
  getLatestNewsService,
  getSavedArticlesService,
  removeSavedArticleService,
  saveArticleService,
} from "@/services/newsService";

const latestNews = ref<Article[]>([]);
const savedArticleTitles = ref<Set<string>>(new Set());
const isLoading = ref(true);

const route = useRoute();

async function loadData() {
  isLoading.value = true;

  try {
    await Promise.all([
      fetchLatestNews(),
      fetchSavedArticles(),
    ]);
  }
  catch (error) {
    console.error("Error loading data:", error);
  }
  finally {
    isLoading.value = false;
  }
}

async function fetchLatestNews() {
  try {
    const response = await getLatestNewsService();
    latestNews.value = response.articles;
  }
  catch (error) {
    console.error("Error fetching latest news.");
  }
}

async function fetchSavedArticles() {
  try {
    const saved = await getSavedArticlesService();
    if (saved) {
      savedArticleTitles.value = new Set(saved.map(article => article.title));
    }
  }
  catch (error) {
    console.error("Error fetching saved articles.");
  }
}

async function handleSaveArticle(
  articleTitle: string,
  articleUrl: string,
  imageUrl: string,
  publishedAt: string,
  description: string,
) {
  await saveArticleService(articleTitle, articleUrl, imageUrl, publishedAt, description);
  savedArticleTitles.value.add(articleTitle);
}

async function handleRemoveArticle(articleTitle: string) {
  await removeSavedArticleService(articleTitle);
  savedArticleTitles.value.delete(articleTitle);
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
        <IonTitle>Latest News</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <SpinnerArticles
        v-if="isLoading"
        message="Loading latest articles..."
      />
      <template v-else>
        <CardArticle
          v-for="article in latestNews"
          :key="article.title"
          :title="article.title"
          :article-url="article.url"
          :image-url="article.urlToImage"
          :published-at="article.publishedAt"
          :description="article.description"
          :is-saved="savedArticleTitles.has(article.title)"
          @save-article="handleSaveArticle"
          @remove-article="handleRemoveArticle"
        />
      </template>
    </IonContent>
  </IonPage>
</template>
