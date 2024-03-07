<template>
  <div class="wrapper">
    <GoBackHeader message="auth.privateCabinet" />
    <div
      class="flex flex-col items-center h-[calc(100vh-40px)] pt-36 justify-between pb-6"
    >
      <form
        action=""
        class="w-full px-4"
      >
        <MainIcon class="mb-12 mx-auto" />
        <ui-base-input
          type="text"
          :placeholder="$t('auth.email')"
          class="mb-4"
        />
        <ui-base-input
          type="password"
          :placeholder="$t('auth.password')"
          class="mb-4"
        />
        <ui-base-input
          type="password"
          :placeholder="$t('auth.confirmPassword')"
          class="mb-4"
        />
      </form>
      <div class="px-4 w-full">
        <ui-base-button
          :label="$t('auth.next')"
          is-green
          class="mb-4"
        />
        <ui-base-button
          :label="$t('auth.privateCabinet')"
          @click="$router.push(localePath('/auth/login'))"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const localePath = useLocalePath()
</script>

<style scoped></style>
