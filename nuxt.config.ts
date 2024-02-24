// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: [
    "@pinia/nuxt",
    [
      "@nuxtjs/i18n",
      {
        lazy: true,
        langDir: "locales",
        strategy: "prefix_except_default",
        locales: [
          {
            code: "en",
            iso: "en",
            name: "English",
            file: "en.json",
          },
          {
            code: "no",
            iso: "no",
            name: "Norsk",
            file: "no.json",
          },
        ],
        defaultLocale: "no",
        vueI18n: "./i18n.options.ts",
        parsePages: false,
        customRoutes: "config",
        pages: {
          register: {
            no: "/pamelding",
            en: "/how-to-register",
          },
          prices: {
            no: "/priser",
            en: "/prices",
          },
          schedule: {
            no: "/treningstider",
            en: "/schedule",
          },
          board: {
            no: "/styret",
            en: "/board-members",
          },
          faq: {
            no: "/ofte-stilte-sporsmal",
            en: "/faq",
          },
          contact: {
            no: "/kontakt",
            en: "/contact",
          },
        },
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: "i18n_redirected",
          redirectOn: "root", // recommended
          alwaysRedirect: true,
        },
      },
    ],
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Poppins: true,
          download: true,
          inject: true,
        },
      },
    ],
  ],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      TINYMCE_API_KEY: process.env.NUXT_TINYMCE_API_KEY,
      DB_PASSWORD: process.env.NUXT_DB_PASSWORD,
    },
  },
});
