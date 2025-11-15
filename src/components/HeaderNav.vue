<template>
  <header class="header" :class="{ scrolled: isScrolled }">
    <div class="header-content">
      <div class="logo">
        <span class="logo-icon">🐕</span>
        <span class="logo-text">Grooming Vladikavkaz</span>
        <span class="logo-flag">🤍❤️💛</span>
      </div>
      
      <button class="menu-toggle" @click="toggleMenu" :class="{ active: menuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <nav class="nav" :class="{ open: menuOpen }">
        <a href="#hero" class="nav-link" @click="closeMenu">Главная</a>
        <a href="#services" class="nav-link" @click="closeMenu">Услуги</a>
        <a href="#gallery" class="nav-link" @click="closeMenu">Работы</a>
        <a href="#contacts" class="nav-link" @click="closeMenu">Контакты</a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const menuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: transparent;
  transition: all 0.3s ease;
}

.header.scrolled {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-dark);
  text-decoration: none;
  z-index: 1001;
  animation: breathe 3s ease-in-out infinite;
}

@keyframes breathe {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.025);
  }
}

.logo-icon {
  font-size: 2.2rem;
  animation: breathe-icon 3s ease-in-out infinite;
}

@keyframes breathe-icon {
  0%, 100% {
    transform: scale(1) rotate(0deg);
  }
  50% {
    transform: scale(1.075) rotate(2.5deg);
  }
}

.logo-text {
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.logo-flag {
  font-size: 1.4rem;
  line-height: 1;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  z-index: 1001;
}

.menu-toggle span {
  width: 25px;
  height: 3px;
  background: var(--text-dark);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.menu-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(7px, 7px);
}

.menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.menu-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
}

.nav {
  display: flex;
  gap: 30px;
  align-items: center;
}

.nav-link {
  color: var(--text-dark);
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;
  padding: 5px 0;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link:hover {
  color: var(--primary-color);
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }
  
  .nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    max-width: 300px;
    height: 100vh;
    background: var(--bg-white);
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    box-shadow: -5px 0 20px rgba(0, 0, 0, 0.1);
    transition: right 0.3s ease;
  }
  
  .nav.open {
    right: 0;
  }
  
  .nav-link {
    font-size: 1.25rem;
  }
}

@media (max-width: 480px) {
  .header-content {
    padding: 15px;
  }
  
  .logo {
    font-size: 1.1rem;
    gap: 6px;
  }
  
  .logo-icon {
    font-size: 1.5rem;
  }
  
  .logo-flag {
    font-size: 0.9rem;
  }
  
  .nav-link {
    font-size: 1.125rem;
  }
}
</style>
