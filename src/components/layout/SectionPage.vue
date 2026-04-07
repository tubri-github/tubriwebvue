<template>
  <div class="page-hero" :style="heroStyle">
    <img :src="heroImage" alt="" :style="heroImgStyle">
    <div class="page-hero-ov"></div>
    <h1>{{ heroTitle }}</h1>
  </div>

  <div class="page-layout">
    <nav class="page-sidebar">
      <router-link
        v-for="link in sidebar"
        :key="link.to"
        :to="link.to"
      >{{ link.label }}</router-link>
    </nav>
    <div class="page-content">
      <section class="page-top"><h1>{{ pageTitle }}</h1></section>
      <slot />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  heroImage: { type: String, required: true },
  heroTitle: { type: String, required: true },
  pageTitle: { type: String, required: true },
  sidebar: { type: Array, required: true },
  heroPosition: { type: String, default: '' },
  heroOpacity: { type: Number, default: 0 },
})

const heroStyle = computed(() => props.heroPosition ? {} : {})
const heroImgStyle = computed(() => {
  const s = {}
  if (props.heroPosition) s.objectPosition = props.heroPosition
  if (props.heroOpacity) s.opacity = props.heroOpacity
  return s
})
</script>