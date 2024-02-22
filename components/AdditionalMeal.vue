<template>
  <div class="meal">
    <img
      src="/images/hek2.png"
      alt=""
      class="meal__img"
    />
    <div class="meal__info">
      <span class="meal__name">{{ $t('foods.hek') }}</span>
      <span class="meal__old-price">450 {{ $t('uah') }}</span>
      <span class="meal__new-price">350 {{ $t('uah') }}</span>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  .meal {
    display: flex;
    align-items: center;
    border-radius: 15px;
    padding-right: 6px;
    padding-block: 10px;
    margin-block: 10px;
    max-width: 165px;
    background: #e9e9e9;

    box-shadow:
      2px 2px 5px 0px #8c8c8ce5,
      -2px -2px 4px 0px #ffffffe5,
      2px -2px 4px 0px #8c8c8c33,
      -2px 2px 4px 0px #8c8c8c33,
      -1px -1px 2px 0px #8c8c8c80 inset,
      1px 1px 2px 0px #ffffff4d inset;

    &__img {
      max-height: 50px;
    }

    &__info {
      display: flex;
      flex-direction: column;
    }

    &__name {
      font-size: 12px;
      text-align: left;
      line-height: 13px;
    }

    &__old-price {
      font-size: 12px;
      text-decoration: line-through;
      text-align: left;
    }

    &__new-price {
      font-size: 15px;
      color: #1d9e92;
      font-weight: 800;
      text-align: left;
    }
  }
</style>
