<template>
  <div class="page-hero">
    <img src="/img/TUBRI-3 Wild Boar Road-1041.JPG" alt="TUBRI facilities">
    <div class="page-hero-ov"></div>
    <h1>Visit &amp; Contact</h1>
  </div>

  <div class="visit-layout">
    <div class="visit-main">

      <h2>Maps &amp; Directions</h2>

      <p>Although TUBRI is nestled away in the bottomland forests in a remote corner of the New Orleans metro area, getting to us is not difficult. If you need additional help, please contact Justin Mann at <a href="mailto:jmann@tulane.edu">jmann@tulane.edu</a>.</p>

      <div class="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3462.5!2d-89.9544061!3d29.8914745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x889e1c2f9c2205ab%3A0x8fedffb64a046970!2sWild+Boar+Rd%2C+Louisiana+70037!5e0!3m2!1sen!2sus!4v1" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <h3>Directions from the Crescent City Connection</h3>
      <ul>
        <li>When on the Crescent City Connection (the bridge crossing the Mississippi River), take the first exit on the right (General Degaulle).</li>
        <li>Take the left fork (Gen. Degaulle East).</li>
        <li>Follow General Degaulle all the way to the end (approximately five miles).</li>
        <li>Cross the bridge, make a left (onto Woodland Hwy., no street sign) and go one-half mile to the flashing yellow light (Hebert Blvd.).</li>
        <li>Make a left on Hebert Blvd. and follow approximately one mile to its end at the river levee.</li>
        <li>Make a left and go through the gate. You are now on TUBRI's grounds.</li>
        <li>Follow the winding paved road to the first gravel road on the left.</li>
        <li>Make a left and follow less than a half mile to the dead end.</li>
        <li>Make a right and park in front of the building. You are there.</li>
      </ul>

    </div>

    <div class="visit-sidebar">

      <div class="visit-card">
        <h3>Address</h3>
        <p>3705 Main St.</p>
        <p>Building A-3</p>
        <p>Belle Chasse, LA 70037</p>
      </div>

      <div class="visit-card">
        <h3>Contact</h3>
        <p>Phone: 504-394-1711</p>
        <p>Fax: 504-394-5045</p>
        <p><a href="mailto:jmann@tulane.edu">jmann@tulane.edu</a></p>
      </div>

      <div class="visit-card">
        <h3>Access</h3>
        <p><strong>The museum is not open to the public. This information is for visiting scientists and school groups only.</strong></p>
      </div>

    </div>
  </div>
</template>

<style scoped>
.visit-layout {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 48px;
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 48px;
  padding-top: 48px;
  padding-bottom: 64px;
}

.visit-main h2 {
  font-family: var(--f-heading);
  font-size: 28px; font-weight: 700;
  margin: 36px 0 12px;
}
.visit-main h2:first-child { margin-top: 0; }
.visit-main p {
  font-size: 16px; line-height: 1.85;
  color: var(--c-text-secondary);
  margin-bottom: 16px;
}
.visit-main a { color: var(--c-accent); font-weight: 500; }
.visit-main .notice {
  background: var(--c-bg-alt);
  padding: 20px 24px;
  margin: 20px 0;
  font-size: 15px;
  font-weight: 600;
  color: var(--c-text);
  line-height: 1.6;
}
.visit-main h3 {
  font-size: 18px; font-weight: 700;
  margin: 28px 0 10px;
}
.visit-main ul {
  padding-left: 20px;
  margin-bottom: 20px;
}
.visit-main ul li {
  font-size: 15px; line-height: 1.7;
  color: var(--c-text-secondary);
  margin-bottom: 6px;
}

.visit-sidebar {
  align-self: start;
}
.visit-card {
  background: var(--c-bg-alt);
  padding: 28px;
  margin-bottom: 20px;
}
.visit-card h3 {
  font-family: var(--f-heading);
  font-size: 20px; font-weight: 700;
  margin-bottom: 12px;
}
.visit-card p {
  font-size: 15px; line-height: 1.65;
  color: var(--c-text-secondary);
  margin-bottom: 4px;
}
.visit-card a { color: var(--c-accent); font-weight: 500; }

.map-container {
  width: 100%;
  aspect-ratio: 4/3;
  margin-bottom: 20px;
  background: var(--c-placeholder-2);
}
.map-container iframe {
  width: 100%; height: 100%; border: none;
}

@media (max-width: 768px) {
  .visit-layout { grid-template-columns: 1fr; padding: 32px 24px 48px; }
}
</style>