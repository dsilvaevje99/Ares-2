<template>
  <div class="flex justify-between items-center px-20 py-8">
    <NuxtLink to="/"
      ><img src="/Logo.svg" alt="Ares Turnforening" width="350"
    /></NuxtLink>
    <button @click="handleSwitchLocale">
      {{ $t("translate-page") }}
    </button>
    <SearchField />
  </div>
</template>

<script setup lang="ts">
import SearchField from "./inputs/SearchField.vue";

const switchLocalePath = useSwitchLocalePath();
const { locale, setLocale } = useI18n();

const otherLocale = computed(() => (locale.value === "no" ? "en" : "no"));

const handleSwitchLocale = () => {
  setLocale(otherLocale.value);
  switchLocalePath(otherLocale.value);
};
</script>
