<template>
  <div ref="el" class="order z-50">
    <div class="order__wrapper">
      <button :class="['order__btn', { dark: isDark }, { opened: isOrderOpened }]"
        @click="isOrderOpened = !isOrderOpened">
        {{ $t('order', { number: 1, price: orderCost }) }}
      </button>
      <div class="order__list transition-height" :class="isOrderOpened ? 'max-h-full' : 'max-h-0 !p-0'">
        <div v-show="order.length" class="order__boxes h-fit max-h-[320px] overflow-auto p-1">
          <OrderItem v-for="dish in unique" :key="dish.productId" :id="dish.productId" :image="dish.image"
            :title="dish.name" :price="dish.price.prices[1]" :dish="dish" />
        </div>
        <div class="order__all mb-5 p-1">
          <OrderCheckbox />
          <span>{{ $t('orderAll') }}</span>
        </div>
        <div class="order__cost cost">
          <div class="cost__total flex justify-between text-[15px]">
            <span>{{ $t('orderTotal') }}:</span>
            <span>{{ `${orderCost} ${$t('uah')}` }}</span>
          </div>
          <div class="cost__total flex justify-between text-[15px]">
            <span>{{ $t('orderTax') }} (20%):</span>
            <span> {{ orderTax + ' ' + $t('uah') }}</span>
          </div>
          <div class="cost__total flex justify-between text-[15px]">
            <span>{{ $t('orderService') }} (10%):</span>
            <span> {{ orderServiceCost + ' ' + $t('uah') }}</span>
          </div>
          <div class="cost__total flex justify-between text-[25px] mb-[15px]">
            <span>{{ $t('orderTotalPay') }}</span>
            <span class="font-extrabold">{{ orderTotalCost + ' ' + $t('uah') }}</span>
          </div>
          <div class="flex justify-center">
            <button class="order__pay" @click="$router.push('/tips')">
              {{ $t('orderPay') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useElementSize, onClickOutside } from '@vueuse/core'
const { isDark, isOrderOpened } = storeToRefs(useGlobalStore())
const { order, orderCost, orderTax, orderServiceCost, orderTotalCost } = storeToRefs(useOrderStore())
const { sendOrder } = useOrderStore()

const unique = [...new Set(order.value)]

const el = ref<HTMLElement | null>(null)
onClickOutside(el, () => {
  isOrderOpened.value = false
})

</script>

<style scoped lang="scss">
.order {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  max-width: 960px;
  color: #060f0acc;
  font-size: 25px;
  font-weight: 600;
  line-height: 27.1px;
  border-radius: 15px 15px 0 0;
  transition: 0.3s transform ease-in-out;

  &.opened {
    transform: translateY(0);
  }

  &__btn {
    padding-block: 10px;
    width: 100%;
    border-radius: 15px 15px 0 0;
    transition: 0.3s;
    background: linear-gradient(135deg, #f6f6f6 0%, #dddddd 100%);
    border: 2px solid #299d92;

    &.opened {
      background: linear-gradient(180deg, #31cbbd 0%, #169185 100%);
      box-shadow:
        2px 2px 5px 0px #14645de5 inset,
        -2px -2px 4px 0px #30ead9e5 inset,
        2px -2px 4px 0px #14645d33 inset,
        -2px 2px 4px 0px #14645d33 inset,
        -1px -1px 2px 0px #14645d80,
        1px 1px 2px 0px #30ead94d;
    }
  }

  &__all {
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 18px;
    color: #060f0acc;
  }

  &__list {
    padding: 15px;
    background: linear-gradient(135deg, #f6f6f6 0%, #dddddd 100%);
  }

  &__boxes {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__pay {
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

.order__btn.dark {
  background: linear-gradient(135deg, #2c2d31 0%, #44464d 100%);
  color: #f1f2f6cc;

  box-shadow:
    20px -5px 67.30000305175781px 0px #ed536047,
    -2px 5px 20.399999618530273px 0px #ed536008,
    2px -2px 4px 0px #ed536033,
    -2px 2px 4px 0px #ed536033;
}
</style>
