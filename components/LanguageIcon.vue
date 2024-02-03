<template>
  <img :src="`/images/lang/${lang}.svg`" alt="" />
</template>

<script setup lang="ts">
const { lang } = defineProps<{ lang: string }>();

const getImgUrl = () => {
  return require(`~/assets/images/lang/${lang}.svg`);
};
</script>

<style scoped></style>
