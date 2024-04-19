export const useGlobalStore = defineStore('global', () => {
  const isDark = ref(false)
  const isOrderOpened = ref(false)
  const isFullOrder = ref(false)
  const isLoading = ref(false)

  const allCheckd = ref(false)

  const langData = ref([
    {
      name: 'English',
      code: 'en'
    },
    {
      name: 'Українська',
      code: 'ua'
    },
    {
      name: 'Espanol',
      code: 'es'
    },
    {
      name: 'Deutsch',
      code: 'de'
    }
  ])

  const getLanguagesWithoutCurrent = (currentLang: string) => {
    return langData.value.filter((lang) => lang.code !== currentLang)
  }

  return {
    isDark,
    langData,
    allCheckd,
    isOrderOpened,
    getLanguagesWithoutCurrent,
    isFullOrder,
    isLoading
  }
})
