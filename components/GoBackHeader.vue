<template>
  <header
    class="w-full flex items-center justify-between font-semibold text-2xl px-4 pt-2"
  >
    <div class="flex items-center gap-4">
      <button @click="$router.back">
        <img
          src="/images/icons/arrow-black.svg"
          alt=""
        />
      </button>
      <h2>{{ $t(`${message}`) }}</h2>
    </div>
      <slot></slot>
  </header>
</template>

<script setup lang="ts">
  const { message } = defineProps<{
    message: string
  }>()
</script>

<style scoped></style>
