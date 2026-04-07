<template>
  <SectionPage v-bind="page">
    <section class="article">
      <p>Volunteers can play an important role in supporting TUBRI's work in collections stewardship, biodiversity research, and public engagement. Volunteers may assist with curatorial tasks, support digitization and data organization, contribute to outreach efforts, and gain opportunities to learn more about museum collections, biodiversity science, specimen-based research and long-term collection care.</p>

      <h2>Possible Volunteer Activities</h2>
      <p>Volunteer roles vary depending on current priorities and available supervision, but could include:</p>
      <ul>
        <li>collection organization</li>
        <li>cataloging</li>
        <li>specimen preparation</li>
        <li>digitization and data entry</li>
        <li>specimen photography</li>
        <li>public outreach events</li>
      </ul>

      <h2>How to Express Interest</h2>
      <p>TUBRI welcomes interest from individuals who are enthusiastic about biodiversity, museum collections, research support, and related areas. Individuals interested in volunteering should email collection manager <a href="mailto:jmann@tulane.edu">Justin Mann</a> a brief description of their interests, background, and availability.</p>
    </section>
  </SectionPage>
</template>

<script setup>
import SectionPage from '@/components/layout/SectionPage.vue'
import { opportunitiesSidebar, heroImages } from '@/config/sidebars'

const page = {
  heroImage: heroImages.opportunities,
  heroTitle: 'Opportunities',
  pageTitle: 'Volunteering',
  sidebar: opportunitiesSidebar,
}
</script>