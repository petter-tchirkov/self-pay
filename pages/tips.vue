<template>
  <div class="wrapper">
    <section class="tips">
      <header class="tips__header">
        <button @click="$router.back">
          <img src="/images/icons/arrow-black.svg" alt="" />
        </button>
        <h2 class="tips__title">{{ $t('leaveTips') }}?</h2>
      </header>
      <img class="tips__ad" src="/images/ad.png" alt="" />
      <div class="tips__carousel">
        <carousel :items-to-show="1" :items-to-scroll="1">
          <slide v-for="slide in 10" :key="slide">
            <div class="flex gap-3 px-1">
              <AdditionalMeal />
              <AdditionalMeal />
            </div>
          </slide>
          <template #addons>
            <pagination />
          </template>
        </carousel>
      </div>

      <div class="radio-group">
        <label class="radio" @click="tip = calculateTip(5)">
          <input v-model="picked" type="radio" value="25" name="tip" />
          <span>
            {{ calculateTip(5) }} $ <br />
            <pre>5%</pre>
          </span>
        </label>
        <label class="radio" @click="tip = calculateTip(10)">
          <input v-model="picked" type="radio" value="50" name="tip" />
          <span>
            {{ calculateTip(10) }} $<br />
            <pre>10%</pre>
          </span>
        </label>
        <label class="radio" @click="tip = calculateTip(15)">
          <input v-model="picked" type="radio" value="75" name="tip" />
          <span>
            {{ calculateTip(15) }} $<br />
            <pre>15%</pre>
          </span>
        </label>
        <label class="radio" @click="tip = calculateTip(20)">
          <input v-model="picked" type="radio" value="100" name="tip" />
          <span>
            {{ calculateTip(20) }} $<br />
            <pre>20%</pre>
          </span>
        </label>
      </div>
      <div class="radio-group long">
        <label class="radio long" @click="tip = 0">
          <input v-model="picked" type="radio" value="0" name="tip" />
          <span>{{ $t('noTips') }}</span>
        </label>
        <label class="radio long">
          <input v-model="picked" type="radio" value="noTip" name="tip" />
          <span>{{ $t('otherSum') }}</span>
        </label>
      </div>
      <div class="tips__pay h-[55px]">
        <ui-base-button :label="$t('pay') + ': ' + (orderTotalCost + tip) + ' ' + $t('uah')" is-green
          @click="$router.push('/payment')" />
      </div>
      <div v-if="picked === 'noTip'" class="flex gap-3 items-center">
        <ui-base-input v-model="tip" type="number" class="input-shadow placeholder:text-center"
          :placeholder="$t('tipSize')" :use-grouping="false" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import AdditionalMeal from '~/components/AdditionalMeal.vue';

const { calculateTip } = useOrderStore()
const { tip, orderTotalCost } = storeToRefs(useOrderStore())
const picked = ref()
</script>

<style lang="scss">
.radio-group {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin-block: 20px;

  &.long {
    grid-template-columns: 1fr 1fr;
    align-content: space-between;
  }
}

.radio {
  input {
    display: none;
    transition: all 0.3s;
  }

  &.long {
    span {
      padding-inline: 26px;
      padding-block: 7px;
      text-align: center;
      border-radius: 15px;
      line-height: 19px;
      font-size: 12px;
    }
  }

  input[type='radio']:checked~span {
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
    padding-block: 17px;
    padding-inline: 8px;
    background: linear-gradient(180deg, #dfdfdf 0%, #eeeeee 100%);
    border-radius: 10px;
    transition: all 0.3s;
    display: inline-block;
    font-size: 12px;
    font-weight: 600;
    width: 100%;
    text-align: center;

    pre {
      color: #060f0acc;
      line-height: 16px;
      font-size: 14px;
      text-align: center;
    }
  }
}

.tips {
  padding-inline: 16px;
  padding-top: 10px;

  &__header {
    display: flex;
    gap: 15px;
  }

  &__title {
    font-size: 25px;
    color: #060f0acc;
    font-weight: 600;
  }

  &__ad {
    margin-top: 8px;
    width: 100%;
    border-radius: 16px;
    box-shadow:
      2px 2px 5px 0px #8c8c8ce5,
      -2px -2px 4px 0px #ffffffe5,
      2px -2px 4px 0px #8c8c8c33,
      -2px 2px 4px 0px #8c8c8c33,
      -1px -1px 2px 0px #8c8c8c80 inset,
      1px 1px 2px 0px #ffffff4d inset;
  }

  &__carousel {
    margin-bottom: 80px;
  }

  &__pay {
    padding-inline: 16px;
    width: 100%;
    position: fixed;
    bottom: 15px;
    left: 0;
    right: 0;

    &-btn {
      border-radius: 15px;
      background: linear-gradient(180deg, #32c5b8 0%, #12897e 100%);
      padding: 14px 44px;
      color: #f3f3f3;
      font-size: 18px;
      line-height: 20px;
      width: 100%;
    }
  }
}

.carousel {
  &__pagination {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    &-item {
      width: 5px;
      height: 5px;
      border-radius: 50%;

      button {
        width: 5px;
        height: 5px;
        border-radius: 50%;

        &::after {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #c2c2c2;
        }
      }

      button.carousel__pagination-button--active:after {
        background: #858585;
      }
    }
  }
}
</style>
