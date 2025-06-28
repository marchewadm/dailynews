import type { Article, NewsApiResponse } from "@/types/news";

import axios from "axios";
import { getAuth } from "firebase/auth";
import { collection, deleteDoc, doc, getDocs, query, setDoc } from "firebase/firestore";
import { db } from "@/main";
import { displayErrorNotification } from "@/utils/utils";

export async function getLatestNewsService(pageSize: number = 10, language: string = "en") {
  const url = "https://newsapi.org/v2/top-headlines";

  const response = await axios.get<NewsApiResponse>(url, {
    params: {
      language,
      pageSize,
      apiKey: import.meta.env.VITE_NEWS_API_KEY,
    },
  });

  return response.data;
}

export async function getSavedArticlesService() {
  try {
    const auth = getAuth();
    const userId = auth.currentUser!.uid;

    const q = query(collection(db, "users", userId, "savedArticles"));

    const querySnapshot = await getDocs(q);

    const articles: Article[] = [];

    querySnapshot.forEach((doc) => {
      articles.push(doc.data() as Article);
    });

    return articles;
  }
  catch (error) {
    displayErrorNotification("An error occurred while fetching saved articles.");
  }
}

export async function saveArticleService(articleTitle: string, articleUrl: string, imageUrl: string, publishedAt: string, description: string) {
  try {
    const auth = getAuth();
    const userId = auth.currentUser!.uid;

    const articleRef = doc(db, "users", userId, "savedArticles", articleTitle);
    await setDoc(articleRef, {
      title: articleTitle,
      url: articleUrl,
      urlToImage: imageUrl,
      publishedAt,
      description,
      savedAt: new Date().toISOString(),
    });
  }
  catch (error) {
    displayErrorNotification("An error occurred while saving the article.");
  }
}

export async function removeSavedArticleService(articleTitle: string) {
  try {
    const auth = getAuth();
    const userId = auth.currentUser!.uid;

    const articleRef = doc(db, "users", userId, "savedArticles", articleTitle);
    await deleteDoc(articleRef);
  }
  catch (error) {
    displayErrorNotification("An error occurred while removing the saved article.");
  }
}
