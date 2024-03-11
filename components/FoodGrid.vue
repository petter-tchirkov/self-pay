<template>
  <div ref="menu" class="menu">
    <h2 class="menu__title">{{ selectedFood }}</h2>
    <h2 v-if="!dishes.length" class="text-center text-xl">{{$t('noFood')}}</h2>
    <div v-else class="menu__grid gap-5">
      <FoodItem v-for="dish in dishes" :dish="dish"/>
    </div>
  </div>
</template>

<script setup lang="ts">
const {dishes} = storeToRefs(useDishesStore())
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
    grid-template-columns: 1fr 1fr;
    row-gap: 20px;
  }
}
</style>
