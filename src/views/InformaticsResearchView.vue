<template>
  <SectionPage v-bind="page">
    <section class="article">
      <p>Biodiversity Informatics at TUBRI develops research and technical capacity at the intersection of biological collections, specimen-linked data, imaging, metadata, and computational science. Our work focuses on making biodiversity resources more connected, accessible, and useful for scientific discovery, while creating new ways to study specimen-based collections through digital infrastructure, image-centered workflows, and AI-enabled approaches.</p>

      <h2>Image-Based Biodiversity Science</h2>
      <p>We treat specimen images as core biodiversity data and develop workflows and analytical approaches that support image-based discovery, classification, and research.</p>

      <h2>Metadata, Data Quality, and AI-Ready Datasets</h2>
      <p>We study how metadata generation, image quality, FAIR practices, and data curation improve the usability, reproducibility, and scientific value of biodiversity datasets.</p>

      <h2>ML for Specimen-Based Research</h2>
      <p>We explore how machine learning can support biological discovery from specimen images and collection data, including species classification, trait discovery, and other AI-assisted analyses.</p>

      <h2>Trait and Landmark Extraction</h2>
      <p>We develop approaches for extracting biologically meaningful information from specimen images, including anatomical landmarks, phenotypic traits, and image-derived features for morphology and evolutionary research.</p>

      <h2>Collections Data Systems and Digital Infrastructure</h2>
      <p>We build and support data systems, research software, and digital workflows that connect specimens, images, metadata, and analytical tools into research-ready biodiversity infrastructure.</p>

      <h2>Digitization, Imaging, and Specimen-Linked Media</h2>
      <p>We improve workflows for digitizing specimens and managing specimen-linked photographs and other media as part of long-term biodiversity knowledge infrastructure.</p>

      <h2>Data Integration, Georeferencing, and Interoperability</h2>
      <p>We connect specimen records with locality, environmental, and related research data while improving georeferencing, standardization, and interoperability across systems.</p>

      <h2>Specimen-Centered Discovery</h2>
      <p>Across all of these areas, our work remains grounded in biological collections and uses informatics and computational methods to extend the scientific value of specimens in biodiversity research.</p>
    </section>
  </SectionPage>
</template>

<script setup>
import SectionPage from '@/components/layout/SectionPage.vue'
import { informaticsSidebar, heroImages } from '@/config/sidebars'

const page = {
  heroImage: heroImages.informatics,
  heroTitle: 'Biodiversity Informatics',
  pageTitle: 'Research Areas',
  sidebar: informaticsSidebar,
}
</script>