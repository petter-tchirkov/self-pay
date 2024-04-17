<script setup lang="ts">
const order = useOrderStore()
const success = () => {
  useRouter().push('/')
  setTimeout(() => {
    order.clearOrder()
  }, 500)
}
</script>

<template>
  <section class="flex flex-col px-10 justify-center min-h-screen">
    <img src="/images/icons/check-green.svg" class="w-36 h-36 mx-auto" alt="">
    <h1 class="text-lg font-semibold text-center my-5">Successful Payment</h1>
    <p class="text-xl text-center mb-5">{{ order.orderTotalCost + order.tip }} UAH</p>
    <ui-base-button class="w-full" @click="success" label="Back to App" is-green />
  </section>
</template>


<style scoped lang="scss">
.btn {
  font-size: 18px;
  font-weight: 600;
  border-radius: 15px;
  background: linear-gradient(180deg, #32c5b8 0%, #12897e 100%);
  padding: 14px 58px;
  color: #f3f3f3;
  text-align: center;

}
</style>
```
