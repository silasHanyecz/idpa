<template>
  <div class="container">
    <div >
      <video loop autoplay muted class="w-100 pt-5" >
        <source src="/img/golfvideoTest.mp4" type="video/mp4">
        <source src="/img/golfvideoTest.webm" type="video/webm">
      </video>
    </div>

    <h2 class="text-center">Die Idee hinter EHB - Film works</h2>
    <p class="text-center">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
      invidunt ut labore et
      dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
      kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
      sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
      sanctus est Lorem ipsum dolor sit amet.</p>
    <div class="d-flex justify-content-center">
      <video loop autoplay muted class="w-75">
        <source src="/img/demoVideoHomePage.mp4" type="video/mp4">
      </video>
    </div>
    <RouterLink class="h2 d-flex justify-content-center mt-3 text-decoration-none" to="/offer">Angebot
    </RouterLink>
    <div class="d-flex justify-content-center align-items-center flex-column ">
    <div class="row w-100">
      <div class="d-flex col-6 flex-column align-items-center">
        <font-awesome-icon class="fa-4x" :icon="['fas', 'plug-circle-bolt']"/>
        <p>Effizienz</p>
      </div>
      <div class="col-6 d-flex flex-column align-items-center">
        <font-awesome-icon class="fa-4x" :icon="['fas', 'clock']"/>
        <p>Up-To-Date</p>
      </div>
    </div>
    <div class="row w-100 mt-5">
      <div class="col-6 d-flex flex-column align-items-center">
        <font-awesome-icon class="fa-4x" :icon="['fas', 'people-arrows']"/>
        <p>Persönlich</p>
      </div>
      <div class="col-6 d-flex flex-column align-items-center">
        <font-awesome-icon class="fa-4x" :icon="['fas', 'person-circle-plus']"/>
        <p>Motiviert</p>
      </div>
    </div>
  </div>
    <Contact></Contact>
  </div>
</template>
<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import Contact from "@/views/contact.vue";
</script>