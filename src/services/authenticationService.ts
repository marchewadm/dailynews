import type { Router } from "vue-router";
import type { LoginFormValues, RegisterFormValues } from "@/types/authentication";

import { FirebaseError } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { displayErrorNotification, displaySuccessNotification } from "@/utils/utils";

export async function loginUserService(data: LoginFormValues, router: Router) {
  try {
    const auth = getAuth();

    const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
    const user = userCredential.user;

    router.push("/home");

    displaySuccessNotification("Signed in successfully!");
  }
  catch (error) {
    if (error instanceof FirebaseError) {
      const errorCode = error.code;

      if (errorCode === "auth/invalid-credential") {
        displayErrorNotification("Invalid credentials. Please check your email and password.");
      }
      else if (errorCode === "auth/internal-error") {
        displayErrorNotification("An internal error occurred. Please try again later.");
      }
      else {
        displayErrorNotification();
      }
    }
    else {
      displayErrorNotification();
    }
  }
}

export async function registerUserService(data: RegisterFormValues, router: Router) {
  try {
    const auth = getAuth();

    const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
    const user = userCredential.user;

    await updateProfile(user, { displayName: data.name });

    router.push("/home");

    displaySuccessNotification("Registered successfully! We've signed you in.");
  }
  catch (error) {
    if (error instanceof FirebaseError) {
      const errorCode = error.code;

      if (errorCode === "auth/email-already-in-use") {
        displayErrorNotification("Email already in use. Please use a different email.");
      }
      else if (errorCode === "auth/invalid-email") {
        displayErrorNotification("Invalid email address. Please enter a valid email.");
      }
      else if (errorCode === "auth/invalid-display-name") {
        displayErrorNotification("Invalid name. Please enter a valid name.");
      }
      else {
        displayErrorNotification();
      }
    }
    else {
      displayErrorNotification();
    }
  }
}

export async function logoutUserService(router: Router) {
  try {
    const auth = getAuth();

    await signOut(auth);

    router.push("/auth");

    displaySuccessNotification("Logged out successfully!");
  }
  catch (error) {
    if (error instanceof FirebaseError) {
      displayErrorNotification("Failed to log out. Please try again later.");
    }
    else {
      displayErrorNotification();
    }
  }
}

export async function getCurrentUserService() {
  const auth = getAuth();

  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
}
