<template>
  <div class="row text-center answer">
    <div class="h4 col-md-8 offset-md-2 text-center">
      {{ response }}
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useClueStore } from "../stores/ClueStore";
const store = useClueStore();

const response = computed(() => {
  return store.response;
});
</script>
