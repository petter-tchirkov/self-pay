<template>
  <section class="wrapper overflow-x-hidden">
    <div class="search pt-2">
      <div class="search__box">
        <InputText
          v-model="search"
          :placeholder="$t('search')"
          class="search__input"
        />
        <img src="/images/icons/search.svg" alt="" />
      </div>
      <button class="search__filter">
        <img src="/images/icons/filter.svg" alt="" />
      </button>
    </div>
    <div class="foods">
      <button
        v-for="(food, index) in foods"
        :key="food.name"
        class="foods__btn"
        :class="{ active: selectedFood === index }"
        @click="selectedFood = index"
      >
        {{ food.name }}
      </button>
    </div>
    <FoodSlider :food="foodStore.popular" :title="$t('categories.popular')" />
    <FoodSlider :food="foodStore.seconds" :title="$t('categories.seconds')" />
    <FoodSlider :food="foodStore.salads" :title="$t('categories.salads')" />
    <OrderButton />
  </section>
</template>

<script setup lang="ts">
const search = ref("");
const { t } = useI18n();
const foods = ref([
  { name: t("categories.all"), active: false },
  { name: t("categories.popular"), active: false },
  { name: t("categories.burgers"), active: false },
  { name: t("categories.salads"), active: false },
  { name: t("categories.pizza"), active: false },
]);

const foodStore = useFoodStore();
const selectedFood = ref(0);
</script>

<style scoped lang="scss">
.search {
  display: flex;
  gap: 15px;
  padding-inline: 16px;

  &__box {
    position: relative;
    flex: 1;

    img {
      position: absolute;
      top: 45%;
      left: 15px;
      transform: translateY(-50%);
    }
  }

  &__input {
    border-radius: 15px;
    height: 40px;
    padding-left: 38px;
    flex: 1;
    width: 100%;
    box-shadow: 0px 2px 6px 0px #90909040;

    &::placeholder {
      color: #666666;
    }
  }

  &__filter {
    background: #fff;
    padding-inline: 15px;
    padding-block: 12px;
    border-radius: 15px;
  }
}

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
    box-shadow: 2px 2px 5px 0px #8c8c8ce5, -2px -2px 4px 0px #ffffffe5,
      2px -2px 4px 0px #8c8c8c33, -2px 2px 4px 0px #8c8c8c33,
      -1px -1px 2px 0px #8c8c8c80 inset, 1px 1px 2px 0px #ffffff4d inset;

    &.active {
      background: #299d92;
    }
  }
}
</style>
