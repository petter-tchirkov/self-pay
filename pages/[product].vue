<template>
  {{ $route.params.product }}
</template>

<script setup lang="ts">
const foodStore = useFoodStore();
</script>
