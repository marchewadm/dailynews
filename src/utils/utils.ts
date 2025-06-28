import { useToastStore } from "@/stores/toastStore";

export function displaySuccessNotification(message: string) {
  const { showToast } = useToastStore();

  showToast(message);
}

export function displayErrorNotification(message: string = "An unexpected error occurred. Please try again.") {
  const { showToast } = useToastStore();

  showToast(message, true);
}

export function formatNewsDate(dateString: string): string {
  const date = new Date(dateString);

  return date.toLocaleDateString("pl-PL", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}
