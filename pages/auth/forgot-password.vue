<template>
  <div class="wrapper">
    <GoBackHeader message="auth.forgotPassword" />
    <div class="flex flex-col items-center h-[calc(100vh-40px)] pt-36 justify-between pb-6">
      <form action="" class="w-full px-4">
        <div class="flex justify-center mb-4">
          <img src="/images/logo-green.svg" class="w-56" />
        </div>
        <ui-base-input type="text" :placeholder="$t('auth.email')" class="mb-4" />
        <p class="text-lg">{{ $t('auth.forgotPasswordText') }}</p>
      </form>
      <div class="px-4 w-full">
        <ui-base-button :label="$t('auth.confirm')" is-green class="mb-4"
          @click="$router.push(localePath('/auth/login'))" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>

<style scoped></style>
