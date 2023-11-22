import { ref, reactive } from "vue";
import { defineStore } from "pinia";
import type { PageContent } from "vue-page-tiles";

export const useContentStore = defineStore("content", () => {
  const fetchFailed = ref(false);

  const homePage = reactive<PageContent>({
    content: [],
  });

  const registerPage = reactive<PageContent>({
    content: [],
  });

  const pricesPage = reactive<PageContent>({
    content: [],
  });

  const schedulePage = reactive<PageContent>({
    content: [],
  });

  const boardPage = reactive<PageContent>({
    content: [],
  });

  const faqPage = reactive<PageContent>({
    content: [],
  });

  const contactPage = reactive<PageContent>({
    content: [],
  });

  const fetchPageContent = async (name: string) => {
    fetchFailed.value = false;
    let result: undefined | PageContent;
    await nextTick(async () => {
      const { data } = await useFetch(`/api/page/${name}`);
      result = data.value as PageContent;
    });
    if (result && result.content.length > 0) {
      switch (result.name) {
        case "home":
          homePage.content = [...result.content];
          break;
        case "register":
          registerPage.content = [...result.content];
          break;
        case "prices":
          pricesPage.content = [...result.content];
          break;
        case "schedule":
          homePage.content = [...result.content];
          break;
        case "board":
          boardPage.content = [...result.content];
          break;
        case "faq":
          faqPage.content = [...result.content];
          break;
        case "contact":
          contactPage.content = [...result.content];
          break;
        default:
          console.log("Found result but no match for page name", result);
      }
    } else {
      fetchFailed.value = true;
    }
  };

  return {
    fetchFailed,
    homePage,
    registerPage,
    pricesPage,
    schedulePage,
    boardPage,
    faqPage,
    contactPage,
    fetchPageContent,
  };
});

type UseNullStore = ReturnType<typeof defineStore>;
type NullStore = ReturnType<UseNullStore>;
type ContentStore = ReturnType<typeof useContentStore>;
export type ContentStoreSGA = Omit<ContentStore, keyof NullStore>;
