<script setup lang="ts">
import { IonInput, IonList } from "@ionic/vue";
import { toTypedSchema } from "@vee-validate/zod";
import { Field, useForm } from "vee-validate";
import { loginSchema } from "@/schemas/authenticationSchemas";
import { reauthenticateUserService } from "@/services/authenticationService";

const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(loginSchema),
});

const onSubmit = handleSubmit(async (values) => {
  await reauthenticateUserService(values);
});
</script>

<template>
  <form
    id="reauthenticateForm"
    @submit="onSubmit"
  >
    <IonList
      style="display: flex; flex-direction: column; gap: 10px; background-color: inherit;"
      class="ion-align-items-center ion-padding"
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
    </IonList>
  </form>
</template>
