<template>
  <button @click.stop="toggleMenu" class="fixed top-5 right-5">
    <Bars3Icon class="h-8 w-8 text-primary" />
  </button>
  <div
    ref="overlayRef"
    @click.stop="toggleMenu"
    class="fixed top-0 right-0 bg-black bg-opacity-50 w-0 h-full overflow-x-hidden duration-200 z-10"
  >
    <div
      ref="menuRef"
      class="fixed top-0 right-0 bg-white z-10 overflow-x-hidden duration-200 h-full w-0"
    >
      <div class="p-5 min-w-[30vw]">
        <div class="flex justify-between gap-5 items-start">
          <SearchField />
          <button @click.stop="toggleMenu">
            <XMarkIcon class="h-8 w-8 text-primary" />
          </button>
        </div>
        <nav class="flex flex-col mt-5">
          <NuxtLink
            v-for="item in navLinks"
            :key="item.label"
            :to="localePath(item.route, locale)"
            class="rounded-md p-2 px-3 mb-1 hover:bg-grey text-lg"
            exact-active-class="bg-primary hover:bg-primary text-white"
            >{{ $t(item.label) }}</NuxtLink
          >
        </nav>
      </div>
    </div>
  </div>

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
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import SearchField from "./inputs/SearchField.vue";

const { locale } = useI18n();
const localePath = useLocalePath();

const open = ref(false);
const overlayRef = ref<HTMLDivElement>();
const menuRef = ref<HTMLDivElement>();

const toggleMenu = () => {
  if (overlayRef.value && menuRef.value) {
    const isOpen = !open.value;
    open.value = isOpen;
    if (isOpen) {
      overlayRef.value.style.width = "100%";
      menuRef.value.style.width = "max-content";
    } else {
      overlayRef.value.style.width = "0";
      menuRef.value.style.width = "0";
    }
  }
};

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
