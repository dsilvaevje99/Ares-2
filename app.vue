<template>
  <Head>
    <Title>Ares Turnforening</Title>
  </Head>
  <div class="min-h-screen">
    <Header />
    <div class="flex">
      <div class="flex-auto w-3/12"><Navigation /></div>
      <div class="flex-auto w-6/12"><NuxtPage /></div>
      <div class="flex-auto w-3/12"></div>
    </div>
  </div>
  <Footer />
</template>

<script setup lang="ts"></script>
