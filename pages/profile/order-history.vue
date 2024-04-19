<template>
  <div class="wrapper">
    <GoBackHeader message="cabinet.orderHistory" class="mb-5">
      <div class="filter-icon">
        <icons-filter-icon />
      </div>
    </GoBackHeader>
    <div class="flex flex-col gap-4 px-4">
      <ui-base-button v-for="order in orders" :key="order" :label="`${$t('cabinet.order')} ${order}`"
        @click="$router.push(localePath(`/profile/order-${order}`))" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'

const localePath = useLocalePath()
const orders = ref([123, 124, 125, 126])
const { y } = useWindowScroll()

onMounted(() => {
  console.log('at top')
  y.value = 0
})
</script>

<style scoped>
.filter-icon {
  background: linear-gradient(180deg, #f4f4f4 0%, #dddddd 100%);
  border-radius: 15px;
  box-shadow: 0px 2px 6px rgba(144, 144, 144, 0.25);
  padding: 16px;
}
</style>
