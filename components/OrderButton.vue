<template>
  <div
    class="order"
    ref="el"
    :style="[
      isOrderOpened
        ? 'transform:translateY(0)'
        : `transform:translateY(${height - 70}px)`,
    ]"
  >
    <button
      @click="isOrderOpened = !isOrderOpened"
      :class="['order__btn', { dark: isDark }, { opened: isOrderOpened }]"
    >
      {{ $t("order", { number: 1, price: 250 }) }}
    </button>
    <div class="order__list">
      <OrderItem id="hek" image="/images/hek.png" title="hek" :price="250" />
      <OrderItem
        id="salad"
        image="/images/salad.png"
        title="salad"
        :price="250"
      />
      <OrderItem
        id="salmon"
        image="/images/salmon.png"
        title="salmon"
        :price="250"
      />
      <div class="order__all">
        <OrderCheckbox />
        <span>{{ $t("orderAll") }}</span>
      </div>
      <div class="order__cost cost">
        <div class="cost__total flex justify-between text-[15px]">
          <span>{{ $t("orderTotal") }}</span>
          <span>750 {{ $t("uah") }}</span>
        </div>
        <div class="cost__total flex justify-between text-[15px]">
          <span>{{ $t("orderTax") }} (20%)</span>
          <span>150 {{ $t("uah") }}</span>
        </div>
        <div class="cost__total flex justify-between text-[15px]">
          <span>{{ $t("orderService") }} (10%)</span>
          <span>75 {{ $t("uah") }}</span>
        </div>
        <div class="cost__total flex justify-between text-[25px] mb-[25px]">
          <span>{{ $t("orderTotalPay") }}</span>
          <span>975 {{ $t("uah") }}</span>
        </div>
        <div class="flex justify-center">
          <button class="order__pay">{{ $t("orderPay") }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useElementSize, onClickOutside } from "@vueuse/core";
const { isDark } = storeToRefs(useGlobalStore());

const el = ref<HTMLElement | null>(null);
const { height } = useElementSize(el);
onClickOutside(el, () => {
  isOrderOpened.value = false;
});

const isOrderOpened = ref(false);
</script>

<style scoped lang="scss">
.order {
  width: 100%;
  position: fixed;
  bottom: 0;
  height: min-content;
  max-width: 960px;
  color: #060f0acc;
  background: linear-gradient(135deg, #f6f6f6 0%, #dddddd 100%);
  font-size: 25px;
  font-weight: 600;
  line-height: 27.1px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  transition: 0.3s transform ease-in-out;

  &.opened {
    transform: translateY(0);
  }

  box-shadow: 20px -5px 67.30000305175781px 0px #299d9247,
    -2px 5px 20.399999618530273px 0px #299d9208, 2px -2px 4px 0px #299d9233,
    -2px 2px 4px 0px #299d9233;

  &__btn {
    padding-top: 20px;
    padding-bottom: 24px;
    width: 100%;
    border-radius: 15px 15px 0 0;
    transition: 0.3s;

    &.opened {
      background: linear-gradient(180deg, #31cbbd 0%, #169185 100%);
      box-shadow: 2px 2px 5px 0px #14645de5 inset,
        -2px -2px 4px 0px #30ead9e5 inset, 2px -2px 4px 0px #14645d33 inset,
        -2px 2px 4px 0px #14645d33 inset, -1px -1px 2px 0px #14645d80,
        1px 1px 2px 0px #30ead94d;
    }
  }

  &__all {
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 18px;
    color: #060f0acc;
    margin-bottom: 28px;
  }

  &__list {
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  &__pay {
    font-size: 18px;
    font-weight: 600;
    border-radius: 15px;
    background: linear-gradient(180deg, #32c5b8 0%, #12897e 100%);
    padding: 14px 58px;
    color: #f3f3f3;

    box-shadow: 2px 2px 5px 0px #14645de5, -2px -2px 4px 0px #30ead9e5,
      2px -2px 4px 0px #14645d33, -2px 2px 4px 0px #14645d33,
      -1px -1px 2px 0px #14645d80 inset, 1px 1px 2px 0px #30ead94d ins;
  }
}

.order__btn.dark {
  background: linear-gradient(135deg, #2c2d31 0%, #44464d 100%);
  color: #f1f2f6cc;

  box-shadow: 20px -5px 67.30000305175781px 0px #ed536047,
    -2px 5px 20.399999618530273px 0px #ed536008, 2px -2px 4px 0px #ed536033,
    -2px 2px 4px 0px #ed536033;
}
</style>
