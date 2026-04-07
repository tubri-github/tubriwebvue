<template>
  <SectionPage v-bind="page">
    <div class="article">
      <h2>Mission</h2>
      <p>TUBRI advances biodiversity science through stewardship of world-class fish collections, development of biodiversity informatics infrastructure that benefits natural history collections of all kinds, and integration of specimen-based research with emerging data and computational approaches.</p>

      <h2>Vision</h2>
      <p>A future in which fully connected biological collections, biodiversity data, and computational research enable scientific discovery, education, and understanding of the natural world.</p>

      <h2>Goals</h2>
      <p>We aim to empower biodiversity research with modern technologies, develop facilities that expand access to our vast specimen library, further TUBRI as a center for research on fishes from the Gulf South and beyond, and build high end informatic infrastructure that takes advantage of the AI revolution to solve current and future problems in biodiversity science.</p>

      <h2>Who We Are</h2>
      <p>TUBRI is a research institute built on two complementary strengths: the stewardship of physical biodiversity collections and the development of informatics-driven research infrastructure. The collection provides the foundation of specimens and metadata that make collections-based science possible. Biodiversity informatics extends that foundation into digital systems, data integration, and computational workflows that support broader research and discovery. Together, these two areas allow our institute to preserve biodiversity knowledge while also creating new ways to study, connect, and use it.</p>
    </div>
  </SectionPage>
</template>

<script setup>
import SectionPage from '@/components/layout/SectionPage.vue'
import { aboutSidebar, heroImages } from '@/config/sidebars'

const page = {
  heroImage: heroImages.about,
  heroTitle: 'About TUBRI',
  pageTitle: 'Mission & Vision',
  sidebar: aboutSidebar,
}
</script>