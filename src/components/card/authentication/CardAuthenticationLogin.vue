<script setup lang="ts">
import BaseCardAuthentication from "@/components/card/authentication/BaseCardAuthentication.vue";
import FormAuthenticationLogin from "@/components/form/authentication/FormAuthenticationLogin.vue";
</script>

<template>
  <BaseCardAuthentication>
    <template #title>
      Welcome back
    </template>
    <template #description>
      Enter your credentials below to log in
    </template>
    <template #form>
      <FormAuthenticationLogin />
    </template>
    <template #footerParagraph>
      Don't have an account?&nbsp;
    </template>
    <template #footerButtonText>
      Sign up
    </template>
  </BaseCardAuthentication>
</template>
