<template>
  <NuxtImg src="/cat.jpeg" sizes="xs:100vw sm:50vw md:100vw" />
</template>

<script setup lang="ts">
definePageMeta({
  layout: "plain",
});
</script>

<style scoped>
img {
  display: block;
  max-width: 100%;
}
</style>
