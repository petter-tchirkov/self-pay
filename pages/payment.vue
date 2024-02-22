<template>
  <div class="wrapper">
    <section class="payment">
      <header class="payment__header">
        <button @click="$router.back">
          <img
            src="/images/icons/arrow-black.svg"
            alt=""
          />
        </button>
        <h2 class="payment__title">{{ $t('payForOrder') }}?</h2>
      </header>
      <h2 class="payment__method">{{ $t('paymentMethod') }}</h2>
      <div class="payment__options">
        <label class="payment__option">
          <input
            type="radio"
            value="25"
            name="tip"
          />
          <img
            src="/images/icons/payMethods/mc.png"
            alt=""
          />
        </label>
        <label class="payment__option">
          <input
            type="radio"
            value="50"
            name="tip"
          />
          <img
            src="/images/icons/payMethods/visa.png"
            alt=""
          />
        </label>
        <label class="payment__option">
          <input
            type="radio"
            value="25"
            name="tip"
          />
          <span>
            {{ $t('cash') }}
          </span>
        </label>
        <label class="payment__option">
          <input
            type="radio"
            value="50"
            name="tip"
          />
          <img
            src="/images/icons/payMethods/ap.png"
            alt=""
          />
        </label>
        <label class="payment__option">
          <input
            type="radio"
            value="50"
            name="tip"
          />
          <img
            src="/images/icons/payMethods/gp.png"
            alt=""
          />
        </label>
        <label class="payment__option">
          <input
            type="radio"
            value="50"
            name="tip"
          />
          <img
            src="/images/icons/payMethods/pp.png"
            alt=""
          />
        </label>
      </div>
      <div class="payment__card">
        <h3 class="payment__part">{{ $t('cardNumber') }}</h3>
        <InputMask
          class="input-shadow"
          mask="9999 9999 9999 9999"
          placeholder="XXXX XXXX XXXX XXXX"
        />
      </div>
      <div class="flex justify-between gap-6">
        <div class="payment__card">
          <h3 class="payment__part">{{ $t('expirationDate') }}</h3>
          <InputMask
            class="input-shadow"
            mask="99/99"
            placeholder="ММ/РР"
            slotChar="ММ/РР"
          />
        </div>
        <div class="payment__card">
          <h3 class="payment__part">{{ $t('cvv') }}</h3>
          <input
            type="password"
            maxlength="3"
            class="input-shadow placeholder:text-[#060F0A] placeholder:text-3xl placeholder:tracking-widest"
            mask="999"
            placeholder="&middot;&middot;&middot;"
            slotChar="&middot;&middot;&middot;"
          />
        </div>
      </div>
      <div class="payment__card">
        <h3 class="payment__part">{{ $t('cardHolderName') }}</h3>
        <InputText class="input-shadow" />
      </div>

      <div class="payment__cost cost">
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
        <div class="flex justify-center">
          <button
            class="payment__pay"
            @click="$router.push('/tips')"
          >
            {{ $t('orderPay') }}
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  .payment__options {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 12px;
    row-gap: 8px;
    margin-bottom: 15px;
  }

  .payment__option {
    width: 95px;
    height: 40px;
    background: #adadad;
    box-shadow:
      2px 2px 5px 0px #686868e5,
      -2px -2px 4px 0px #f2f2f2e5,
      2px -2px 4px 0px #68686833,
      -2px 2px 4px 0px #68686833,
      -1px -1px 2px 0px #68686880 inset,
      1px 1px 2px 0px #f2f2f24d inset;
    padding-block: 8px;
    padding-inline: 14px;
    background: linear-gradient(180deg, #dfdfdf 0%, #eeeeee 100%);
    border-radius: 10px;
    transition: all 0.3s;
    display: inline-block;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    border-radius: 15px;
    color: #060f0acc;
    line-height: 16px;
    font-size: 14px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    &:has(input[type='radio']:checked) {
      box-shadow:
        2px 2px 5px 0px #686868e5 inset,
        -2px -2px 4px 0px #f2f2f2e5 inset,
        2px -2px 4px 0px #68686833 inset,
        -2px 2px 4px 0px #68686833 inset,
        -1px -1px 2px 0px #68686880,
        1px 1px 2px 0px #f2f2f24d;
      background: linear-gradient(180deg, #c8c8c8 0%, #919191 100%);
    }

    input {
      display: none;
      transition: all 0.3s;
    }
  }

  .payment {
    padding-inline: 16px;
    padding-top: 10px;

    &__header {
      display: flex;
      gap: 15px;
      margin-bottom: 15px;
    }

    &__title {
      font-size: 25px;
      color: #060f0acc;
      font-weight: 600;
    }

    &__method {
      color: #060f0acc;
      font-size: 25px;
      line-height: 27px;
      font-weight: 600;
      margin-bottom: 10px;
    }

    &__card {
      margin-bottom: 20px;
    }

    &__part {
      color: #060f0a;
      font-weight: 600;
      font-size: 22px;
      line-height: 24px;
      margin-bottom: 8px;
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
</style>
