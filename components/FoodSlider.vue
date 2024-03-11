<template>
  <section class="catalogue mb-3 relative">
    <h2 class="catalogue__title text-2xl font-semibold">{{ categoryName }}</h2>
    <div class="catalogue__slider flex overflow-x-scroll py-3">
      <FoodItem :dish="dish" v-for="dish in dishes" :key="dish.productId" is-in-slider/>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Dish } from '~/types/dish'
const { dishes } = defineProps<{ dishes: Dish[] }>()
const categoryName = computed(() => {
  return dishes.map((dish) => dish.categoryName)[0]
})
</script>

<style scoped lang="scss">
.catalogue {
  &__slider {

    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
