<template>
  <carousel
    :items-to-show="2"
    :items-to-scroll="2"
    snap-align="start"
  >
    <slide
      v-for="slide in carouselImages"
      :key="slide.src"
    >
      <img
        :src="slide.src"
        alt=""
      />
    </slide>

    <template #addons>
      <pagination />
    </template>
  </carousel>
</template>

<script setup lang="ts">
  import 'vue3-carousel/dist/carousel.css'
  import { Carousel, Slide, Pagination } from 'vue3-carousel'

  const carouselImages = [
    {
      src: '/images/carousel/1.png'
    },
    {
      src: '/images/carousel/2.png'
    },
    {
      src: '/images/carousel/3.png'
    },
    {
      src: '/images/carousel/4.png'
    },
    {
      src: '/images/carousel/5.png'
    }
  ]
</script>

<style lang="scss">
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
