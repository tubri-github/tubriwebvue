<template>
  <footer>
    <div class="footer-top">
      <div>
        <p class="footer-brand">TUBRI</p>
        <p class="footer-brand-desc">Tulane University Biodiversity Research Institute — biodiversity discovery and informatics research at Tulane University.</p>
      </div>
      <div class="footer-col">
        <h4>Institute</h4>
        <router-link to="/about">About</router-link>
        <router-link to="/history">History</router-link>
        <router-link to="/facilities">Facilities</router-link>
        <router-link to="/people">People</router-link>
      </div>
      <div class="footer-col">
        <h4>Research</h4>
        <router-link to="/collection">Collection</router-link>
        <router-link to="/informatics">Biodiversity Informatics</router-link>
        <router-link to="/informatics/publications">Publications</router-link>
        <router-link to="/informatics/tools">Tools &amp; Software</router-link>
      </div>
      <div class="footer-col">
        <h4>Connect</h4>
        <router-link to="/visit">Visit &amp; Contact</router-link>
        <router-link to="/opportunities/donating">Donating</router-link>
        <router-link to="/opportunities/volunteering">Volunteering</router-link>
        <a href="https://tulane.edu" target="_blank">Tulane University</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; {{ new Date().getFullYear() }} Tulane University Biodiversity Research Institute</span>
      <div>
        <a href="#">Privacy</a>
        <a href="#">Accessibility</a>
      </div>
    </div>
  </footer>
</template>