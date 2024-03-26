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
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke="#1d9e92" stroke-width="1.5" stroke-linecap="round"
          stroke-linejoin="round"></path>
        <path
          d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
          stroke="#1d9e92" stroke-width="1.5" stroke-linecap="round"></path>
      </g>
    </svg>
    <h1 class="text-3xl font-bold text-center my-5">Successful Payment</h1>
    <p class="text-3xl text-center mb-10">{{ order.orderTotalCost }} UAH</p>
    <base-button class="w-full btn" @click="success">Back to App</base-button>
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

  box-shadow:
    2px 2px 5px 0px #14645de5,
    -2px -2px 4px 0px #30ead9e5,
    2px -2px 4px 0px #14645d33,
    -2px 2px 4px 0px #14645d33,
    -1px -1px 2px 0px #14645d80 inset,
    1px 1px 2px 0px #30ead94d ins;
}
</style>
```
