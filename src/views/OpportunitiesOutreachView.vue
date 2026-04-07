<template>
  <SectionPage v-bind="page">
    <section class="article">
      <p>Although TUBRI's collection is not open to the general public, the institute is available for outreach and educational engagement. Rather than hosting public visits, we can bring specimens and collection-based learning to classrooms, STEM programs, festivals, and other community events.</p>

      <p>TUBRI has participated in outreach events such as the Louisiana STEM Expo and the Big Bass Rodeo Fishtival. Outreach activities can cover a range of topics, including natural history collections, regional fishes, and broader themes in ecology and conservation.</p>

      <p>Presentations and activities can also be adapted to fit the interests, age group, or current subject matter of a class, student group, or organization.</p>

      <h2>Topics May Include</h2>
      <ul>
        <li>natural history collections and how they support research</li>
        <li>regional fish diversity</li>
        <li>specimen-based science</li>
        <li>ecology and conservation</li>
        <li>biodiversity research and museum collections</li>
      </ul>

      <h2>Request an Outreach Visit</h2>
      <p>If your class, school, or organization is interested in having TUBRI participate in an event or visit your group, please contact:</p>
      <p><strong>Justin Mann</strong><br>Collection Manager<br><a href="mailto:jmann@tulane.edu">jmann@tulane.edu</a></p>
    </section>
  </SectionPage>
</template>

<script setup>
import SectionPage from '@/components/layout/SectionPage.vue'
import { opportunitiesSidebar, heroImages } from '@/config/sidebars'

const page = {
  heroImage: heroImages.opportunities,
  heroTitle: 'Opportunities',
  pageTitle: 'Outreach',
  sidebar: opportunitiesSidebar,
}
</script>