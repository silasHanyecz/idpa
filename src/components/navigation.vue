<script setup>
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
    <div class="container">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#Toggler"
              aria-controls="Toggler" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="Toggler">
        <ul class="navbar-nav align-items-end">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Projekte</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/employee">Tutorial</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/customer">Über uns</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/location">Kontakt</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
