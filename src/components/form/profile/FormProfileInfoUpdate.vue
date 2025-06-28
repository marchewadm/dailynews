<script setup lang="ts">
import {
  IonButton,
  IonInput,
  IonList,
} from "@ionic/vue";

import { toTypedSchema } from "@vee-validate/zod";
import { storeToRefs } from "pinia";
import { Field, useForm } from "vee-validate";
import { profileInfoUpdateSchema } from "@/schemas/profileSchemas";
import { updateUserProfileService } from "@/services/userService";
import { useUserStore } from "@/stores/userStore";

const userStore = useUserStore();
const { name } = storeToRefs(userStore);

const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(profileInfoUpdateSchema),
  initialValues: {
    name: name.value,
  },
});

const onSubmit = handleSubmit(async (values) => {
  await updateUserProfileService(values);
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
        name="name"
      >
        <IonInput
          type="text"
          placeholder="Enter your name"
          label="Name"
          :maxlength="50"
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
