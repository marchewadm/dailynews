<script setup lang="ts">
import {
  IonButton,
  IonInput,
  IonList,
} from "@ionic/vue";

import { toTypedSchema } from "@vee-validate/zod";
import { Field, useForm } from "vee-validate";
import { profilePasswordUpdateSchema } from "@/schemas/profileSchemas";
import { updateUserPasswordService } from "@/services/userService";

const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(profilePasswordUpdateSchema),
});

const onSubmit = handleSubmit(async (values) => {
  await updateUserPasswordService(values);
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
        name="currentPassword"
      >
        <IonInput
          type="password"
          placeholder="Enter your password"
          label="Current password"
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
        name="newPassword"
      >
        <IonInput
          type="password"
          placeholder="Enter your password"
          label="New password"
          label-placement="floating"
          color="tertiary"
          helper-text="New password must be at least 8 characters long and different from the current password"
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
        name="newPassword2"
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
        style="align-self: flex-end;"
        color="tertiary"
        type="submit"
      >
        Save
      </IonButton>
    </IonList>
  </form>
</template>
