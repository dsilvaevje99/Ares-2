<template>
  <div class="flex justify-between items-center px-20 py-8">
    <NuxtLink to="/"
      ><img src="/Logo.svg" alt="Ares Turnforening" width="350"
    /></NuxtLink>
    <SearchField />
  </div>
</template>

<script setup lang="ts">
import SearchField from "./inputs/SearchField.vue";
</script>
