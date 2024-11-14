<script setup lang="ts">
const onMenuToggle = () => {};
</script>

<template>
  <div class="fixed w-full h-20 z-50 left-0 top-0 py-0 px-8 bg-[var(--surface-card)] transition flex items-center shadow-md">
    <NuxtLink to="/" class="layout-topbar-logo">
<!--      <img alt="Logo" :src="topbarImage()">-->
      <span>SAKAI</span>
    </NuxtLink>
    <Button class="p-link layout-menu-button layout-topbar-button" @click="onMenuToggle">
      <i class="pi pi-bars" />
    </Button>

    <Button
        v-styleclass="{
          selector: '@next',
          enterClass: 'hidden',
          enterActiveClass: 'scalein',
          leaveToClass: 'hidden',
          leaveActiveClass: 'fadeout',
          hideOnOutsideClick: true
        }"
        class="p-link layout-topbar-menu-button layout-topbar-button"
    >
      <i class="pi pi-ellipsis-v" />
    </Button>
    <ul class="layout-topbar-menu hidden lg:flex origin-top">
      <li>
        <Button class="p-link layout-topbar-button">
          <i class="pi pi-calendar" />
          <span>Events</span>
        </Button>
      </li>
      <li>
        <Button class="p-link layout-topbar-button">
          <i class="pi pi-cog" />
          <span>Settings</span>
        </Button>
      </li>
      <li>
        <Button class="p-link layout-topbar-button">
          <i class="pi pi-user" />
          <span>Profile</span>
        </Button>
      </li>
    </ul>
  </div>
</template>