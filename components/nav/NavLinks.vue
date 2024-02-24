<template>
  <nav class="flex flex-col">
    <NuxtLink
      v-for="item in navLinks"
      :key="item.label"
      :to="localePath(item.route, locale)"
      :class="`rounded-md p-2 px-3 mb-1 hover:bg-grey text-lg ${props.linkClass}`"
      :exact-active-class="`bg-primary hover:bg-primary text-white ${props.activeClass}`"
      >{{ $t(item.label) }}</NuxtLink
    >
  </nav>
</template>

<script setup lang="ts">
interface Props {
  linkClass?: String;
  activeClass?: String;
}
const props = withDefaults(defineProps<Props>(), {
  linkClass: "",
  activeClass: "",
});

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
