<template>
<!--  <PrimeButton v-slot="slotProps" asChild>-->
<!--    <button-->
<!--        v-bind="slotProps.a11yAttrs"-->
<!--        class="relative inline-flex w-12 h-12 ml-0 bg-surface-100 rounded-[50%]-->
<!--            justify-center items-center cursor-pointer transition-colors duration-150-->
<!--            hover:bg-surface-200"-->
<!--    >-->
<!--      <slot/>-->
<!--    </button>-->
<!--  </PrimeButton>-->

  <PrimeButton unstyled class="relative inline-flex cursor-pointer select-none items-center justify-center overflow-hidden transition-colors rounded-md
            bg-surface-0 enabled:hover:bg-surface-300 enabled:active:bg-surface-200 text-surface-contrast
            focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-surface-0
            disabled:cursor-default"
  >
      <slot/>
  </PrimeButton>
</template>
<script setup lang="ts">
</script>