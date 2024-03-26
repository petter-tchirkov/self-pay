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

  const fakeCategories = ref<Category[]>([
    {
      categoryId: '1',
      name: 'Pizza',
      description: 'Description 1',
      categoryPhoto: 'https://via.placeholder.com/150'
    },
    {
      categoryId: '2',
      name: 'Pasta',
      description: 'Description 2',
      categoryPhoto: 'https://via.placeholder.com/150'
    },
    {
      categoryId: '3',
      name: 'Beverages',
      description: 'Description 3',
      categoryPhoto: 'https://via.placeholder.com/150'
    },
    {
      categoryId: '4',
      name: 'Desserts',
      description: 'Description 3',
      categoryPhoto: 'https://via.placeholder.com/150'
    }
  ])

  const fetchCategories = async () => {
    await useFetch(`${url}/Categories`, {
      onResponse({ response }) {
        categories.value = response._data
      }
    })
  }

  return { categories, fetchCategories, selectedCategory, fakeCategories }
})
