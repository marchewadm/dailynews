import type { Router } from "vue-router";
import type { LoginFormValues, RegisterFormValues } from "@/types/authentication";
import { FirebaseError } from "firebase/app";

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

export async function loginUserService(data: LoginFormValues, router: Router) {
  try {
    const auth = getAuth();

    const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
    const user = userCredential.user;

    router.push("/");
  }
  catch (error) {getCurrentUserService()
getCurrentUserService()
    if (error instanceof FirebaseError) {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.error("Firebase Error:", errorCode, errorMessage);
    }
    else {
      console.error("An unexpected error occurred:", error);
    }
  }
}

export async function registerUserService(data: RegisterFormValues, router: Router) {
  try {
    const auth = getAuth();

    const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
    const user = userCredential.user;

    await updateProfile(user, { displayName: data.name });

    router.push("/");
  }
  catch (error) {
    if (error instanceof FirebaseError) {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.error("Firebase Error:", errorCode, errorMessage);
    }
    else {
      console.error("An unexpected error occurred:", error);
    }
  }
}

export async function getCurrentUserService() {
  const auth = getAuth();

  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        unsubscribe()
        resolve(user)
      },
      reject
    )
  })
}