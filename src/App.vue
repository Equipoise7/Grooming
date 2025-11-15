<template>
  <div id="app">
    <PreloaderComponent />
    <HeaderNav />
    <main>
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <BookingSection />
      <ContactsSection />
    </main>
    <FooterSection />
  </div>
</template>

<script setup>
import PreloaderComponent from './components/PreloaderComponent.vue'
import HeaderNav from './components/HeaderNav.vue'
import HeroSection from './components/HeroSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import GallerySection from './components/GallerySection.vue'
import BookingSection from './components/BookingSection.vue'
import ContactsSection from './components/ContactsSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<style>
/* Глобальные стили уже в style.css */
</style>

```