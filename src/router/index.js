import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('@/views/HomeView.vue'), meta: { title: 'TUBRI — Tulane University Biodiversity Research Institute' } },
  { path: '/about', name: 'about', component: () => import('@/views/AboutView.vue'), meta: { title: 'About' } },
  { path: '/history', name: 'history', component: () => import('@/views/HistoryView.vue'), meta: { title: 'History' } },
  { path: '/facilities', name: 'facilities', component: () => import('@/views/FacilitiesView.vue'), meta: { title: 'Facilities' } },
  { path: '/collection', name: 'collection', component: () => import('@/views/CollectionView.vue'), meta: { title: 'Collection' } },
  { path: '/collection-policy', name: 'collection-policy', component: () => import('@/views/CollectionPolicyView.vue'), meta: { title: 'Loan Policy' } },
  { path: '/informatics', name: 'informatics', component: () => import('@/views/InformaticsView.vue'), meta: { title: 'Biodiversity Informatics' } },
  { path: '/informatics/research', name: 'informatics-research', component: () => import('@/views/InformaticsResearchView.vue'), meta: { title: 'Research Areas' } },
  { path: '/informatics/platforms', name: 'informatics-platforms', component: () => import('@/views/InformaticsPlatformsView.vue'), meta: { title: 'Data Systems & Platforms' } },
  { path: '/informatics/tools', name: 'informatics-tools', component: () => import('@/views/InformaticsToolsView.vue'), meta: { title: 'Tools & Software' } },
  { path: '/informatics/publications', name: 'informatics-publications', component: () => import('@/views/InformaticsPublicationsView.vue'), meta: { title: 'Publications' } },
  { path: '/people', name: 'people', component: () => import('@/views/PeopleView.vue'), meta: { title: 'People' } },
  { path: '/people/leadership', name: 'people-leadership', component: () => import('@/views/PeopleLeadershipView.vue'), meta: { title: 'Leadership' } },
  { path: '/people/staff', name: 'people-staff', component: () => import('@/views/PeopleStaffView.vue'), meta: { title: 'Staff' } },
  { path: '/opportunities/donating', name: 'opportunities-donating', component: () => import('@/views/OpportunitiesDonatingView.vue'), meta: { title: 'Donating' } },
  { path: '/opportunities/volunteering', name: 'opportunities-volunteering', component: () => import('@/views/OpportunitiesVolunteeringView.vue'), meta: { title: 'Volunteering' } },
  { path: '/opportunities/outreach', name: 'opportunities-outreach', component: () => import('@/views/OpportunitiesOutreachView.vue'), meta: { title: 'Outreach' } },
  { path: '/visit', name: 'visit', component: () => import('@/views/VisitView.vue'), meta: { title: 'Visit & Contact' } },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ el: to.hash, top: 96, behavior: 'smooth' })
        }, 300)
      })
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  },
  routes,
})

router.afterEach((to) => {
  document.title = to.meta.title || 'TUBRI — Tulane University Biodiversity Research Institute'
})

export default router
