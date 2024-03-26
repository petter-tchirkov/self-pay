<template>
  <div class="order__box">
    <div class="round">
      <input type="checkbox" v-model="checked" :id="id" class="order__check" />
      <label :for="id" class="order__check-label"></label>
    </div>
    <div class="order__item item" :class="{ checked: checked }">
      <img class="item__image pl-2.5" :src="image" alt="" />
      <div class="item__info">
        <p class="item__title">{{ title }}</p>
        <div class="item__acts">
          <span class="item__price">{{ `${price} ${$t('uah')}` }}</span>
          <div class="item__count">
            <button class="item__counter" @click="count >= 1 ? count-- : undefined">
              -
            </button>
            <span>{{ count }}</span>
            <button class="item__counter" @click="count++">
              +
            </button>
          </div>
        </div>
      </div>
      <img class="item__close" @click="order.removeFromOrder(dish)" src="/images/icons/close.svg" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Dish } from '~/types/dish'
const {
  image = '/images/burger.png',
  title = 'Burger',
  price = 250,
  id = 'checkbox',
  dish = {}
} = defineProps<{
  image: string
  title: string
  price: number
  id: string
  dish: Dish
}>()

const checked = ref(false)

const count = ref(0)
// const getImageUrl = computed(() => {
//   if (image) {
//     return `https://web-mouse.joinposter.com${image}`
//   } else {
//     return '/images/icons/dish.svg'
//   }
// })

const order = useOrderStore()
</script>

<style scoped lang="scss">
.order__box {
  display: flex;
  align-items: center;
  gap: 15px;
}

.item {
  display: flex;
  align-items: center;
  border-radius: 15px;
  position: relative;
  gap: 15px;
  height: 90px;
  flex: 1;
  transition: 0.3s;
  background: linear-gradient(180deg,
      #f4f4f4 0%,
      #f6f6f6 0.01%,
      #dddddd 100%);
  box-shadow: 2px 2px 5px 0px #929292e5, -2px -2px 4px 0px #ffffffe5,
    2px -2px 4px 0px #92929233, -2px 2px 4px 0px #92929233,
    -1px -1px 2px 0px #92929280 inset, 1px 1px 2px 0px #ffffff4d inset;

  &.checked {
    box-shadow: 2px 2px 5px 0px #299d92e5, -2px -2px 4px 0px #299d92e5,
      2px -2px 4px 0px #299d9233, -2px 2px 4px 0px #299d9233,
      -1px -1px 2px 0px #299d9280 inset, 1px 1px 2px 0px #299d924d inset;
  }

  &__image {
    width: 90px;
    border-radius: 8px;
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
  }

  &__acts {
    display: flex;
    align-items: end;
    justify-content: space-between;
  }

  &__price {
    font-size: 16px;
    font-weight: 600;
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

    box-shadow: 2px 2px 5px 0px #b0b0b0e5, -2px -2px 4px 0px #ffffffe5,
      2px -2px 4px 0px #b0b0b033, -2px 2px 4px 0px #b0b0b033,
      -1px -1px 2px 0px #b0b0b080 inset, 1px 1px 2px 0px #ffffff4d inset;

    &:active {
      background: linear-gradient(180deg, #c8c8c8 0%, #919191 100%);
      box-shadow: 2px 2px 5px 0px #787878e5 inset,
        -2px -2px 4px 0px #ffffffe5 inset, 2px -2px 4px 0px #78787833 inset,
        -2px 2px 4px 0px #78787833 inset, -1px -1px 2px 0px #78787880,
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

.round {
  position: relative;
  width: 25px;
  height: 25px;

  input {
    visibility: hidden;
  }

  label {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 4px;
    cursor: pointer;
    width: 25px;
    height: 25px;
    box-shadow: 2px 2px 5px 0px #b0b0b0e5 inset,
      -2px -2px 4px 0px #ffffffe5 inset, 2px -2px 4px 0px #b0b0b033 inset,
      -2px 2px 4px 0px #b0b0b033 inset, -1px -1px 2px 0px #b0b0b080,
      1px 1px 2px 0px #ffffff4d;

    &:after {
      content: '';
      position: absolute;
      top: 4px;
      left: 4px;
      width: 17px;
      height: 17px;
      border-radius: 4px;
      background: #58a39c;
      opacity: 0;
      box-shadow: 2px 2px 5px 0px #35625ee5 inset,
        -2px -2px 4px 0px #7be4dae5 inset, 2px -2px 4px 0px #35625e33 inset,
        -2px 2px 4px 0px #35625e33 inset, -1px -1px 2px 0px #35625e80,
        1px 1px 2px 0px #7be4da4d;
    }
  }
}

.round input[type='checkbox']:checked+label:after {
  opacity: 1;
}
</style>
