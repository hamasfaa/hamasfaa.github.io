<template>
  <div class="flex flex-col min-h-screen font-Orbitron bg-Black">
    <SiteNavigation />
    <RouterView />
    <!-- <About /> -->
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import SiteNavigation from "./components/SiteNavigation.vue";
import About from "./components/About.vue";
</script>

<style lang="scss" scoped></style>
