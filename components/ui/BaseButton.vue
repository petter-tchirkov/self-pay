<template>
  <button :class="isGreen ? 'bg-green' : 'bg-white'">{{ label }}</button>
</template>

<script setup lang="ts">
  const { label = 'label', isGreen = false } = defineProps<{
    label: string
    isGreen?: boolean
  }>()
</script>

<style scoped lang="scss">
  button {
    height: 48px;
    width: 100%;
    border-radius: 15px;
    font-size: 20px;
    font-weight: 500;
  }

  .bg-green {
    background: linear-gradient(180deg, #32c5b8 0%, #12897e 100%);
    color: #f3f3f3;
  }
  .bg-white {
    background: linear-gradient(180deg, #f6f6f6 0%, #dddddd 100%);
    color: #060f0a;
  }
</style>
