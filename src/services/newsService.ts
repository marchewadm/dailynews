import type { NewsApiResponse } from "@/types/news";
import axios from "axios";

export async function getLatestNewsService(pageSize: number = 10, language: string = "en"): Promise<NewsApiResponse> {
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
