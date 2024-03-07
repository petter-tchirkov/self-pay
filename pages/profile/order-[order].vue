<template>
  <div class="wrapper">
    <go-back-header
      :message="`${$t('cabinet.order')} ${$route.params.order}`"
      class="mb-5"
    />
    <div class="flex flex-col gap-4 px-4">
      <DishCard
        id="hek"
        image="/images/hek.png"
        title="hek"
        :price="250"
      />
      <DishCard
        id="salad"
        image="/images/salad.png"
        title="salad"
        :price="250"
      />
      <DishCard
        id="salmon"
        image="/images/salmon.png"
        title="salmon"
        :price="250"
      />

      <div class="order__cost cost">
        <div class="cost__total flex justify-between text-[15px]">
          <span>{{ $t('orderTotal') }}:</span>
          <span>750 {{ $t('uah') }}</span>
        </div>
        <div class="cost__total flex justify-between text-[15px]">
          <span>{{ $t('orderTax') }} (20%):</span>
          <span>150 {{ $t('uah') }}</span>
        </div>
        <div class="cost__total flex justify-between text-[15px]">
          <span>{{ $t('orderService') }} (10%):</span>
          <span>75 {{ $t('uah') }}</span>
        </div>
        <div class="cost__total flex justify-between text-[25px] mb-[15px]">
          <span>{{ $t('orderTotalPay') }}</span>
          <span class="font-extrabold">975 {{ $t('uah') }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
