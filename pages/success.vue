<script setup lang="ts">
const order = useOrderStore()
const isGoBack = ref(false)
const success = (path: string) => {
  useRouter().push(path)
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
    <ui-base-button class="w-full" @click="isGoBack = true" label="Back to App" is-green />
    <Dialog v-model:visible="isGoBack" header="Account" modal :pt="{
      root: () => ({
        class: ['bg-white w-full rounded-[15px] p-4 '],
      }),
      header: () => ({
        class: ['text-center text-xl flex justify-between font-bold'],
      }),
      closeButtonIcon: () => ({
        class: ['text-[#060f0a]'],
      }),
      mask: () => ({
        class: ['bg-black bg-opacity-40 px-8'],
      }),
    }">
      <p class="my-4">Do you want to create an account?</p>
      <div class="flex gap-3">
        <ui-base-button @click="success('/auth/register')" label="Yes" is-green class="mt-4" type="primary" />
        <ui-base-button @click="success('/menu')" label="No" class="mt-4" type="primary" />
      </div>
    </Dialog>
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
