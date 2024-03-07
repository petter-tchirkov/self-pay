<template>
  <section class="wrapper overflow-x-hidden">
    <div
      class="overlay w-full fixed top-0 left-0 bg-black bg-opacity-40 h-screen z-30"
      style="backdrop-filter: blur(4px)"
      :class="{ hidden: !isOrderOpened }"
    ></div>
    <header
      class="fixed top-0 w-full z-10 pt-4 transition-all duration-300"
      :class="{ 'bg-[#EEEEEE]': y > 0 }"
    >
      <Search />
      <div class="foods">
        <button
          v-for="food in foods"
          :key="food.name"
          class="foods__btn"
          :class="{ active: selectedFood === food.name }"
          @click="selectedFood = food.name"
        >
          {{ food.name }}
        </button>
      </div>
    </header>
    <div>
      <div
        v-if="selectedFood === 'Всі'"
        class="menu__all-products"
      >
        <FoodSlider
          :food="foodStore.popular"
          :title="$t('categories.popular')"
        />
        <FoodSlider
          :food="foodStore.seconds"
          :title="$t('categories.seconds')"
        />
        <FoodSlider
          :food="foodStore.salads"
          :title="$t('categories.salads')"
        />
      </div>
      <div
        v-else
        ref="menu"
        class="menu"
      >
        <h2 class="menu__title">{{ selectedFood }}</h2>
        <div class="menu__grid gap-5">
          <FoodItem
            v-for="item in chosenPizza"
            :key="item.name"
            :name="item.name"
            :image="item.image"
            :price="item.price"
            class="!mr-0 !w-full"
          />
        </div>
      </div>
    </div>
    <OrderButton />
  </section>
</template>
<script setup lang="ts">
  import { useWindowScroll } from '@vueuse/core'
  const { y } = useWindowScroll()

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

  const { t } = useI18n()
  const foods = ref([
    { name: t('categories.all'), active: false },
    { name: t('categories.popular'), active: false },
    { name: t('categories.burgers'), active: false },
    { name: t('categories.salads'), active: false },
    { name: t('categories.pizza'), active: false }
  ])

  const { isOrderOpened } = storeToRefs(useGlobalStore())

  const foodStore = useFoodStore()
  const selectedFood = ref(t('categories.all'))
</script>

<style scoped lang="scss">
  // header {
  //   background: linear-gradient(180deg, #f4f4f4 0%, #e9e9e9 100%);
  // }

  .foods {
    display: flex;
    overflow-x: scroll;
    padding-block: 20px;
    padding-inline-start: 16px;

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

      box-shadow: 2px 2px 5px 0px #8c8c8ce5, -2px -2px 4px 0px #ffffffe5,
        2px -2px 4px 0px #8c8c8c33, -2px 2px 4px 0px #8c8c8c33,
        -1px -1px 2px 0px #8c8c8c80 inset, 1px 1px 2px 0px #ffffff4d inset;

      &.active {
        background: #299d92;
      }
    }
  }

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
      grid-template-columns: 1fr 1fr;
      row-gap: 20px;
    }
  }
</style>
