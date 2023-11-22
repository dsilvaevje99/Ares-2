export default function useLocaleConfig() {
  const { locales, locale, setLocale } = useI18n();

  const allLocales = computed(() =>
    locales.value.map((lang) => (typeof lang === "string" ? lang : lang.code))
  );
  const localeConfig = computed({
    get() {
      return { locales: allLocales.value, currLocale: locale.value };
    },
    set(newVal) {
      console.log("LOCALE HOOK NEW VAL: ", newVal);
      setLocale(newVal.currLocale);
    },
  });

  return { localeConfig, setLocale };
}
