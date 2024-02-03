<template>
  <div
    class="switch-theme absolute top-0 flex items-center gap-2 p-2 text-white rounded-br-xl"
    :class="isDark ? 'bg-[#F25E6A]' : 'bg-[#299D92]'"
  >
    <span>Dark</span>
    <input type="checkbox" v-model="isDark" />
  </div>
</template>

<script setup lang="ts">
const { isDark } = storeToRefs(useGlobalStore());
</script>

<style scoped></style>
