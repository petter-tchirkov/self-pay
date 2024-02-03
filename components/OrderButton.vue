<template>
  <button :class="['order-btn', { dark: isDark }]">
    {{ $t("order", { number: 1, price: 250 }) }}
  </button>
</template>

<script setup lang="ts">
const { isDark } = storeToRefs(useGlobalStore());
</script>

<style scoped>
.order-btn {
  width: 100%;
  max-width: 960px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  padding-top: 20px;
  padding-bottom: 24px;
  color: #060f0acc;
  background: linear-gradient(135deg, #f6f6f6 0%, #dddddd 100%);
  font-size: 25px;
  font-weight: 600;
  line-height: 27.1px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;

  box-shadow: 20px -5px 67.30000305175781px 0px #299d9247,
    -2px 5px 20.399999618530273px 0px #299d9208, 2px -2px 4px 0px #299d9233,
    -2px 2px 4px 0px #299d9233;
}

.order-btn.dark {
  background: linear-gradient(135deg, #2c2d31 0%, #44464d 100%);
  color: #f1f2f6cc;

  box-shadow: 20px -5px 67.30000305175781px 0px #ed536047,
    -2px 5px 20.399999618530273px 0px #ed536008, 2px -2px 4px 0px #ed536033,
    -2px 2px 4px 0px #ed536033;
}
</style>
