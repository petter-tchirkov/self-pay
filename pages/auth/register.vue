<script setup lang="ts">
const localePath = useLocalePath()
const { register } = useAuthStore()

const email = ref('')
const password = ref('')
</script>

<template>
  <div class="wrapper">
    <GoBackHeader message="auth.privateCabinet" />
    <div class="flex flex-col items-center h-[calc(100vh-40px)] pt-36 justify-between pb-6">
      <form action="" class="w-full px-4">
        <div class="flex justify-center mb-4">
          <img src="/images/logo-green.svg" class="w-56" />
        </div>
        <ui-base-input v-model="email" type="text" :placeholder="$t('auth.email')" class="mb-4" />
        <ui-base-input v-model="password" type="password" :placeholder="$t('auth.password')" class="mb-4" />
        <ui-base-input type="password" :placeholder="$t('auth.confirmPassword')" class="mb-4" />
      </form>
      <div class="px-4 w-full">
        <ui-base-button :label="$t('auth.next')" is-green class="mb-4" @click="register(email, password)" />
        <ui-base-button :label="$t('auth.privateCabinet')" @click="$router.push(localePath('/auth/login'))" />
      </div>
    </div>
  </div>
</template>


<style scoped></style>
