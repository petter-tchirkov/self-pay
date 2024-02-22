<template>
  <section class="product">
    <button
      class="product__back"
      @click="$router.back"
    >
      <img
        src="/images/icons/arrow.svg"
        alt=""
      />
    </button>
    <div class="product__picture">
      <img
        class="product__image"
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
        <span class="product__price">150 {{ $t('uah') }}</span>
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
        <p>{{ $t('hekDesc') }}</p>
      </div>
      <div class="product__actions">
        <button class="product__favourite">
          <img
            src="/images/icons/heart.svg"
            alt=""
          />
        </button>
        <button class="product__add">{{ $t('addToOrder') }}</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

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
      height: 50%;
      height: 403px;
      overflow-y: scroll;
    }

    &__back {
      position: absolute;
      top: 30px;
      left: 20px;
    }

    &__picture {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
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
        1px 1px 2px 0px #30ead94d inset;
    }

    &__add {
      border-radius: 15px;
      background: linear-gradient(180deg, #32c5b8 0%, #12897e 100%);
      box-shadow:
        2px 2px 5px 0px #14645de5,
        -2px -2px 4px 0px #30ead9e5,
        2px -2px 4px 0px #14645d33,
        -2px 2px 4px 0px #14645d33,
        -1px -1px 2px 0px #14645d80 inset,
        1px 1px 2px 0px #30ead94d inset;

      padding: 14px 44px;
      color: #f3f3f3;
      font-size: 18px;
      line-height: 20px;
    }
  }
</style>
