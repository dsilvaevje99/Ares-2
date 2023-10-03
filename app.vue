<template>
  <Head>
    <Title>Ares Turnforening</Title>
  </Head>
  <Header />
  <div class="flex">
    <div class="flex-auto w-3/12"><Navigation /></div>
    <div class="flex-auto w-6/12"><NuxtPage /></div>
    <div class="flex-auto w-3/12"></div>
  </div>
</template>

<script setup lang="ts">
/* import { useI18n } from "vue-i18n";

const { locale } = useI18n({ useScope: "global" });

onBeforeMount(() => {
  const prefferedLocale = localStorage.getItem("lang");
  if (prefferedLocale) locale.value = prefferedLocale;
}); */
</script>
