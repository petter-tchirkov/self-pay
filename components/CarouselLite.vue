<template>
  <Carousel
    :value="carouselImages"
    :num-visible="2"
  >
    <template #item="{ data }">
      <img
        :src="data.src"
        alt=""
      />
    </template>
  </Carousel>
</template>

<script setup lang="ts">
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
  .p-carousel {
    &-content {
      display: flex;
    }
  }
</style>
