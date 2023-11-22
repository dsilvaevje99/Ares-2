<template>
  <PageTiles
    :page="store.registerPage"
    :locale="localeConfig.currLocale"
    tinymce-enabled
  >
    <template #no-content>
      <LoadingSpinner />
    </template>
  </PageTiles>
</template>

<script setup lang="ts">
import { useContentStore } from "@/stores/content";
import useLocaleConfig from "~/hooks/useLocaleConfig";

const store = useContentStore();
const { localeConfig } = useLocaleConfig();
</script>
