<script setup lang="ts">
const onMenuToggle = () => {};
</script>

<template>
  <AdminButton @click="onMenuToggle">
    <Icon name="prime:bars" class="text-5xl text-gray-900 hover:text-black" />
  </AdminButton>
</template>


<!--<style scoped>-->
<!--.layout-topbar-button {-->
<!--  display: inline-flex;-->
<!--  justify-content: center;-->
<!--  align-items: center;-->
<!--  position: relative;-->
<!--  color: var(&#45;&#45;text-color-secondary);-->
<!--  border-radius: 50%;-->
<!--  width: 3rem;-->
<!--  height: 3rem;-->
<!--  cursor: pointer;-->
<!--  transition: background-color $transitionDuration;-->

<!--  &:hover {-->
<!--    color: var(&#45;&#45;text-color);-->
<!--    background-color: var(&#45;&#45;surface-hover);-->
<!--  }-->

<!--  &:focus {-->
<!--    @include focused();-->
<!--  }-->

<!--  i {-->
<!--    font-size: 1.5rem;-->
<!--  }-->

<!--  span {-->
<!--    font-size: 1rem;-->
<!--    display: none;-->
<!--  }-->
<!--}-->
<!--</style>-->