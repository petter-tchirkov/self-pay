<template>
  <div class="round">
    <input
      id="checkbox"
      v-model="checked"
      type="checkbox"
      class="order__check"
    />
    <label
      for="checkbox"
      class="order__check-label"
    ></label>
  </div>
</template>

<script setup lang="ts">
  const checked = ref(false)
</script>

<style scoped>
  .round {
    position: relative;
    width: 25px;
    height: 25px;

    input {
      visibility: hidden;
    }

    label {
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 4px;
      cursor: pointer;
      width: 25px;
      height: 25px;
      box-shadow: 2px 2px 5px 0px #b0b0b0e5 inset,
        -2px -2px 4px 0px #ffffffe5 inset, 2px -2px 4px 0px #b0b0b033 inset,
        -2px 2px 4px 0px #b0b0b033 inset, -1px -1px 2px 0px #b0b0b080,
        1px 1px 2px 0px #ffffff4d;

      &:after {
        content: '';
        position: absolute;
        top: 4px;
        left: 4px;
        width: 17px;
        height: 17px;
        border-radius: 4px;
        background: #58a39c;
        opacity: 0;
        box-shadow: 2px 2px 5px 0px #35625ee5 inset,
          -2px -2px 4px 0px #7be4dae5 inset, 2px -2px 4px 0px #35625e33 inset,
          -2px 2px 4px 0px #35625e33 inset, -1px -1px 2px 0px #35625e80,
          1px 1px 2px 0px #7be4da4d;
      }
    }
  }
  .round input[type='checkbox']:checked + label:after {
    opacity: 1;
  }
</style>
