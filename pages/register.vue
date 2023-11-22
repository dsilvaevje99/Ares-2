<template>
  <PageTiles
    :page="store.registerPage"
    :locale="localeConfig.currLocale"
    tinymce-enabled
  />
  <PageTileEditor
    v-model="store.registerPage.content"
    :locale-config="localeConfig"
    :tinymce-api-key="runtimeConfig.public.TINYMCE_API_KEY"
    @localeChanged="setLocale"
  />
</template>

<script setup lang="ts">
import { useContentStore } from "@/stores/content";
import useLocaleConfig from "~/hooks/useLocaleConfig";

const runtimeConfig = useRuntimeConfig();
const store = useContentStore();
const { localeConfig, setLocale } = useLocaleConfig();
</script>
