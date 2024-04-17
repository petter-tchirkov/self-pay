<template>
  <div class="search pt-l flex">
    <button class="search__filter w-12 flex justify-center items-center">
      <img src="/images/icons/user.svg" alt="" @click="$router.push(localePath('/auth/login'))" />
    </button>
    <div class="search__box grow">
      <InputText v-model="search" :placeholder="$t('search')" class="search__input" />
      <img src="/images/icons/search.svg" alt="" />
    </div>
    <!-- <button class="search__filter">
      <img src="/images/icons/filter.svg" alt="" />
    </button> -->
  </div>
</template>

<script setup lang="ts">
const search = ref('')
const localePath = useLocalePath()
</script>

<style scoped lang="scss">
  .search {
    display: flex;
    gap: 15px;
    padding-inline: 16px;
    width: 100%;

    &__box {
      position: relative;

      img {
        position: absolute;
        top: 45%;
        left: 15px;
        transform: translateY(-50%);
      }
    }

    &__input {
      border-radius: 15px;
      height: 40px;
      padding-left: 38px;
      flex: 1;
      width: 100%;
      box-shadow: 0px 2px 6px 0px #90909040;

      &::placeholder {
        color: #666666;
      }
    }

    &__filter {
      background: #fff;
      padding-inline: 15px;
      padding-block: 12px;
      border-radius: 15px;
    }
  }
</style>
