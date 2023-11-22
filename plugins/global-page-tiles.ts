import { defineNuxtPlugin } from "#app";
import * as components from "vue-page-tiles";

export default defineNuxtPlugin((nuxtApp) => {
  Object.entries(components).forEach(([name, component]) => {
    nuxtApp.vueApp.component(name, component);
  });
});
