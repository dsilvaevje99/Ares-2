<template>
  <nav class="flex flex-col pl-20 pr-10 pt-6">
    <NuxtLink
      v-for="item in navLinks"
      :key="item.label + locale"
      :to="localePath(item.route, locale)"
      class="rounded-md p-2 px-3 mb-1 hover:bg-grey text-lg"
      exact-active-class="bg-primary hover:bg-primary text-white"
      >{{ item.label }}</NuxtLink
    >
  </nav>
</template>

<script setup lang="ts">
const { locale } = useI18n();
const localePath = useLocalePath();

const navLinks = [
  {
    label: "Forsiden",
    route: "/",
  },
  {
    label: "Påmelding",
    route: "/pamelding",
  },
  {
    label: "Priser",
    route: "/priser",
  },
  {
    label: "Treningstider",
    route: "/treningstider",
  },
  {
    label: "Styret i Ares",
    route: "/styret",
  },
  {
    label: "Ofte stilte spørsmål",
    route: "/ofte-stilte-sporsmal",
  },
  {
    label: "Kontakt",
    route: "/kontakt",
  },
];
</script>
