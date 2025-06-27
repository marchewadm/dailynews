<script setup lang="ts">
import {
  IonButton,
  IonInput,
  IonList,
} from "@ionic/vue";

import { toTypedSchema } from "@vee-validate/zod";
import { Field, useForm } from "vee-validate";
import { registerSchema } from "@/schemas/authenticationSchemas";

const { resetForm, handleSubmit, isSubmitting } = useForm({
  validationSchema: toTypedSchema(registerSchema),
});

const onSubmit = handleSubmit(async (values) => {
  console.log("Form submitted with values:", values);
  resetForm();
});
</script>

<template>
  <form
    @submit="onSubmit"
  >
    <IonList
      style="display: flex; flex-direction: column; gap: 10px;"
      class="ion-align-items-center"
    >
      <Field
        v-slot="{ field, errorMessage }"
        name="name"
      >
        <IonInput
          type="text"
          placeholder="Enter your name"
          label="Name"
          label-placement="floating"
          color="tertiary"
          helper-text="Enter your first name"
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
      <Field
        v-slot="{ field, errorMessage }"
        name="password2"
      >
        <IonInput
          type="password"
          placeholder="Enter your password"
          label="Confirm password"
          label-placement="floating"
          color="tertiary"
          helper-text="Confirm your password"
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
        Sign up
      </IonButton>
    </IonList>
  </form>
</template>
