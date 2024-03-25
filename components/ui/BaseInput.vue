<template>
  <input :type="type" :placeholder="placeholder" :value="modelValue"
    @input="$emit('update:modelValue', $event.target?.value)" />
</template>

<script setup lang="ts">
const { type = 'text', placeholder = 'placeholder' } = defineProps<{
  type: string
  placeholder: string
  modelValue: string
}>()
</script>

<style scoped lang="scss">
input {
  display: block;
  width: 100%;
  height: 40px;
  padding-left: 15px;
  background: linear-gradient(180deg,
      #f4f4f4 0%,
      #f6f6f6 0.01%,
      #dddddd 100%);
  border-radius: 15px;
  box-shadow: 2px 2px 5px rgba(146, 146, 146, 0.9),
    -2px -2px 4px rgba(255, 255, 255, 0.9),
    2px -2px 4px rgba(146, 146, 146, 0.2),
    -2px 2px 4px rgba(146, 146, 146, 0.2),
    inset -1px -1px 2px rgba(146, 146, 146, 0.5),
    inset 1px 1px 2px rgba(255, 255, 255, 0.3);
  font-weight: 600;
  font-size: 18px;
  line-height: 1.08;

  &::placeholder {
    color: rgba(6, 15, 10, 0.6000000238418579);
  }
}
</style>
