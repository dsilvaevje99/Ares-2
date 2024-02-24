<template>
  <button
    @click.stop="toggleMenu"
    :class="`z-10 fixed top-10 right-10 transition-all duration-300 ${
      hasScrolledPast ? 'bg-primary' : 'bg-white'
    } rounded-md`"
  >
    <Bars3Icon
      :class="`h-8 w-8 transition-all duration-300 ${
        hasScrolledPast ? 'text-white' : 'text-primary'
      }`"
    />
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
      <div class="p-10 min-w-[30vw]">
        <div class="flex justify-between gap-5 items-start">
          <SearchField />
          <button @click.stop="toggleMenu">
            <XMarkIcon class="h-8 w-8 text-primary" />
          </button>
        </div>
        <NavLinks />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import useScrollDetection from "~/hooks/useScrollDetection";

const { hasScrolledPast } = useScrollDetection(100);

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
</script>
