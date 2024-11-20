<template>
  <div class="video-wrapper mb-5">
    <video loop autoplay muted class="backgroundVideo">
      <source src="/img/homevideo.mp4" type="video/mp4">
    </video>
    <div class="text-overlay">
      <h1 style="font-size: 70px">Turn Ideas into Action</h1>
      <h2 style="font-size: 40px">Time is limited</h2>
    </div>

  </div>

  <div class="container">

    <div class="w-75 ms-3" style="margin-top: 100px">
      <h2 class="text-start mb-3">Die Idee hinter EHB - Film works</h2>
      <p class="text-start">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita
        kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
        sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
        sanctus est Lorem ipsum dolor sit amet.</p>
    </div>

    <div style="margin-top: 100px">
      <h2 class="ms-3">Angebot</h2>
      <section class="hero-section mt-4">
        <div class="card-grid">
          <a class="card" href="#">
            <div class="card__background"
                 style="background-image: url('/img/efficiency.jpg')"></div>
            <div class="card__content">
              <p class="card__category">EHB-Filmworks</p>
              <h3 class="card__heading">Effizienz</h3>
            </div>
          </a>
          <a class="card" href="#">
            <div class="card__background"
                 style="background-image: url('/img/upToDate.jpg')"></div>
            <div class="card__content">
              <p class="card__category">EHB-Filmworks</p>
              <h3 class="card__heading">Up-To-Date</h3>
            </div>
          </a>
          <a class="card" href="#">
            <div class="card__background"
                 style="background-image: url('/img/personal.jpg')"></div>
            <div class="card__content">
              <p class="card__category">EHB-Filmworks</p>
              <h3 class="card__heading">Persönlich</h3>
            </div>
          </a>
          <a class="card" href="#">
            <div class="card__background"
                 style="background-image: url('/img/motivated.jpg')"></div>
            <div class="card__content">
              <p class="card__category">EHB-Filmworks</p>
              <h3 class="card__heading">Motiviert</h3>
            </div>
          </a>
        </div>
      </section>
    </div>
    <!--    Progressbar-->

    <!-- End of Progressbar -->

    <!-- Video -->
    <div class="ms-3" style="margin-top: 100px">
      <h2>Neuste Projekte</h2>
      <p class="mb-5">Das sind die neusten Projekte von EHB-Filmworks der letzten Wochen</p>
      <div class="blog-container">
        <div class="blog-card">
          <div class="meta">
            <div class="photo"
                 style="background-image: url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)"></div>
            <ul class="details">
              <li class="author"><a href="#">Zum Video</a></li>
            </ul>
          </div>
          <div class="description">
            <h1>Golfplatz Meggen</h1>
            <h2>vom 1.11.2024</h2>
            <p>Es gibt sehr viele gute Gründe, Golf zu spielen. Golfen ist für jedes Alter geeignet, hält fit und bereitet...</p>
            <p class="read-more">
              <a href="#">Mehr zum Projekt</a>
            </p>
          </div>
        </div>
        <div class="blog-card alt">
          <div class="meta">
            <div class="photo"
                 style="background-image: url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg)"></div>
            <ul class="details">
              <li class="author"><a href="#">Jane Doe</a></li>
              <li class="date">July. 15, 2015</li>
              <li class="tags">
                <ul>
                  <li><a href="#">Learn</a></li>
                  <li><a href="#">Code</a></li>
                  <li><a href="#">JavaScript</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="description">
            <h1>Mastering the Language</h1>
            <h2>Java is not the same as JavaScript</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p class="read-more">
              <a href="#">Read More</a>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Video Ende -->
    <div class="ms-3" style="margin-top: 70px">
      <h2>Gefällt Ihnen unsere Arbeit?</h2>
      <p>Dann kontaktieren Sie uns über das Formular am ender der Seite</p>
    </div>
    <Contact style="margin-top: 100px"></Contact>
  </div>
</template>
<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import Contact from "@/views/contact.vue";
</script>