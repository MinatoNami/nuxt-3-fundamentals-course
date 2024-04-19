<template>
  <div>Hello logged in user</div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});
</script>

<style></style>
