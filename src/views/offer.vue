<template>
  <div class="container align-content-center" style="margin-top:10%;">
    <h1>Angebot</h1>
    <p>Wir sind Ihre Full-Service-Videoagentur und unterstützen Sie dabei, Ihre Marke, Ihr Event oder Ihre Vision in die
      richtige Perspektive zu rücken. Unser Portfolio bietet eine breite Palette an Leistungen, die individuell auf Ihre
      Bedürfnisse abgestimmt sind:</p>
    <div style="margin-top: 100px">
      <section class="hero-section mt-4">
        <div class="card-grid">
          <a class="card" @mouseover="data.showReelText=true" @mouseleave="data.showReelText=false">
            <div class="card__background">
              <img src="/img/person.jpg" alt="efficiency">
            </div>
            <div class="card__content">
              <p class="card__category">EHB-Filmworks</p>
              <h3 class="card__heading">Insta Reels</h3>
            </div>
          </a>
          <a class="card" @mouseover="data.showCinematicText=true" @mouseleave="data.showCinematicText=false">
            <div class="card__background">
              <img src="/img/ampel.jpg" alt="uptoDateS">
            </div>
            <div class="card__content">
              <p class="card__category">EHB-Filmworks</p>
              <h3 class="card__heading">Cinematic</h3>
            </div>
          </a>
          <a class="card" @mouseover="data.showDroneText=true" @mouseleave="data.showDroneText=false">
            <div class="card__background">
              <img src="/img/autooffer.jpg" alt="personal">
            </div>
            <div class="card__content">
              <p class="card__category">EHB-Filmworks</p>
              <h3 class="card__heading">Drohnen-Shots</h3>
            </div>
          </a>
        </div>
      </section>
      <div style="margin-top: 50px;">
        <div v-if="data.showReelText">
          <h2>🎥 Instagram Reels: Kurz und kraftvoll</h2>
          <p>Wir erstellen dynamische, trendige und aufmerksamkeitsstarke Reels, die Ihre Zielgruppe direkt ansprechen.
            Mit
            kreativem Storytelling, schnellen Schnitten und packenden Effekten optimieren wir Ihre Inhalte speziell für
            Instagram – damit sie liken, teilen und viral gehen! Ob Produktpräsentationen, Event-Highlights oder hinter
            den
            Kulissen – wir setzen alles perfekt in Szene.</p>
        </div>

        <div v-if="data.showCinematicText">
          <h2>🎬 Cinematic Videos: Geschichten, die bewegen</h2>
          <p>Unsere cinematic Videos sind mehr als nur Filme – sie sind visuelle Erlebnisse. Mit professionellen
            Kameratechniken, intensiver Nachbearbeitung und packendem Soundtrack kreieren wir emotionale und hochwertige
            Videos.</p>
          <ul>
            <li>Imagefilme: Präsentieren Sie Ihre Marke authentisch und eindrucksvoll.</li>
            <li>Eventfilme: Halten Sie besondere Momente für die Ewigkeit fest.</li>
            <li>Produktvideos: Zeigen Sie Ihre Innovationen in einem neuen Licht.
              Wir legen Wert auf hochwertige Ästhetik und eine klare Botschaft, die Ihre Zielgruppe überzeugt.
            </li>
          </ul>
        </div>
        <div v-if="data.showDroneText">
          <h2>🚁 Drohnenaufnahmen: Perspektiven, die begeistern</h2>
          <p>Unsere Drohnenshots eröffnen Ihnen neue Horizonte! Ob beeindruckende Luftbilder Ihrer Location,
            actionreiche
            Verfolgungssequenzen oder epische Landschaftsaufnahmen – unsere Drohnenaufnahmen sorgen für einen
            Wow-Effekt.
            Dank moderner Technologie und kreativer Planung sind unsere Drohnenvideos perfekt für:</p>
          <ul>
            <li>Immobilienmarketing</li>
            <li>Unternehmenspräsentationen</li>
            <li>Hochzeiten und Events</li>
            <li>Tourismus- und Outdoor-Projekte</li>
          </ul>
          <h2>Warum Sie uns wählen sollten:</h2>
          <ul>
            <li>Kreative Expertise: Wir verstehen, wie man Geschichten erzählt, die im Gedächtnis bleiben.</li>
            <li>Modernste Technik: Von High-End-Kameras bis zu Drohnen der neuesten Generation – wir sind technisch
              bestens
              ausgestattet.
            </li>
            <li>Persönliche Betreuung: Ihre Wünsche stehen im Mittelpunkt. Wir begleiten Sie von der Idee bis zur
              finalen
              Umsetzung.
            </li>
            <li>Vielfalt & Flexibilität: Egal ob für Social Media, Unternehmenskommunikation oder private Projekte – wir
              liefern maßgeschneiderte Lösungen.
            </li>
          </ul>

        </div>
        <p>Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch und erfahren Sie, wie wir Ihre Ideen in
          beeindruckende Videos verwandeln können! ✨</p>
      </div>
    </div>
  </div>
</template>

<script setup>

import {reactive} from "vue";

let data = reactive({
  showReelText: false,
  showCinematicText: false,
  showDroneText: false
})
</script>