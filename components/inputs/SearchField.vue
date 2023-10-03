<template>
  <div>
    <label
      for="page-search"
      class="sr-only block text-sm font-medium leading-6 text-gray-900"
      >{{ $t("search-label") }}</label
    >
    <div class="relative mt-2 rounded-md shadow-sm">
      <div
        class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
      >
        <MagnifyingGlassIcon class="h-4 w-4 text-primary" />
      </div>
      <input
        type="text"
        name="page-search"
        id="page-search"
        class="block w-full rounded-md border-0 p-1.5 pl-9 text-gray-900 ring-1 ring-inset ring-primary placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
        :placeholder="$t('search-label')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline";
</script>
