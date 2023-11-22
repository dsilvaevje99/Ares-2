import { useContentStore } from "@/stores/content";
import type { ContentStoreSGA } from "@/stores/content";
import type { PageContent } from "vue-page-tiles";

export default defineNuxtPlugin(({ vueApp }) => {
  const store = useContentStore(vueApp.$nuxt.$pinia);

  addRouteMiddleware(
    "fetch-data",
    (to) => {
      // Reset fetchFailed flag to try loading page content again
      store.fetchFailed = false;

      const foundName = to.name?.toString().split("__")[0];
      const pageName = foundName === "index" ? "home" : foundName;
      const contentIsEmpty =
        (store[`${pageName}Page` as keyof ContentStoreSGA] as PageContent)
          .content.length === 0;

      if (pageName && contentIsEmpty) {
        store.fetchPageContent(pageName);
      }
    },
    { global: true }
  );
});
