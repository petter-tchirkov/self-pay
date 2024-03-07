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
    box-shadow: 2px 2px 5px rgba(146, 146, 146, 0.9),
      -2px -2px 4px rgba(255, 255, 255, 0.9),
      2px -2px 4px rgba(146, 146, 146, 0.2),
      -2px 2px 4px rgba(146, 146, 146, 0.2),
      inset -1px -1px 2px rgba(146, 146, 146, 0.5),
      inset 1px 1px 2px rgba(255, 255, 255, 0.3);
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
