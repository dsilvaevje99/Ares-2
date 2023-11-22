<template>
  <PageTiles
    :page="store.contactPage"
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
import { PageTiles } from "vue-page-tiles";
import useLocaleConfig from "~/hooks/useLocaleConfig";

const store = useContentStore();
const { localeConfig } = useLocaleConfig();
</script>
