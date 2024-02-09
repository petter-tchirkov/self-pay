export const useGlobalStore = defineStore("global", () => {
  const isDark = ref(false);
  const isOrderOpened = ref(false);

  const allCheckd = ref(false);

  const langData = ref([
    {
      name: "English",
      code: "en",
    },
    {
      name: "Українська",
      code: "ua",
    },
    {
      name: "Espanol",
      code: "es",
    },
    {
      name: "Deutsch",
      code: "de",
    },
  ]);

  return {
    isDark,
    langData,
    allCheckd,
    isOrderOpened,
  };
});
