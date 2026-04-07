<template>
  <SectionPage v-bind="page">
    <div class="article" style="max-width: 740px;">
      <h2>Fluid Preserved</h2>
      <div class="section-img">
        <img src="/img/JAR_SPECIMENS-0755.JPG" alt="Fluid Preserved collection">
      </div>

      <p>TUBRI holds the largest collection of postlarval fishes in the world, with nearly 8 million specimens in over 200,000 lots. The collection's name honors Royal D. Suttkus (1920–2009), who directed the institute for decades and who had a hand in collecting approximately five million specimens. The collection's type room houses 34 holotypes and 38,835 paratypes representing 125 species.</p>

      <p>The majority of material in the collection comes from freshwater river basins in the Gulf-South region (Texas, Louisiana, Mississippi, Alabama, Florida, Arkansas, Tennessee and Georgia) with diminishing representation northward, north eastward and north westward. The river systems most prominently represented in the collection are, from west to east, Neches, Sabine, Calcasieu, Red, Ouachita, Mississippi, Lake Pontchartrain drainages, Pearl, Pascagoula, small coastal rivers between the Pearl and Pascagoula, Tombigbee, Alabama, and Apalachicola. Colorado River fishes and fishes of other southwestern rivers are well represented. There is extensive representation of African (Mostly Guinea and Kenya) and Central American (principally Costa Rican) fishes, good representation of the fishes of eastern and central Mexico, and even a few collections of South American fishes. Marine fishes in the collection are mainly from estuaries and inshore waters of the northern Gulf of Mexico. However, the Caribbean Sea and the Atlantic Coast are moderately represented and there is a scattering of collections from the Pacific Coast of North, Central and South America. There are a few collections from the Indian Ocean off Thailand and Australia, and fresh and saltwater material from Indonesia.</p>

      <p>Our collection also proudly houses the world's only specimen of <i>Mollisquama mississippiensis</i>, the American Pocket Shark, which was collected in 2010 from the Gulf and described as a species new to science in 2019.</p>

      <h2>Skeletal Collection</h2>
      <div class="section-img">
        <img src="/img/JAR_SPECIMENS-1008.JPG" alt="Skeletal collection">
      </div>

      <p>A separately curated osteological collection contains 1352 specimens (271 species in 55 families). Of these, 638 are cleared and stained preparations representing 150 species in 20 families. Other special collections include 2010 radiographs representing 21,988 specimens from 284 species and 8 hybrids in 36 families, 2428 scale and otolith samples representing 26 species from 12 families, and 77 sets of branchiostegals of two species of gars (<i>Lepisosteus</i>.)</p>

      <h2>Future Collections</h2>
      <div class="section-img">
        <img src="/img/736b12a2-cd22-4dab-abda-dc3d86e9b804.png" alt="Future collections">
      </div>

      <p>We have begun assembling and curating a cryogenic collection of tissues suitable for genetic analysis. As of now our holdings are small: a few hundred samples of species from the Gulf, but we have projects lined up that will expand that number significantly. We aim to eventually house genetic material from every species that occurs within our focal region.</p>

      <h2>Specimen Data</h2>
      <p>The collection is completely digitized and 95% georeferenced. Records of the collection are accessible on line through <a href="https://www.gbif.org/" target="_blank">GBIF</a> and the <a href="http://www.fishnet2.net/" target="_blank">FishNet2</a> network of fish collection databases, which is presently managed by TUBRI.</p>

      <h2>Loans &amp; Access</h2>
      <p>Anyone interested in borrowing specimens from the collection should take a moment to review our <router-link to="/collection-policy">Loan Policy Statement</router-link> and contact the Collection Manager, <a href="mailto:jmann@tulane.edu">Justin Mann</a>.</p>
    </div>
  </SectionPage>
</template>

<script setup>
import SectionPage from '@/components/layout/SectionPage.vue'
import { collectionSidebar, heroImages } from '@/config/sidebars'

const page = {
  heroImage: heroImages.collection,
  heroTitle: 'The Collection',
  pageTitle: 'Royal D. Suttkus Fish Collection',
  sidebar: collectionSidebar,
  heroPosition: 'center 75%',
  heroOpacity: 0.7,
}
</script>

<style scoped>
.article h2 { margin: 48px 0 0; }
</style>