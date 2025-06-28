<script setup lang="ts">
import {
  IonButton,
  IonInput,
  IonList,
} from "@ionic/vue";

import { toTypedSchema } from "@vee-validate/zod";
import { Field, useForm } from "vee-validate";
import { useRouter } from "vue-router";
import { loginSchema } from "@/schemas/authenticationSchemas";
import { loginUserService } from "@/services/authenticationService";

const { resetForm, handleSubmit } = useForm({
  validationSchema: toTypedSchema(loginSchema),
  // !!! Only for demonstration purposes !!!
  initialValues: {
    email: "user@example.com",
    password: "tH3bE@Jx&5mW",
  },
});

const router = useRouter();

const onSubmit = handleSubmit(async (values) => {
  await loginUserService(values, router);
  resetForm();
});
</script>

<template>
  <form
    @submit="onSubmit"
  >
    <IonList
      style="display: flex; flex-direction: column; gap: 10px; background-color: inherit;"
      class="ion-align-items-center"
    >
      <Field
        v-slot="{ field, errorMessage }"
        name="email"
      >
        <IonInput
          type="email"
          placeholder="Enter your email"
          label="Email"
          label-placement="floating"
          color="tertiary"
          helper-text="Enter a valid email address"
          :error-text="errorMessage"
          :class="{
            'ion-invalid ion-touched': errorMessage,
          }"
          required
          v-bind="field"
        />
      </Field>
      <Field
        v-slot="{ field, errorMessage }"
        name="password"
      >
        <IonInput
          type="password"
          placeholder="Enter your password"
          label="Password"
          label-placement="floating"
          color="tertiary"
          helper-text="Password must be at least 8 characters long"
          :error-text="errorMessage"
          :class="{
            'ion-invalid ion-touched': errorMessage,
          }"
          required
          v-bind="field"
        />
      </Field>
      <IonButton
        style="width: 100%;"
        color="tertiary"
        type="submit"
      >
        Sign in
      </IonButton>
    </IonList>
  </form>
</template>
