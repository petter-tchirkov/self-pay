<template>
  <section class="product">
    <button
      class="product__back"
      @click="$router.back"
    >
      <div
        class="flex items-center justify-center bg-[#1d9e92] w-12 h-12 rounded-full"
      >
        <img
          src="/images/icons/arrow.svg"
          alt=""
        />
      </div>
    </button>
    <div
      class="product__picture h-full w-full bg-cover grow bg-center"
      :style="{ 'background-image': `url('${getImageUrl(dish?.image)}')` }"
    >
      <!-- <img -->
      <!--   class="product__image w-full h-full object-cover" -->
      <!--   :src="dish?.image" -->
      <!--   alt="" -->
      <!-- /> -->
    </div>
    <div class="product__content">
      <div class="product__description">
        <h1 class="product__title">
          {{ dish?.name }}
        </h1>
      </div>
      <div class="product__info">
        <div class="product__rating">
          <img
            src="/images/icons/star.svg"
            alt=""
          />
          <img
            src="/images/icons/star.svg"
            alt=""
          />
          <img
            src="/images/icons/star.svg"
            alt=""
          />
          <img
            src="/images/icons/star.svg"
            alt=""
          />
          <img
            src="/images/icons/star-empty.svg"
            alt=""
          />
        </div>
        <span class="product__price">{{
          `${dish?.price.prices[1]} ${$t('uah')}`
        }}</span>
      </div>
      <div class="product__size">
        <h2 class="product__size--text">{{ $t('servingSize') }}</h2>
        <div class="radio-group">
          <label class="radio">
            <input
              type="radio"
              value="big"
              name="size"
            />
            <span>{{ $t('big') }} (550 {{ $t('gram') }})</span>
          </label>
          <label class="radio">
            <input
              type="radio"
              value="small"
              name="size"
            />
            <span>{{ $t('small') }} (200 {{ $t('gram') }})</span>
          </label>
        </div>
      </div>
      <div class="product__text">
        <p>
          {{
            dish?.description ?? 'Sorry, there is no description at the moment'
          }}
        </p>
      </div>
      <div class="product__actions">
        <button class="product__favourite">
          <img
            src="/images/icons/heart.svg"
            alt=""
          />
        </button>
        <button
          class="product__add"
          @click="[addToOrder(dish), $router.back()]"
        >
          {{ $t('addToOrder') }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import {getImageUrl} from '~/composables/useGetImageUrl'
  import type {Dish} from '~/types/dish'
  const url = useRuntimeConfig().public.apiURL
  const {product} = useRoute().params
  const { addToOrder } = useOrderStore()

  const {data: dish} = await useFetch<Dish>(`${url}/Products/${product}`)
</script>

<style scoped lang="scss">
  .radio-group {
    display: flex;
    gap: 10px;
    margin-block: 20px;
  }

  .radio {
    input {
      display: none;
      transition: all 0.3s;
    }

    input[type='radio']:checked ~ span {
      box-shadow:
        2px 2px 5px 0px #686868e5 inset,
        -2px -2px 4px 0px #f2f2f2e5 inset,
        2px -2px 4px 0px #68686833 inset,
        -2px 2px 4px 0px #68686833 inset,
        -1px -1px 2px 0px #68686880,
        1px 1px 2px 0px #f2f2f24d;
      background: #adadad;
    }

    span {
      box-shadow:
        2px 2px 5px 0px #686868e5,
        -2px -2px 4px 0px #f2f2f2e5,
        2px -2px 4px 0px #68686833,
        -2px 2px 4px 0px #68686833,
        -1px -1px 2px 0px #68686880 inset,
        1px 1px 2px 0px #f2f2f24d inset;
      padding: 10px;
      background: linear-gradient(180deg, #dfdfdf 0%, #eeeeee 100%);
      border-radius: 15px;
      transition: all 0.3s;
    }
  }

  .product {
    position: relative;
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    &__content {
      background: linear-gradient(180deg, #eeeeee 0%, #d9d9d9 100%);
      padding-inline: 15px;
      width: 100%;
      border-radius: 15px 15px 0 0;
      height: 50%;
      height: 403px;
      overflow-y: scroll;
    }

    &__back {
      position: absolute;
      top: 30px;
      left: 20px;
    }

    &__description {
      border-radius: 15px 15px 0 0;
      padding-top: 20px;
    }

    &__title {
      color: #060f0acc;
      font-size: 24px;
      line-height: 28px;
      margin-bottom: 20px;
    }

    &__info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 0;
      margin-bottom: 20px;
    }

    &__price {
      color: #060f0acc;
      font-size: 24px;
      line-height: 28px;
      font-weight: 800;
    }

    &__rating {
      display: flex;
      align-items: center;
      gap: 5px;
    }

    &__actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 20px;
      margin-top: 20px;
    }

    &__favourite {
      padding: 14px;
      border-radius: 15px;
      background: linear-gradient(180deg, #32c5b8 0%, #12897e 100%);
      box-shadow:
        2px 2px 5px 0px #14645de5,
        -2px -2px 4px 0px #30ead9e5,
        2px -2px 4px 0px #14645d33,
        -2px 2px 4px 0px #14645d33,
        -1px -1px 2px 0px #14645d80 inset,
        1px 1px 2px 0px #30ead94d ins;
    }

    &__add {
      font-size: 18px;
      font-weight: 600;
      border-radius: 15px;
      background: linear-gradient(180deg, #32c5b8 0%, #12897e 100%);
      padding: 14px 58px;
      color: #f3f3f3;

      box-shadow:
        2px 2px 5px 0px #14645de5,
        -2px -2px 4px 0px #30ead9e5,
        2px -2px 4px 0px #14645d33,
        -2px 2px 4px 0px #14645d33,
        -1px -1px 2px 0px #14645d80 inset,
        1px 1px 2px 0px #30ead94d ins;
    }
  }
</style>
