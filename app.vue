<template>
  <Head>
    <Title>Ares Turnforening</Title>
  </Head>
  <div class="min-h-screen">
    <Header />
    <div class="max-sm:contents md:hidden">
      <SScreenNav />
    </div>
    <div class="max-md:hidden md:max-lg:contents lg:hidden">
      <MScreenNav />
    </div>
    <div class="flex">
      <div
        class="max-lg:hidden lg:block flex-none lg:flex-auto lg:w-4/12 xl:w-3/12 sticky top-6 self-start h-0"
      >
        <LScreenNav />
      </div>
      <div
        class="pb-20 px-5 lg:pl-0 lg:pr-10 xl:px-0 flex-auto w-8/12 xl:w-6/12"
      >
        <NoPageContent v-if="store.fetchFailed" />
        <NuxtPage v-else />
      </div>
      <div
        class="max-lg:hidden xl:block flex-none lg:flex-auto xl:w-3/12"
      ></div>
    </div>
  </div>
  <Footer />
</template>

<script setup lang="ts">
import { useContentStore } from "./stores/content";

const store = useContentStore();
</script>
