import type {
  ProfileInfoUpdateFormValues,
  ProfilePasswordUpdateFormValues,
} from "@/types/user";

import { FirebaseError } from "firebase/app";
import { getAuth, updatePassword, updateProfile } from "firebase/auth";
import { useModalStore } from "@/stores/modalStore";
import { useUserStore } from "@/stores/userStore";
import { displayErrorNotification, displaySuccessNotification } from "@/utils/utils";

export async function getUserProfileService() {
  const auth = getAuth();
  const user = auth.currentUser;
  const { setUserProfile } = useUserStore();

  if (user) {
    setUserProfile(user.displayName!, user.email!);
  }
}

export async function updateUserProfileService(data: ProfileInfoUpdateFormValues) {
  try {
    const auth = getAuth();
    const { setUserName } = useUserStore();

    await updateProfile(auth.currentUser!, { displayName: data.name });

    setUserName(data.name);

    displaySuccessNotification("Profile updated successfully!");
  }
  catch (error) {
    displayErrorNotification("Failed to update profile. Please try again later.");
  }
}

export async function updateUserPasswordService(data: ProfilePasswordUpdateFormValues) {
  try {
    const auth = getAuth();
    const user = auth.currentUser;

    await updatePassword(user!, data.newPassword);
  }
  catch (error) {
    if (error instanceof FirebaseError) {
      const errorCode = error.code;
      const { openModal } = useModalStore();

      if (errorCode === "auth/requires-recent-login") {
        displayErrorNotification("Please log in again to update your password.");
        openModal();
      }
      else {
        console.error("Error updating password:", error);
        displayErrorNotification();
      }
    }
    else {
      displayErrorNotification();
    }
  }
}
