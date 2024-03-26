<template>
  <div class="wrapper">
    <GoBackHeader message="auth.privateCabinet" />
    <div
      class="flex flex-col items-center h-[calc(100vh-40px)] pt-[10%] justify-between pb-6"
    >
      <form
        action=""
        class="w-full px-4"
      >
        <Logo class="mb-12 mx-auto" />
        <ui-base-input
          v-model="email"
          type="text"
          :placeholder="$t('auth.email')"
          class="mb-4"
        />
        <ui-base-input
          v-model="password"
          type="password"
          :placeholder="$t('auth.password')"
          class="mb-4"
        />
        <div class="flex w-full justify-end">
          <nuxt-link
            :to="localePath('/auth/forgot-password')"
            class="text-primary text-lg font-semibold"
          >
            {{ $t('auth.forgotPassword') }}
          </nuxt-link>
        </div>
      </form>
      <div class="w-full sticky bottom-4 px-4">
        <ui-base-button
          :label="$t('auth.login')"
          is-green
          class="mb-4"
          @click="login(email, password)"
        />
        <ui-base-button
          :label="$t('auth.registration')"
          @click="$router.push(localePath('/auth/register'))"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const { login } = useAuthStore()
  const localePath = useLocalePath()

  const email = ref('')
  const password = ref('')
</script>

<style scoped></style>
