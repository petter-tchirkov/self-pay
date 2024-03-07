<template>
  <div
    class="order__item item"
    :class="{ checked: checked }"
  >
    <img
      class="item__image"
      :src="image"
      alt=""
    />
    <div class="item__info">
      <p class="item__title">{{ $t(`foods.${title}`) }}</p>
      <div class="item__acts">
        <span class="item__price">{{ `${price} ${$t('uah')}` }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const {
    image = '/images/burger.png',
    title = 'Burger',
    price = 250,
    id = 'checkbox'
  } = defineProps<{
    image: string
    title: string
    price: number
    id: string
  }>()
</script>

<style scoped lang="scss">
  .item {
    display: flex;
    align-items: center;
    border-radius: 15px;
    position: relative;
    gap: 15px;
    height: 90px;
    flex: 1;
    transition: 0.3s;
    background: linear-gradient(
      180deg,
      #f4f4f4 0%,
      #f6f6f6 0.01%,
      #dddddd 100%
    );
    box-shadow:
      2px 2px 5px 0px #929292e5,
      -2px -2px 4px 0px #ffffffe5,
      2px -2px 4px 0px #92929233,
      -2px 2px 4px 0px #92929233,
      -1px -1px 2px 0px #92929280 inset,
      1px 1px 2px 0px #ffffff4d inset;

    &.checked {
      box-shadow:
        2px 2px 5px 0px #299d92e5,
        -2px -2px 4px 0px #299d92e5,
        2px -2px 4px 0px #299d9233,
        -2px 2px 4px 0px #299d9233,
        -1px -1px 2px 0px #299d9280 inset,
        1px 1px 2px 0px #299d924d inset;
    }

    &__image {
      width: 90px;
    }

    &__title {
      font-size: 15px;
      line-height: 16px;
      font-weight: 600;
      max-width: 187px;
      height: 32px;
    }

    &__info {
      width: 100%;
      padding-right: 10px;
      padding-block: 10px;
    }

    &__acts {
      display: flex;
      align-items: end;
      justify-content: space-between;
    }

    &__price {
      font-size: 18px;
      font-weight: 600;
      color: #1d9e92;
    }

    &__count {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    &__counter {
      width: 35px;
      height: 35px;
      border-radius: 15px;
      background: #eaeaea;

      box-shadow:
        2px 2px 5px 0px #b0b0b0e5,
        -2px -2px 4px 0px #ffffffe5,
        2px -2px 4px 0px #b0b0b033,
        -2px 2px 4px 0px #b0b0b033,
        -1px -1px 2px 0px #b0b0b080 inset,
        1px 1px 2px 0px #ffffff4d inset;

      &:active {
        background: linear-gradient(180deg, #c8c8c8 0%, #919191 100%);
        box-shadow:
          2px 2px 5px 0px #787878e5 inset,
          -2px -2px 4px 0px #ffffffe5 inset,
          2px -2px 4px 0px #78787833 inset,
          -2px 2px 4px 0px #78787833 inset,
          -1px -1px 2px 0px #78787880,
          1px 1px 2px 0px #ffffff4d;
      }
    }

    &__close {
      cursor: pointer;
      position: absolute;
      top: 15px;
      right: 15px;
    }
  }
</style>
