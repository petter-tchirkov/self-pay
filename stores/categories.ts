type Category = {
  categoryId: string
  name: string
  description: string
  categoryPhoto: string
}

export const useCategoryStore = defineStore('category', () => {
  const url = useRuntimeConfig().public.apiURL
  const categories = ref<Category[]>([])
  const selectedCategory = ref<Category | null>(null)

  const fetchCategories = async () => {
    await useFetch(`${url}/Categories`, {
      onResponse({ response }) {
        categories.value = response._data
      }
    })
  }

  return { categories, fetchCategories, selectedCategory }
})
