<template>
  <SectionPage v-bind="page">
    <div class="article" style="max-width:640px;">
      <h2>Leadership</h2>
      <p><router-link to="/people/staff#brian-sidlauskas">Brian L. Sidlauskas</router-link> — Institute Director</p>
      <p><router-link to="/people/staff#henry-bart">Henry L. Bart, Jr.</router-link> — Former Director</p>
      <p><router-link to="/people/staff#yasin-bakis">Yasin Bak&#305;&#351;</router-link> — Sr. Manager of Biodiversity Informatics</p>
      <p><router-link to="/people/staff#justin-mann">Justin Mann</router-link> — Collection Manager</p>

      <h2>Staff</h2>
      <p><router-link to="/people/staff#deantral-hingle">Deantral Hingle</router-link> — Senior Administrative Coordinator</p>
      <p><router-link to="/people/staff#xiaojun-wang">Xiaojun Wang</router-link> — Research Software Developer</p>
      <p><router-link to="/people/staff#paula-burch">Paula B Burch</router-link> — Assistant Curator</p>
      <p><router-link to="/people/staff#grace-gleason">Grace Gleason</router-link> — Assistant Curator</p>
      <p><router-link to="/people/staff#andrew-jones">Andrew R Jones</router-link> — Assistant Curator</p>
    </div>
  </SectionPage>
</template>

<script setup>
import SectionPage from '@/components/layout/SectionPage.vue'
import { peopleSidebar, heroImages } from '@/config/sidebars'

const page = {
  heroImage: heroImages.people,
  heroTitle: 'People',
  pageTitle: 'Directory',
  sidebar: peopleSidebar,
  heroPosition: 'center 30%',
}
</script>

<style scoped>
.article p { font-size: 15px; margin-bottom: 8px; }
</style>