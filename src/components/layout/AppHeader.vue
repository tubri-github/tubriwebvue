<template>
  <header>
    <router-link to="/" class="logo">
      <img src="/img/tubri_logo2.jpg" alt="TUBRI">
      <div class="logo-text">Tulane University<br>Biodiversity Research Institute</div>
    </router-link>

    <button class="hamburger" :class="{ open: menuOpen }" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>

    <nav :class="{ open: menuOpen }">
      <div class="nav-dropdown" v-for="item in navItems" :key="item.label">
        <router-link :to="item.to" @click="menuOpen = false">{{ item.label }}</router-link>
        <div class="nav-dropdown-menu">
          <router-link
            v-for="sub in item.children"
            :key="sub.to"
            :to="sub.to"
            @click="menuOpen = false"
          >{{ sub.label }}</router-link>
        </div>
      </div>
      <router-link to="/visit" class="nav-cta" @click="menuOpen = false">Visit &amp; Contact</router-link>
    </nav>

    <div class="nav-overlay" v-if="menuOpen" @click="menuOpen = false"></div>
  </header>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const menuOpen = ref(false)
const route = useRoute()

watch(() => route.path, () => { menuOpen.value = false })

const navItems = [
  {
    label: 'About', to: '/about',
    children: [
      { to: '/about', label: 'Mission & Vision' },
      { to: '/history', label: 'History' },
      { to: '/facilities', label: 'Facilities' },
    ]
  },
  {
    label: 'Collection', to: '/collection',
    children: [
      { to: '/collection', label: 'Fish Collection' },
      { to: '/collection-policy', label: 'Loan Policy' },
    ]
  },
  {
    label: 'Biodiversity Informatics', to: '/informatics',
    children: [
      { to: '/informatics/research', label: 'Research Areas' },
      { to: '/informatics/platforms', label: 'Data Systems & Platforms' },
      { to: '/informatics/tools', label: 'Tools & Software' },
      { to: '/informatics/publications', label: 'Publications' },
    ]
  },
  {
    label: 'People', to: '/people',
    children: [
      { to: '/people/leadership', label: 'Leadership' },
      { to: '/people/staff', label: 'Staff' },
    ]
  },
  {
    label: 'Opportunities', to: '/opportunities/donating',
    children: [
      { to: '/opportunities/donating', label: 'Donating' },
      { to: '/opportunities/volunteering', label: 'Volunteering' },
      { to: '/opportunities/outreach', label: 'Outreach' },
    ]
  },
]
</script>

<style scoped>
.hamburger {
  display: none;
  background: none; border: none; cursor: pointer;
  width: 32px; height: 24px;
  position: relative; z-index: 1100;
  flex-direction: column; justify-content: space-between;
}
.hamburger span {
  display: block; width: 100%; height: 2px;
  background: #fff; transition: all 0.3s ease;
  border-radius: 1px;
}
.hamburger.open span:nth-child(1) { transform: translateY(11px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-11px) rotate(-45deg); }

.nav-overlay { display: none; }

@media (max-width: 1024px) {
  .hamburger { display: flex; }

  header :deep(nav) {
    position: fixed;
    top: 0; right: 0;
    width: 320px; height: 100vh;
    background: #1a2a23;
    flex-direction: column;
    align-items: stretch;
    padding: 96px 0 32px;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    overflow-y: auto;
    z-index: 1050;
    gap: 0;
  }
  header nav {
    position: fixed;
    top: 0; right: 0;
    width: 320px; height: 100vh;
    background: #1a2a23;
    flex-direction: column;
    align-items: stretch;
    padding: 96px 0 32px;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    overflow-y: auto;
    z-index: 1050;
    gap: 0;
  }
  header nav.open {
    transform: translateX(0);
  }

  header nav > .nav-dropdown,
  header nav > a {
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }

  header nav > .nav-dropdown > a,
  header nav > a {
    display: block;
    padding: 16px 24px;
    font-size: 16px;
  }

  .nav-overlay {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.5);
    z-index: 1040;
  }
}

@media (max-width: 1024px) {
  .nav-dropdown-menu {
    position: static !important;
    opacity: 1 !important;
    pointer-events: all !important;
    transform: none !important;
    background: rgba(0,0,0,0.15) !important;
    min-width: auto !important;
    padding: 0 !important;
  }
  .nav-dropdown-menu a {
    padding: 12px 24px 12px 40px !important;
    font-size: 14px !important;
  }
  .nav-dropdown > a::after {
    display: none;
  }
  .nav-cta {
    margin: 16px 24px !important;
    text-align: center;
    display: block !important;
  }
}
</style>
