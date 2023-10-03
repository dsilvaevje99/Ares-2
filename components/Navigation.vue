<template>
  <nav class="flex flex-col pl-20 pr-10 pt-6">
    <NuxtLink
      v-for="item in navLinks"
      :key="item.label"
      :to="localePath(item.route, locale)"
      class="rounded-md p-2 px-3 mb-1 hover:bg-grey text-lg"
      exact-active-class="bg-primary hover:bg-primary text-white"
      >{{ $t(item.label) }}</NuxtLink
    >
  </nav>
</template>

<script setup lang="ts">
const { locale } = useI18n();
const localePath = useLocalePath();

const navLinks = [
  {
    label: "home-title",
    route: "/",
  },
  {
    label: "register-title",
    route: "/pamelding",
  },
  {
    label: "prices-title",
    route: "/priser",
  },
  {
    label: "schedule-title",
    route: "/treningstider",
  },
  {
    label: "board-title",
    route: "/styret",
  },
  {
    label: "faq-title",
    route: "/ofte-stilte-sporsmal",
  },
  {
    label: "contact-title",
    route: "/kontakt",
  },
];
</script>
