<template>
  <section class="wrapper overflow-x-hidden">
    <div
      v-if="order.length"
      class="overlay w-full fixed top-0 left-0 bg-black bg-opacity-40 h-screen z-30"
      style="backdrop-filter: blur(4px)"
      :class="{ hidden: !isOrderOpened }"
    ></div>
    <header
      class="fixed top-0 w-full z-10 pt-4 transition-all duration-300"
      :class="{ 'bg-[#EEEEEE]': y > 0 }"
    >
      <Search />
      <Categories />
    </header>
    <div>
      <div
        v-if="selectedCategory === null"
        class="menu__all-products"
      >
        <FoodSlider
          v-for="category in fakeCategories"
          :key="category.categoryId"
          :dishes="getDishesByCategoryId(category.categoryId)"
        />
      </div>
      <FoodGrid v-else />
    </div>
    <OrderButton
      ref="orderButton"
      v-if="order.length"
    />
  </section>
</template>

<script setup lang="ts">
  import { useWindowScroll, useSwipe } from '@vueuse/core'
  const { y } = useWindowScroll()
  const { t } = useI18n()

  const { dishes, fakeDishes } = storeToRefs(useDishesStore())
  const { fetchDishes } = useDishesStore()
  const { categories, selectedCategory, fakeCategories } = storeToRefs(
    useCategoryStore()
  )
  const { order } = storeToRefs(useOrderStore())
  // await fetchDishes()

  const orderButton = ref()
  const { direction } = useSwipe(orderButton, {
    onSwipe() {
      if (direction.value === 'down') {
        isOrderOpened.value = false
      }
    }
  })

  const getDishesByCategoryId = (categoryId: string) => {
    return fakeDishes.value.filter((dish) => dish.categoryId === +categoryId)
  }

  const chosenPizza = ref([
    { name: 'pizzaCheese', price: 100, image: '/images/pizza1.png' },
    { name: 'pizzaPear', price: 120, image: '/images/pizza2.png' },
    { name: 'pizzaCheese', price: 100, image: '/images/pizza1.png' },
    { name: 'pizzaCheese', price: 100, image: '/images/pizza1.png' },
    { name: 'pizzaCheese', price: 100, image: '/images/pizza1.png' },
    { name: 'pizzaPear', price: 120, image: '/images/pizza2.png' },
    { name: 'pizzaPear', price: 120, image: '/images/pizza2.png' },
    { name: 'pizzaPear', price: 120, image: '/images/pizza2.png' }
  ])

  const { isOrderOpened } = storeToRefs(useGlobalStore())

  const selectedFood = ref(t('categories.all'))
</script>

<style scoped lang="scss">
  .menu {
    padding-block: 160px;
    padding-inline: 16px;
    height: 100%;

    &__all-products {
      padding-block: 160px;
      padding-inline: 0;
      padding-left: 16px;
      height: 100%;
    }

    &__title {
      font-size: 25px;
      font-weight: 600;
      margin-bottom: 10px;
    }

    &__grid {
      display: grid;
      grid-template-columns: 1fr1fr;
      row-gap: 20px;
    }
  }
</style>
