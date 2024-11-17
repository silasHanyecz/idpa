<script setup>
import {RouterLink, RouterView} from 'vue-router'
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/footer.vue";

</script>

<template>
  <header>
    <Navigation></Navigation>
  </header>
  <RouterView/>
  <footer style="margin-top: 70px">
    <Footer></Footer>
  </footer>
</template>


<style scoped>
</style>
