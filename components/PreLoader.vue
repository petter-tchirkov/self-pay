<script setup lang="ts"></script>
<template>
  <div class="flex justify-center items-center h-screen bg-white w-screen absolute top-0 z-50">
    <!-- <ProgressSpinner stroke-width="8" fill="#1d9e92" style="width: 50px; height: 50px" :ptOptions="{ -->
    <!--   root: () => ({ -->
    <!--     class: ['rounded-full flex justify-center items-center'] -->
    <!--   }), -->
    <!--   spinner: () => ({ -->
    <!--     class: ['w-20 h-20 text-white '] -->
    <!--   }), -->
    <!-- }" /> -->
    <!-- <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="8" fill="var(--surface-ground)" -->
    <!--   animationDuration=".5s" aria-label="Custom ProgressSpinner" /> -->
    <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
      <circle class="spin" cx="400" cy="400" fill="none" r="100" stroke-width="20" stroke="#1d9e92"
        stroke-dasharray="430 1400" stroke-linecap="round" />
    </svg>
  </div>
</template>

<style>
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.spin {
  transform-origin: center;
  animation: spin 2s linear infinite;
}
</style>
