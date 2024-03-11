import type { Dish } from '~/types/dish'
export const useDishesStore = defineStore('dishes', () => {
  const url = useRuntimeConfig().public.apiURL

  const dishes = ref<Dish[]>([])
  const fetchDishes = async () => {
    await $fetch(`${url}/Products`, {
      onResponse({ response }) {
        dishes.value = response._data
      }
    })
  }

  const fetchDishesByCategory = async (categoryId: string) => {
    await $fetch(`${url}/Products/category/${categoryId}`, {
      onResponse({ response }) {
        dishes.value = response._data
      }
    })
  }

  return { dishes, fetchDishes, fetchDishesByCategory }
})
