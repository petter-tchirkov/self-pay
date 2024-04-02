<template>
  <div class="catalogue__item item flex justify-between flex-col" :class="{ 'mr-5 last:mr-4': isInSlider }"
    @click="$router.push(localePath(`/${dish?.productId}`))">
    <button class="item__favourite">
      <icons-favourite-icon />
    </button>
    <div class="w-full flex justify-center pt-3">
      <img :src="getImageUrl(dish?.image)" alt="dish" class="item__image mb-2" />
    </div>
    <div>
      <p class="item__name capitalize">{{ dish.name }}</p>
      <span class="item__price">{{
    `${dish.price.prices[1]} ${$t('uah')}`
        }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Dish } from '~/types/dish'
import { getImageUrl } from '~/composables/useGetImageUrl'
const localePath = useLocalePath()

const { dish, isInSlider = false } = defineProps<{
  dish: Dish
  isInSlider?: boolean
}>()


</script>

<style scoped lang="scss">
.item {
  background-color: #f5f5f5;
  border-radius: 15px;
  padding-inline: 10px;
  padding-bottom: 5px;
  padding-top: 0;
  min-width: 161px;
  position: relative;

  box-shadow:
    2px 2px 5px 0px #929292e5,
    -2px -2px 4px 0px #ffffffe5,
    2px -2px 4px 0px #92929233,
    -2px 2px 4px 0px #92929233,
    -1px -1px 2px 0px #92929280 inset,
    1px 1px 2px 0px #ffffff4d inset;

  &__favourite {
    position: absolute;
    right: 10px;
    top: 10px;
  }

  &__image {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 15px;
  }

  &__name {
    color: #666666;
    font-size: 15px;
    line-height: 16px;
    font-weight: 600;
    margin-bottom: 4px;
  }

  &__price {
    color: #2f2f2f;
    font-size: 18px;
    font-weight: 800;
    line-height: 19.51px;
  }
}
</style>
