<template>
  <section class="product">
    <button class="product__back" @click="$router.back">
      <img src="/images/icons/arrow.svg" alt="" />
    </button>
    <div class="product__picture">
      <img
        class="product__image mb-[78px]"
        src="/images/icons/product.png"
        alt=""
      />
    </div>
    <div class="product__content">
      <div class="product__description">
        <h1 class="product__title">
          {{ $t(`foods.${$route.params.product}`) }}
        </h1>
      </div>
      <div class="product__info">
        <div class="product__rating">
          <img src="/images/icons/star.svg" alt="" />
          <img src="/images/icons/star.svg" alt="" />
          <img src="/images/icons/star.svg" alt="" />
          <img src="/images/icons/star.svg" alt="" />
          <img src="/images/icons/star-empty.svg" alt="" />
        </div>
        <span class="product__price">150 {{ $t("uah") }}</span>
      </div>
      <div class="product__text">
        <p>{{ $t("hekDesc") }}</p>
      </div>
      <div class="product__actions">
        <button class="product__favourite">
          <img src="/images/icons/heart.svg" alt="" />
        </button>
        <button class="product__add">{{ $t("addToOrder") }}</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const foodStore = useFoodStore();
</script>

<style scoped lang="scss">
.product {
  position: relative;
  background: linear-gradient(180deg, #32c5b8 0%, #12897e 100%);
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;

  &__content {
    background: linear-gradient(180deg, #eeeeee 0%, #d9d9d9 100%);
    padding-inline: 15px;
    width: 100%;
    border-radius: 15px 15px 0 0;
  }

  &__back {
    position: absolute;
    top: 20px;
    left: 20px;
    background: linear-gradient(135deg, #dcdcdc 0%, #ffffff 100%);
    border-radius: 15px;
    padding: 10px;
    box-shadow: 2px 2px 5px 0px #929292e5, -2px -2px 4px 0px #ffffffe5,
      2px -2px 4px 0px #92929233, -2px 2px 4px 0px #92929233,
      -1px -1px 2px 0px #92929280 inset, 1px 1px 2px 0px #ffffff4d inset;
  }

  &__picture {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-inline: 40px;
  }

  &__image {
    width: 100%;
    max-width: 400px;
    height: auto;
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
    box-shadow: 2px 2px 5px 0px #14645de5, -2px -2px 4px 0px #30ead9e5,
      2px -2px 4px 0px #14645d33, -2px 2px 4px 0px #14645d33,
      -1px -1px 2px 0px #14645d80 inset, 1px 1px 2px 0px #30ead94d inset;
  }

  &__add {
    border-radius: 15px;
    background: linear-gradient(180deg, #32c5b8 0%, #12897e 100%);
    box-shadow: 2px 2px 5px 0px #14645de5, -2px -2px 4px 0px #30ead9e5,
      2px -2px 4px 0px #14645d33, -2px 2px 4px 0px #14645d33,
      -1px -1px 2px 0px #14645d80 inset, 1px 1px 2px 0px #30ead94d inset;

    padding: 14px 40px;
    color: #f3f3f3;
  }
}
</style>
