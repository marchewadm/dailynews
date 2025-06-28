<script setup lang="ts">
import { IonToast } from "@ionic/vue";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { useToastStore } from "@/stores/toastStore";

type Props = {
  duration?: number;
};

const props = withDefaults(defineProps<Props>(), {
  duration: 3500,
});

const toastStore = useToastStore();

const { $reset } = toastStore;
const { message, isOpen, isError } = storeToRefs(toastStore);

const getToastColor = computed(() => {
  return isError.value ? "danger" : "tertiary";
});
</script>

<template>
  <IonToast
    :is-open="isOpen"
    :message="message"
    :color="getToastColor"
    :duration="props.duration"
    @did-dismiss="$reset"
  />
</template>
