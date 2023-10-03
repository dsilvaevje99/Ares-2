<template>
  <footer class="bg-primary">
    <div class="w-6/12 mx-auto py-8">
      <div class="flex text-white">
        <div class="flex-1">
          <div class="w-max flex flex-col space-y-2">
            <NuxtLink to="">{{ $t("footer-register-link") }}</NuxtLink>
            <NuxtLink to="">{{ $t("footer-first-time-member-link") }}</NuxtLink>
            <NuxtLink to="">{{ $t("footer-how-to-register-link") }}</NuxtLink>
          </div>
        </div>
        <div class="flex flex-1 justify-center">
          <div class="w-max text-center flex flex-col space-y-2">
            <NuxtLink to="">{{ $t("footer-price-calculator-link") }}</NuxtLink>
          </div>
        </div>
        <div class="flex flex-1 justify-end">
          <div class="w-max flex flex-col space-y-2">
            <button class="underline" @click="handleSwitchLocale">
              {{ $t("translate-page") }}
            </button>
            <NuxtLink to="">{{ $t("footer-admin-login-link") }}</NuxtLink>
          </div>
        </div>
      </div>
      <p class="text-center text-tertiary mt-4">
        Copyright Ares Turnforening {{ currYear }}
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const switchLocalePath = useSwitchLocalePath();
const { locale, setLocale } = useI18n();

const currYear = computed(() => new Date().getFullYear());
const otherLocale = computed(() => (locale.value === "no" ? "en" : "no"));

const handleSwitchLocale = () => {
  setLocale(otherLocale.value);
  switchLocalePath(otherLocale.value);
};
</script>
