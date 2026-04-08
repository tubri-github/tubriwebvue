<template>
  <SectionPage v-bind="page">
    <!-- Top row: 1 card centered -->
    <div class="brian-row">
      <div class="member-card">
        <div class="member-card-img">
          <img src="/img/people/BrianS.jpg" alt="Brian L. Sidlauskas">
        </div>
        <h4>Brian L. Sidlauskas</h4>
        <p class="role">Institute Director</p>
        <p class="contact"><a href="mailto:bsidlauskas@tulane.edu" title="bsidlauskas@tulane.edu">&#9993; Email</a></p>
      </div>
    </div>

    <!-- Bottom row of 3 -->
    <div class="team-grid">
      <div class="member-card">
        <div class="member-card-img">
          <img src="/img/people/bart.png" alt="Henry L. Bart, Jr.">
        </div>
        <h4>Henry L. Bart, Jr.</h4>
        <p class="role">Former Director</p>
        <p class="contact"><a href="mailto:hbartjr@tulane.edu" title="hbartjr@tulane.edu">&#9993; Email</a></p>
      </div>
      <div class="member-card">
        <div class="member-card-img">
          <img src="/img/people/bakis.png" alt="Yasin Bakış">
        </div>
        <h4>Yasin Bakış</h4>
        <p class="role">Sr. Manager of Biodiversity Informatics</p>
        <p class="contact"><a href="mailto:ybakis@tulane.edu" title="ybakis@tulane.edu">&#9993; Email</a></p>
      </div>
      <div class="member-card">
        <div class="member-card-img">
          <img src="/img/people/justin.jpg" alt="Justin Mann" style="object-position:top">
        </div>
        <h4>Justin Mann</h4>
        <p class="role">Collection Manager</p>
        <p class="contact"><a href="mailto:jmann@tulane.edu" title="jmann@tulane.edu">&#9993; Email</a></p>
      </div>
    </div>

    <div style="padding-bottom: 64px;"></div>
  </SectionPage>
</template>

<script setup>
import SectionPage from '@/components/layout/SectionPage.vue'
import { peopleSidebar, heroImages } from '@/config/sidebars'

const page = {
  heroImage: heroImages.people,
  heroTitle: 'People',
  pageTitle: 'Leadership',
  sidebar: peopleSidebar,
  heroPosition: 'center 30%',
}
</script>

<style scoped>
.team-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  margin-top: 32px;
}
.brian-row {
  display: flex; justify-content: center;
  margin-top: 32px;
}
.brian-row .member-card {
  width: calc((100% - 56px) / 3);
}
.member-card { text-align: center; }
.member-card-img {
  width: 100%; aspect-ratio: 1/1;
  overflow: hidden; background: var(--c-placeholder-1);
  margin-bottom: 14px;
}
.member-card-img img { width: 100%; height: 100%; object-fit: cover; }
.member-card h4 {
  font-family: var(--f-heading);
  font-size: 18px; font-weight: 700; margin-bottom: 2px;
}
.member-card .role {
  font-size: 13px; color: var(--c-accent); font-weight: 600; margin-bottom: 8px;
}
.member-card .contact {
  margin-top: 8px; font-size: 13px; color: var(--c-text-muted);
}
.member-card .contact a { color: var(--c-accent); }

@media (max-width: 1024px) {
  .team-grid { grid-template-columns: repeat(2, 1fr); }
  .brian-row .member-card { width: calc((100% - 28px) / 2); }
}
@media (max-width: 768px) {
  .team-grid { grid-template-columns: 1fr; }
  .brian-row .member-card { width: 100%; max-width: 260px; }
  .member-card { max-width: 260px; margin-left: auto; margin-right: auto; }
}
</style>
