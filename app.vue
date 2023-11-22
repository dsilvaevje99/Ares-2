<template>
  <Head>
    <Title>Ares Turnforening</Title>
  </Head>
  <div class="min-h-screen">
    <Header />
    <div class="flex">
      <div class="flex-auto w-3/12 sticky top-6 self-start h-0">
        <Navigation />
      </div>
      <div class="flex-auto w-6/12">
        <NoPageContent v-if="store.fetchFailed" />
        <NuxtPage v-else />
      </div>
      <div class="flex-auto w-3/12"></div>
    </div>
  </div>
  <Footer />
</template>

<script setup lang="ts">
import { useContentStore } from "./stores/content";

const store = useContentStore();
</script>
