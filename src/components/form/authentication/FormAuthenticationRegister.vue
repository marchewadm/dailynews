<script setup lang="ts">
import {
  IonButton,
  IonInput,
  IonItem,
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
      <IonItem
        style="width: 100%;"
        class="ion-no-padding"
      >
        <Field
          v-slot="{ field }"
          name="name"
        >
          <IonInput
            type="text"
            placeholder="Enter your name"
            label="Name"
            label-placement="floating"
            color="tertiary"
            required
            v-bind="field"
          />
        </Field>
      </IonItem>
      <IonItem
        style="width: 100%;"
        class="ion-no-padding"
      >
        <Field
          v-slot="{ field }"
          name="email"
        >
          <IonInput
            type="email"
            placeholder="Enter your email"
            label="Email"
            label-placement="floating"
            color="tertiary"
            required
            v-bind="field"
          />
        </Field>
      </IonItem>
      <IonItem
        style="width: 100%;"
        class="ion-no-padding"
      >
        <Field
          v-slot="{ field }"
          name="password"
        >
          <IonInput
            type="password"
            placeholder="Enter your password"
            label="Password"
            label-placement="floating"
            color="tertiary"
            required
            v-bind="field"
          />
        </Field>
      </IonItem>
      <IonItem
        style="width: 100%;"
        class="ion-no-padding"
      >
        <Field
          v-slot="{ field }"
          name="password2"
        >
          <IonInput
            type="password"
            placeholder="Enter your password"
            label="Confirm password"
            label-placement="floating"
            color="tertiary"
            required
            v-bind="field"
          />
        </Field>
      </IonItem>
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
