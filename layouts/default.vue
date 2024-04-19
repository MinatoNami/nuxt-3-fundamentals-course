<script setup lang="ts">
const isLoggedIn = useIsLoggedIn();
</script>
<template>
  <nav style="display: flex; gap: 10px">
    <NuxtLink href="/">Home</NuxtLink>
    <NuxtLink href="/movies">Movies</NuxtLink>
    <NuxtLink href="https://vueschool.io">Vue School</NuxtLink>
    <NuxtLink v-if="!isLoggedIn" to="/login">Login</NuxtLink>
    <a href="#" v-else @click.prevent="isLoggedIn = false">Logout</a>
  </nav>
  <slot></slot>
</template>
