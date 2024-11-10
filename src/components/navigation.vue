<script setup>
</script>

<template >
<h1 class="text-center p-3 mb-0">EHB - Film works</h1>
  <nav class="navbar navbar-expand-lg sticky-top">
    <div class="container">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#Toggler"
              aria-controls="Toggler" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center text h2 " id="Toggler">

        <ul class="navbar-nav align-items-end">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/offer">Angebot</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/projects">Projekte</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/tutorial">Drohne</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/info">Über uns</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Kontakt</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
