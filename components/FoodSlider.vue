<template>
  <section class="catalogue">
    <h2 class="catalogue__title">{{ title }}</h2>
    <div class="catalogue__slider">
      <FoodItem
        v-for="f in food"
        :key="f.name"
        :name="f.name"
        :image="f.img"
        :price="f.price"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
  const { title = 'Burgers', food } = defineProps<{
    title: string
    food: {
      name: string
      img: string
      price: number
    }[]
  }>()
</script>

<style scoped lang="scss">
  .catalogue {
    margin-bottom: 10px;
    position: relative;

    &__title {
      font-size: 25px;
      font-weight: 600;
    }

    &__slider {
      display: flex;
      overflow-x: scroll;
      padding-block: 10px;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
</style>
