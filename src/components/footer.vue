<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
</script>

<template class="footer-section">
  <div class="container">
    <div class="footer-cta pt-5 pb-5">
      <div class="row">
        <div class="col-xl-4 col-md-4 mb-30">
          <div class="single-cta">
            <i class="fas fa-map-marker-alt"></i>
            <div class="cta-text">
              <h4>Find us</h4>
              <span>1010 Avenue, sw 54321, chandigarh</span>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-4 mb-30">
          <div class="single-cta">
            <i class="fas fa-phone"></i>
            <div class="cta-text">
              <h4>Call us</h4>
              <span>9876543210 0</span>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-4 mb-30">
          <div class="single-cta">
            <i class="far fa-envelope-open"></i>
            <div class="cta-text">
              <h4>Mail us</h4>
              <span>mail@info.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-content pt-5 pb-5">
      <div class="row">
        <div class="col-xl-4 col-lg-4 mb-50">
          <div class="footer-widget">
            <div class="footer-logo">
              <a href="index.html"><img src="https://i.ibb.co/QDy827D/ak-logo.png" class="img-fluid" alt="logo"></a>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-4 mb-30">
          <div class="single-cta">
            <i class="fas fa-map-marker-alt"></i>
            <div class="cta-text">
              <h4>Follow Us</h4>
              <div class="footer-social-icon">
                <a href="#"><font-awesome-icon :icon="['far', 'envelope']" style="color: white" /></a>
                <a href="#"><font-awesome-icon :icon="['fab', 'instagram']" style="color: white"/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="copyright-area">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
          <div class="footer-menu">
            <ul>
              <li><a>
                <router-link to="/">Home</router-link>
                Home</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Policy</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
