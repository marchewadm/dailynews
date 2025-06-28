import { useToastStore } from "@/stores/toastStore";

export function displaySuccessNotification(message: string) {
  const { showToast } = useToastStore();

  showToast(message);
}

export function displayErrorNotification(message: string = "An unexpected error occurred. Please try again.") {
  const { showToast } = useToastStore();

  showToast(message, true);
}
