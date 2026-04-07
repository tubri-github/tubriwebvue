<template>
  <SectionPage v-bind="page">
    <section class="article">
      <p>Supporting TUBRI helps us to sustain fish biodiversity research, innovate in biodiversity informatics, steward our exceptional collection, improve the accessibility of our specimens, and expand educational and training opportunities. As a research institute built on physical collections and digital innovation, TUBRI depends on sustained investment in specimens, facilities, infrastructure, and people.</p>

      <p>Gifts to TUBRI can help support:</p>
      <ul>
        <li>Long-term care and stewardship of specimens</li>
        <li>Upgrades to the collection's physical infrastructure</li>
        <li>Improved computational infrastructure to enhance informatics innovation</li>
        <li>Expeditionary research and collection growth</li>
        <li>Student training and research opportunities</li>
        <li>Digitization and data accessibility</li>
        <li>Travel for visiting researchers to access and study our specimens</li>
        <li>Upgrades to microscopy, cryogenic storage or other critical pieces of equipment</li>
        <li>Endowments supporting the key curatorial and informatic staff positions that advance TUBRI's mission</li>
      </ul>

      <h2>How to Support the Institute</h2>
      <p>Donations to TUBRI should use <a href="https://securelb.imodules.com/s/1586/Giving/index.aspx?sid=1586&amp;gid=2&amp;pgid=457&amp;cid=1126&amp;appealcode=OGPD" target="_blank">Tulane's online giving portal</a>.</p>
      <p>To support the care, preservation, infrastructure, and operations of the Royal D. Suttkus fish collection, please type "Royal D. Suttkus Memorial Fund" in the box labeled "Other" near the bottom of the list of funds.</p>
      <p>To support our Biodiversity Informatics team as they advance digital infrastructure, data systems, software development, and research innovation, or to provide opportunities for students, interns, and trainees to participate in biodiversity science and collections-based research, please type "Tulane University Biodiversity Research Institute" in the box labeled "Other" near the bottom of the list of funds.</p>

      <h2>Planned and Institutional Giving</h2>
      <p>TUBRI welcomes conversations about larger gifts, institutional support, and other forms of philanthropic partnership that can contribute to our long-term growth and scientific mission.</p>

      <h2>Questions About Giving?</h2>
      <p>For questions about donations, partnerships, or ways to support TUBRI, please contact our Director, <a href="mailto:bsidlauskas@tulane.edu">Brian Sidlauskas</a>.</p>
    </section>
  </SectionPage>
</template>

<script setup>
import SectionPage from '@/components/layout/SectionPage.vue'
import { opportunitiesSidebar, heroImages } from '@/config/sidebars'

const page = {
  heroImage: heroImages.opportunities,
  heroTitle: 'Opportunities',
  pageTitle: 'Donating',
  sidebar: opportunitiesSidebar,
}
</script>