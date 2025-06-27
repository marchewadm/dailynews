<script setup lang="ts">
import BaseCardAuthentication from "@/components/card/authentication/BaseCardAuthentication.vue";
import FormAuthenticationRegister from "@/components/form/authentication/FormAuthenticationRegister.vue";
</script>

<template>
  <BaseCardAuthentication>
    <template #title>
      Create an account
    </template>
    <template #description>
      Fill out the form below to create your account
    </template>
    <template #form>
      <FormAuthenticationRegister />
    </template>
    <template #footerParagraph>
      Already have an account?&nbsp;
    </template>
    <template #footerButtonText>
      Sign in
    </template>
  </BaseCardAuthentication>
</template>
