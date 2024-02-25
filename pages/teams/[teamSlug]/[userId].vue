<template>
  <p>{{ message }}</p>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const message = computed(() => {
  return `Hello from ${route.params.teamSlug} and my user id is ${route.params.userId}`;
});
</script>

<style></style>
