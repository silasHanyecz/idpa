<script setup>
import {RouterLink, RouterView} from 'vue-router'
import Navigation from "@/components/Navigation.vue";
</script>

<template>
  <header>
    <Navigation></Navigation>
  </header>
  <RouterView/>

  <footer class="col-12 text-center fixed-bottom bg-body border-top py-3">Silas Hanyecz</footer>
</template>

<style scoped>
</style>
