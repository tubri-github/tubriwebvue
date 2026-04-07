<template>
  <SectionPage v-bind="page">
    <div class="article">
      <p>Biodiversity Informatics at TUBRI develops the data, software, and research infrastructure needed to document, connect, and analyze biodiversity knowledge at scale. The program integrates biological collections, specimen records, images, geospatial data, and computational methods to support discovery, research, and long-term access to biodiversity information.</p>

      <p>Our work sits at the intersection of biodiversity science, museum collections, data engineering, and computational research. We build systems that make biodiversity data more usable, interoperable, and scientifically valuable, while also advancing new approaches in imaging, digitization, georeferencing, data integration, and AI-enabled analysis.</p>

      <div class="article-img">
        <img src="/img/crop.jpg" alt="">
      </div>

      <h3>What We Do</h3>

      <p>The Biodiversity Informatics team designs and maintains platforms, workflows, and research-driven tools that help transform biological data into connected scientific infrastructure. This includes collection data systems, specimen data integration, geospatial and environmental data linkage, image-based workflows, and computational methods that support research across taxonomy, ecology, evolution, and biodiversity science.</p>
      <ul>
        <li>developing and supporting biodiversity data systems and digital platforms</li>
        <li>integrating specimen, image, locality, and environmental data</li>
        <li>improving data quality, discoverability, and interoperability</li>
        <li>building tools for georeferencing, digitization, and data mobilization</li>
        <li>supporting collaborative research and engineering projects</li>
        <li>exploring machine learning and AI applications for biodiversity data</li>
      </ul>

      <h3>Why It Matters</h3>
      <p>Biodiversity data are often distributed across collections, databases, publications, and media resources. Unlocking their scientific value requires more than digitization alone. It requires infrastructure that can connect records across systems, support reproducible workflows, and enable researchers to ask new questions at larger spatial, temporal, and taxonomic scales.</p>

      <div class="article-img">
        <img src="/img/Untitled.jpg" alt="">
      </div>

      <h3>Collaboration</h3>
      <p>Biodiversity Informatics is inherently collaborative. Our work connects curators, collection managers, students, software developers, data specialists, and researchers across disciplines and institutions. We collaborate on projects involving biodiversity data integration, collection digitization, imaging workflows, standards development, environmental data linkage, and computational approaches to specimen-based science.</p>

      <h3>Relationship to the Collection</h3>
      <p>At TUBRI, Biodiversity Informatics works closely with the Collection to extend the value of physical specimens into digital research environments. The Collection provides the specimen foundation; Biodiversity Informatics develops the systems, workflows, and analytical frameworks that expand access to those materials and connect them to broader scientific questions.</p>

      <h3>Get Involved</h3>
      <p>We welcome collaboration with researchers, students, institutions, and partners interested in biodiversity data, software development, digitization, imaging, and computational biodiversity research.</p>
      <p>To learn more, explore our <router-link to="/informatics/platforms">data systems &amp; platforms</router-link>, <router-link to="/informatics/tools">tools &amp; software</router-link>, or <router-link to="/informatics/publications">publications</router-link>.</p>
    </div>
  </SectionPage>
</template>

<script setup>
import SectionPage from '@/components/layout/SectionPage.vue'
import { informaticsSidebar, heroImages } from '@/config/sidebars'

const page = {
  heroImage: heroImages.informatics,
  heroTitle: 'Biodiversity Informatics',
  pageTitle: 'Overview',
  sidebar: informaticsSidebar,
}
</script>