<template>
  <footer class="bg-primary">
    <div class="max-lg:w-full max-xl:w-8/12 xl:w-6/12 max-lg:px-5 mx-auto py-8">
      <div class="max-md:flex-col flex text-white">
        <div class="flex flex-1 max-md:mb-5">
          <div class="w-max flex flex-col space-y-2">
            <NuxtLink to="">{{ $t("footer-register-link") }}</NuxtLink>
            <NuxtLink to="">{{ $t("footer-first-time-member-link") }}</NuxtLink>
            <NuxtLink to="">{{ $t("footer-how-to-register-link") }}</NuxtLink>
          </div>
        </div>
        <div class="flex flex-1 md:justify-center max-md:mb-5">
          <div class="w-max md:text-center flex flex-col space-y-2">
            <NuxtLink to="">{{ $t("footer-price-calculator-link") }}</NuxtLink>
          </div>
        </div>
        <div class="flex flex-1 md:justify-end">
          <div class="w-max flex flex-col space-y-2">
            <button class="underline" @click="handleSwitchLocale">
              {{ $t("translate-page") }}
            </button>
            <NuxtLink to="">{{ $t("footer-admin-login-link") }}</NuxtLink>
          </div>
        </div>
      </div>
      <p class="text-center text-tertiary max-md:mt-10 mt-4">
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
