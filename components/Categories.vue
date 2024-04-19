<template>
  <div class="categories flex overflow-x-scroll py-5 pl-4">
    <button class="categories__btn" :class="{ active: selectedCategory === null }" @click="fetchAllDishes">{{
      $t('categories.all') }}</button>
    <button v-for="category in fakeCategories" :key="category.name" class="categories__btn text-nowrap"
      :class="{ active: selectedCategory?.name === category.name }" @click="filterDishesByCategory(category)">
      {{ category.name }}
    </button>
  </div>
</template>

<script setup lang="ts">
const { fetchCategories } = useCategoryStore()
const { categories, selectedCategory, fakeCategories } = storeToRefs(useCategoryStore())
const { fetchDishesByCategory, fetchDishes } = useDishesStore()

// await fetchCategories()

const filterDishesByCategory = async (category: any) => {
  selectedCategory.value = category
  await fetchDishesByCategory(category.categoryId)
}
const fetchAllDishes = async () => {
  selectedCategory.value = null
  await fetchDishes()
}
</script>

<style scoped lang="scss">
.categories {
  &::-webkit-scrollbar {
    display: none;
  }

  &__btn {
    padding: 10px 15px;
    border-radius: 15px;
    color: #060f0acc;
    transition: all 0.3s;
    margin-right: 15px;
    background: linear-gradient(180deg, #f4f4f4 0%, #e9e9e9 100%);

    box-shadow:
      2px 2px 5px 0px #8c8c8ce5,
      -2px -2px 4px 0px #ffffffe5,
      2px -2px 4px 0px #8c8c8c33,
      -2px 2px 4px 0px #8c8c8c33,
      -1px -1px 2px 0px #8c8c8c80 inset,
      1px 1px 2px 0px #ffffff4d inset;

    &.active {
      background: #299d92;
      color: #fff;
    }
  }
}
</style>
