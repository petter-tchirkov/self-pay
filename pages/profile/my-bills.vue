<template>
  <div class="wrapper">
    <GoBackHeader
      message="cabinet.myBills"
      class="mb-5"
    >
      <div class="filter-icon">
        <icons-filter-icon />
      </div>
    </GoBackHeader>
    <div class="flex flex-col gap-4 px-4">
      <ui-base-button
        v-for="bill in bills" :key="bill"
        :label="`${$t('cabinet.bill')} ${useDateFormat(bill, 'DD.MM.YYYY').value}`"
        @click="$router.push(localePath(`/profile/order-${bill}`))"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const bills = ref([new Date(),new Date(),new Date(),new Date()])
</script>

<style scoped>

</style>
