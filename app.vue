<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - My movie site` : "My movie site";
  },
});
</script>

<template>
  <div>
    <nav>
      <NuxtLink href="/">Home</NuxtLink>
      <NuxtLink href="/movies">Movies</NuxtLink>
      <NuxtLink href="https://vueschool.io">Vue School</NuxtLink>
    </nav>
    <NuxtPage />
  </div>
</template>
