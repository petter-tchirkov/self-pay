<template>
  <Dropdown
    v-model="locale"
    :options="global.langData"
    option-label="name"
    option-value="code"
    :pt="{
      trigger: { class: 'hidden' },
      root: ({ state }) => ({
        class: [
          'w-10 h-10 flex justify-center items-center cursor-pointer',
          'lang-switcher',
          {
            'rounded-r-[15px] bg-gradient-to-b from-[#e0e0e0] to-[#bebebe] shadow-light-opened':
              state.overlayVisible && !global.isDark,
          },
          {
            'rounded-[15px] bg-gradient-to-b from-[#dcdcdc] to-[#ffffff] shadow-light':
              !state.overlayVisible && !global.isDark,
          },
          {
            'rounded-[15px] bg-gradient-to-b from-[#36383d] to-[#3c3e43] shadow-dark':
              !state.overlayVisible && global.isDark,
          },
          {
            'rounded-r-[15px] bg-gradient-to-b from-[#36383d] to-[#3c3e43] shadow-dark-opened':
              state.overlayVisible && global.isDark,
          },
        ],
      }),
      input: ({ state }) => ({
        class: ['lang-switcher__input', 'flex justify-center'],
      }),
      list: () => ({
        class: [
          'flex justify-center absolute -top-10 -left-[160px] rounded-l-[15px]',
          'shadow-xl',
        ],
      }),
      item: {
        class: [
          'px-[9px] py-[13px] border-l  first:border-l-0',
          global.isDark ? 'border-l-[#000]' : 'border-l-[#bababa]',
        ],
      },
    }"
  >
    <template #value="slotProps">
      <LanguageIcon :lang="slotProps.value" />
    </template>
    <template #option="slotProps">
      <LanguageIcon :lang="slotProps.option.code" />
    </template>
  </Dropdown>
</template>

<script setup lang="ts">
const global = useGlobalStore();
const { locale } = useI18n();
</script>

<style scoped>
.shadow-light {
  box-shadow: 2px 2px 5px 0px #929292e5, -2px -2px 4px 0px #ffffffe5,
    2px -2px 4px 0px #92929233, -2px 2px 4px 0px #92929233,
    -1px -1px 2px 0px #92929280 inset, 1px 1px 2px 0px #ffffff4d inset;
}
.shadow-light-opened {
  box-shadow: 2px 2px 5px 0px #8f8f8fe5 inset, -2px -2px 4px 0px #ffffffe5 inset,
    2px -2px 4px 0px #8f8f8f33 inset, -2px 2px 4px 0px #8f8f8f33 inset,
    -1px -1px 2px 0px #8f8f8f80, 1px 1px 2px 0px #ffffff4d,
    2px 2px 5px 0px #929292e5, -2px -2px 4px 0px #ffffffe5,
    2px -2px 4px 0px #92929233, -2px 2px 4px 0px #929292,
    -1px -1px 2px 0px #92929280 inset, 1px 1px 2px 0px #ffffff4d inset;
}

.shadow-dark {
  box-shadow: 2px 2px 5px 0px #222326e5, -2px -2px 4px 0px #50535ae5,
    2px -2px 4px 0px #22232633, -2px 2px 4px 0px #22232633,
    -1px -1px 2px 0px #22232680 inset, 1px 1px 2px 0px #50535a4d inset;
}

.shadow-dark-opened {
  box-shadow: 2px 2px 5px 0px #222326e5 inset, -2px -2px 4px 0px #000 inset,
    2px -2px 4px 0px #8f8f8f33 inset, -2px 2px 4px 0px #8f8f8f33 inset,
    -1px -1px 2px 0px #8f8f8f80, 1px 1px 2px 0px #222326e5,
    2px 2px 5px 0px #222326e5, -2px -2px 4px 0px #000,
    2px -2px 4px 0px #92929233, -2px 2px 4px 0px #8f8f8f33,
    -1px -1px 2px 0px #92929280 inset, 1px 1px 2px 0px #000 inset;
}

.list-shadow-light {
  box-shadow: 2px 2px 5px 0px #929292e5, -2px -2px 4px 0px #ffffffe5,
    2px -2px 4px 0px #92929233, -2px 2px 4px 0px #92929233,
    -1px -1px 2px 0px #92929280 inset, 1px 1px 2px 0px #ffffff4d inset !important;
  border: 1px solid black;
}
</style>
