<template>
  <img
    :src="`/images/lang/${lang}.svg`"
    alt=""
  />
</template>

<script setup lang="ts">
  const { lang } = defineProps<{ lang: string }>()
</script>

<style scoped></style>
