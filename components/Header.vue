<template>
  <div
    class="flex justify-between items-center p-5 pb-10 md:p-10 xl:px-20 xl:py-8"
  >
    <NuxtLink to="/"
      ><img src="/Logo.svg" alt="Ares Turnforening" width="350"
    /></NuxtLink>
    <SearchField />
  </div>
</template>

<script setup lang="ts">
import SearchField from "./inputs/SearchField.vue";
</script>
