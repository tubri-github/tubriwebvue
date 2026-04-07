<template>
  <SectionPage v-bind="page">
    <section class="article">
      <p>TUBRI Biodiversity Informatics develops and supports data systems and digital platforms that connect biological collections to research, discovery, and long-term data access. These systems help organize specimen information, improve data quality, support digitization workflows, and make biodiversity data easier to share, search, and reuse across institutions and research communities.</p>
      <p>Our platforms are designed to serve both local collection needs and broader collaborative networks. Some support the management and mobilization of specimen records, while others focus on georeferencing, image-based workflows, environmental data integration, or large-scale biodiversity data access.</p>

      <h2>What These Systems Support</h2>
      <p>The data systems and platforms developed or maintained through Biodiversity Informatics help support a wide range of scientific and operational needs. These include managing collection data, linking specimen records with images and locality information, improving discoverability, enabling data exchange, and supporting analytical workflows across biodiversity research.</p>
      <p>These systems are intended to make biodiversity data more connected, interoperable, and useful for research, education, and collection stewardship.</p>

      <h2>Core Functions</h2>
      <ul>
        <li>specimen record management and data organization</li>
        <li>digitization and data mobilization workflows</li>
        <li>georeferencing and locality data improvement</li>
        <li>integration of specimen, image, and environmental data</li>
        <li>data sharing across institutions and research networks</li>
        <li>search, access, and reuse of biodiversity records</li>
        <li>support for research, analysis, and computational workflows</li>
      </ul>

      <h2>Major Platform Areas</h2>

      <h3>Collection Data Infrastructure</h3>
      <p>These systems support the organization, maintenance, and accessibility of specimen-based collection data. They help ensure that biodiversity records remain structured, searchable, and useful both within the institute and beyond it.</p>

      <h3>Research Data Integration</h3>
      <p>Biodiversity data become more powerful when linked across sources. Our platforms support the integration of specimen records with images, geographic information, environmental variables, and related research data.</p>

      <h3>Geospatial and Locality Tools</h3>
      <p>Geographic context is central to biodiversity research. We support tools and workflows that improve locality data, georeferencing accuracy, and spatial usability for collections-based research.</p>

      <h3>Data Sharing and Networked Access</h3>
      <p>Biodiversity Informatics contributes to systems that make data available beyond a single institution. These efforts help connect TUBRI resources to wider biodiversity data communities and collaborative research networks.</p>

      <h2>Relationship to Research and Collections</h2>
      <p>These platforms are not separate from the rest of the institute's work. They are part of the bridge between the Collection and Biodiversity Informatics. The Collection provides the specimen foundation, while Biodiversity Informatics develops the digital systems that expand access, usability, and analytical potential.</p>
      <p>Together, these efforts support both institutional stewardship and broader scientific collaboration.</p>

      <h2>Future Directions</h2>
      <p>As biodiversity data continue to grow in scale and complexity, the need for robust, flexible, and research-ready platforms becomes even more important. TUBRI Biodiversity Informatics is interested in systems that support richer specimen linkage, improved interoperability, image-centered workflows, AI-ready datasets, and more integrated biodiversity research environments.</p>

      <h2>Explore More</h2>
      <p>To learn more, visit our pages on research areas, active projects, tools and software, collaborations, and publications.</p>
    </section>
  </SectionPage>
</template>

<script setup>
import SectionPage from '@/components/layout/SectionPage.vue'
import { informaticsSidebar, heroImages } from '@/config/sidebars'

const page = {
  heroImage: heroImages.informatics,
  heroTitle: 'Biodiversity Informatics',
  pageTitle: 'Data Systems & Platforms',
  sidebar: informaticsSidebar,
}
</script>