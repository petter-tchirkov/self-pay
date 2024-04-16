<template>
  <div class="wrapper" :class="{ dark: global.isDark }">
    <TopBar />
    <div class="h-full overflow-auto pb-40">
      <div class="container">
        <div class="place">
          <img class="place__logo" src="/images/mos.png" alt="" />
          <div class="place__info">
            <h2 class="place__title">Moscafé</h2>
            <p class="place__address">Pferdemarkt 6, Hameln</p>
          </div>
        </div>
      </div>
      <!-- <CarouselLite class="mb-7" /> -->
      <div class="container">
        <div class="info">
          <p class="info__table">{{ $t('table') }}: 9</p>
          <LanguageSwitcher />
        </div>
        <div class="actions">
          <div class="actions__btn" @click="[isNoOrderDialogShown = true, isFullOrder = false]">
            <img src="/images/pay.svg" alt="" />
            <span>{{ $t('pay') }}</span>
          </div>
          <div class="actions__btn" @click="[isNoOrderDialogShown = true, isFullOrder = true]">
            <img src="/images/payInPart.svg" alt="" />
            <span>{{ $t('payInPart') }}</span>
          </div>
          <NuxtLink to="/menu" class="actions__btn">
            <img src="/images/restMenu.svg" alt="" />
            <span>{{ $t('restMenu') }}</span>
          </NuxtLink>
        </div>
      </div>
    </div>
    <Dialog v-model:visible="isNoOrderDialogShown" header="Error" modal :pt="{
  root: () => ({
    class: ['bg-white w-full rounded-[15px] p-4 '],
  }),
  header: () => ({
    class: ['text-center text-xl flex justify-between italic'],
  }),
  closeButtonIcon: () => ({
    class: ['text-[#060f0a]'],
  }),
  mask: () => ({
    class: ['bg-black bg-opacity-40 px-8'],
  }),
}">
      <p class="my-4">Please make an order before paying</p>
      <ui-base-button @click="$router.push('/menu')" label="Procceed to menu" is-green class="mt-4" type="primary" />
    </Dialog>
  </div>
</template>
<script setup lang="ts">
import { useWindowSize } from '#imports'
const localePath = useLocalePath()
const { order } = storeToRefs(useOrderStore())

const global = useGlobalStore()
const { isOrderOpened, isFullOrder } = storeToRefs(useGlobalStore())

const isNoOrderDialogShown = ref(false)

const navigationItems = ref([
  { btn: 'pay', to: 'tips' },
  { btn: 'payInPart', to: 'tips' },
])

const orderButton = ref()
const { isSwiping, direction } = useSwipe(orderButton, {
  onSwipe(e: TouchEvent) {
    if (direction.value === 'down') {
      isOrderOpened.value = false
    }
  }
})
</script>

<style scoped lang="scss">
.wrapper {

  .place {
    display: flex;
    align-items: center;
    gap: 2px;
    margin-bottom: 28px;
    padding-top: 20px;
    // box-shadow: 2px 2px 5px 0px #16655EE5 inset, -2px -2px 4px 0px #32EBDAE5 inset, 2px -2px 4px 0px #16655E33 inset, -2px 2px 4px 0px #16655E33 inset, -1px -1px 2px 0px #16655E80, 1px 1px 2px 0px #32EBDA4D;

    &__logo {
      margin-left: -8px;
    }

    &__info {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    &__title {
      font-size: 25px;
      font-weight: 600;
      line-height: 27px;

      color: #060f0acc;
    }

    &__address {
      font-size: 18px;
      line-height: 17.34px;

      color: #060f0acc;
    }
  }

  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;

    &__table {
      font-weight: 600;
      font-size: 20px;
      line-height: 21.68px;

      color: #060f0acc;
    }
  }

  .actions {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;

    &__btn {
      background: linear-gradient(180deg,
          #f4f4f4 0%,
          #f6f6f6 0.01%,
          #dddddd 100%);
      padding: 16px 40px;
      border-radius: 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-shadow: 2px 2px 5px 0px #929292e5, -2px -2px 4px 0px #ffffffe5,
        2px -2px 4px 0px #92929233, -2px 2px 4px 0px #92929233,
        -1px -1px 2px 0px #92929280 inset, 1px 1px 2px 0px #ffffff4d inset;

      img {
        width: 20px;
        height: 20px;
      }

      &:active {
        background: linear-gradient(180deg, #c8c8c8 0%, #919191 100%);
      }
    }
  }
}

.wrapper.dark {
  .logo {
    &__text {
      color: #f25e6a;
    }
  }

  .info {
    &__table {
      color: #f1f2f6cc;
    }
  }

  .actions {
    &__btn {
      background: linear-gradient(161.21deg, #242529 0%, #4f5157 100%);
      color: #f1f2f6cc;

      box-shadow: 2px 2px 5px 0px #232326e5, -2px -2px 4px 0px #51535ae5,
        2px -2px 4px 0px #23232633, -2px 2px 4px 0px #23232633,
        -1px -1px 2px 0px #23232680 inset, 1px 1px 2px 0px #51535a4d inset;

      &:active {
        background: linear-gradient(161.21deg, #ed6672 0%, #ec2132 100%);
      }
    }
  }
}
</style>
