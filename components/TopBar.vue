<template>
  <NuxtLink :to="localePath('/auth/login')" class="logo px-4">
    <Logo class="logo__image w-3/5" variant="white" />
  </NuxtLink>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>

<style scoped lang="scss">
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding-block: 18px;
  background: linear-gradient(180deg, #32c5b8 0%, #12897e 100%);
  box-shadow:
    inset 2px 2px 5px rgba(22, 101, 94, 0.9),
    inset -2px -2px 4px rgba(50, 235, 218, 0.9),
    inset 2px -2px 4px rgba(22, 101, 94, 0.2),
    inset -2px 2px 4px rgba(22, 101, 94, 0.2),
    -1px -1px 2px rgba(22, 101, 94, 0.5),
    1px 1px 2px rgba(50, 235, 218, 0.3);

  &__text {
    font-size: 28px;
    font-weight: 600;
    max-width: 75px;
    line-height: 0.9;
    margin-top: 4px;

    color: #f3f3f3;
  }
}
</style>
