<template>
  <div class="wrapper">
    <GoBackHeader
      message="auth.privateCabinet"
      class="mb-4"
    />
    <div class="flex flex-col justify-between h-[calc(100vh-64px)]">
      <div class="user w-full flex flex-col items-center">
        <TopBar class="w-full mb-6" />
        <div class="user__avatar mb-4">
          <img
            src="/images/user.jpg"
            alt=""
          />
        </div>
        <p class="user__name font-semibold text-2xl mb-1 text-black">
          Тест Тестович
        </p>
        <span class="text-black text-lg mb-20 opacity-60"
          >test@testovich.com</span
        >
        <div class="px-4 w-full">
          <ui-base-button
            :label="$t('cabinet.myBills')"
            class="mb-4"
            @click="$router.push(localePath('/profile/my-bills'))"
          />
          <ui-base-button
            :label="$t('cabinet.orderHistory')"
            class="mb-4"
            @click="$router.push(localePath('/profile/order-history'))"
          />
        </div>
      </div>
      <div class="px-4 pb-4">
        <ui-base-button
          :label="$t('auth.logout')"
          @click="$router.push(localePath('/auth/login'))"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  .user {
    &__avatar {
      border-radius: 15px;
      width: 100px;
      height: 100px;
      box-shadow:
        2px 2px 5px rgba(146, 146, 146, 0.9),
        -2px -2px 4px rgba(255, 255, 255, 0.9),
        2px -2px 4px rgba(146, 146, 146, 0.2),
        -2px 2px 4px rgba(146, 146, 146, 0.2),
        inset -1px -1px 2px rgba(146, 146, 146, 0.5),
        inset 1px 1px 2px rgba(255, 255, 255, 0.3);

      img {
        border-radius: 15px;
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
