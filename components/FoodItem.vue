<template>
  <div class="catalogue__item item">
    <button class="item__favourite">
      <img src="/images/icons/favourite.svg" alt="" />
    </button>
    <img :src="image" alt="" class="item__image" />
    <p class="item__name">{{ name }}</p>
    <span class="item__price">{{ price + " " + $t("uah") }}</span>
  </div>
</template>

<script setup lang="ts">
const {
  name = "Burger",
  image = "/images/burger.png",
  price = 255,
} = defineProps<{
  name: string;
  image: string;
  price: number;
}>();
</script>

<style scoped lang="scss">
.item {
  background-color: #f5f5f5;
  border-radius: 15px;
  padding: 10px;
  min-width: 135px;
  position: relative;
  margin-right: 20px;

  &:last-child {
    margin-right: 5px;
  }

  box-shadow: 2px 2px 5px 0px #929292e5, -2px -2px 4px 0px #ffffffe5,
    2px -2px 4px 0px #92929233, -2px 2px 4px 0px #92929233,
    -1px -1px 2px 0px #92929280 inset, 1px 1px 2px 0px #ffffff4d inset;

  &__favourite {
    position: absolute;
    right: 10px;
  }

  &__image {
    width: 100%;
    height: 100px;
    object-fit: cover;
    border-radius: 15px;
  }

  &__name {
    color: #666666;
    font-size: 18px;
    font-weight: 600;
  }

  &__price {
    color: #2f2f2f;
    font-size: 16px;
    font-weight: 600;
  }
}
</style>
