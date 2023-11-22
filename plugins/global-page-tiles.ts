import { defineNuxtPlugin } from "#app";
import { PageTiles } from "vue-page-tiles";
import * as components from "vue-page-tiles/display";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("PageTiles", PageTiles);

  Object.entries(components).forEach(([name, component]) => {
    nuxtApp.vueApp.component(name, component);
  });
});
