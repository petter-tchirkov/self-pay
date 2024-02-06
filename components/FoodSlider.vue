<template>
  <section class="catalogue">
    <h2 class="catalogue__title">{{ title }}</h2>
    <div class="catalogue__slider">
      <FoodItem
        :name="food.name"
        :image="food.img"
        :price="food.price"
        v-for="food in foodData"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const { title = "Burgers" } = defineProps<{
  title: string;
}>();
const foodData = ref([
  {
    name: "Burger",
    img: "/images/burger.png",
    price: 255,
  },
  {
    name: "Burger",
    img: "/images/burger.png",
    price: 255,
  },
  {
    name: "Burger",
    img: "/images/burger.png",
    price: 255,
  },
  {
    name: "Burger",
    img: "/images/burger.png",
    price: 255,
  },
  {
    name: "Burger",
    img: "/images/burger.png",
    price: 255,
  },
]);
</script>

<style scoped lang="scss">
.catalogue {
  padding-inline: 16px;
  margin-bottom: 10px;
  position: relative;

  &__title {
    font-size: 25px;
    font-weight: 600;
  }

  &__slider {
    display: flex;
    overflow-x: auto;
    padding-block: 10px;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
