<template>
  <transition name="fade" @after-leave="onAfterLeave">
    <div v-if="loading" class="preloader">
      <div class="preloader-content">
        <div class="loader-wrapper">
          <div class="paw-loader">
            <div class="paw paw-1">🐾</div>
            <div class="paw paw-2">🐾</div>
            <div class="paw paw-3">🐾</div>
            <div class="paw paw-4">🐾</div>
          </div>
          <div class="spinner"></div>
        </div>
        <h2 class="preloader-title">
          <span class="logo-icon">🐕</span>
          <span class="gradient-text">Grooming Vladikavkaz</span>
          <span class="logo-flag">🤍❤️💛</span>
        </h2>
        <p class="preloader-text">Загрузка...</p>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const loading = ref(true)

// Блокируем скролл при загрузке
onMounted(() => {
  document.body.style.overflow = 'hidden'
  
  // Минимальное время показа прелоадера - 1.5 секунды
  setTimeout(() => {
    loading.value = false
  }, 1500)
})

// Разблокируем скролл после исчезновения прелоадера
const onAfterLeave = () => {
  document.body.style.overflow = ''
}

// На всякий случай разблокируем при размонтировании
onBeforeUnmount(() => {
  document.body.style.overflow = ''
})
</script>

<style scoped>
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #fff5f7 0%, #ffe8f0 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  overflow: hidden;
}

.preloader-content {
  text-align: center;
  animation: fadeInUp 0.6s ease-out;
}

.loader-wrapper {
  position: relative;
  width: 150px;
  height: 150px;
  margin: 0 auto 30px;
}

.spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 120px;
  border: 4px solid transparent;
  border-top-color: var(--primary-color);
  border-right-color: var(--accent-color);
  border-radius: 50%;
  animation: spin 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
}

.spinner::before {
  content: '';
  position: absolute;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  border: 3px solid transparent;
  border-top-color: var(--secondary-color);
  border-left-color: var(--accent-color);
  border-radius: 50%;
  animation: spin 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite reverse;
}

.paw-loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
}

.paw {
  position: absolute;
  font-size: 2rem;
  opacity: 0;
  animation: pawAnimation 2s ease-in-out infinite;
}

.paw-1 {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  animation-delay: 0s;
}

.paw-2 {
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  animation-delay: 0.5s;
}

.paw-3 {
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  animation-delay: 1s;
}

.paw-4 {
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  animation-delay: 1.5s;
}

@keyframes spin {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes pawAnimation {
  0%, 100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.5);
  }
  50% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}

.preloader-title {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  animation: breathe 2s ease-in-out infinite;
}

.logo-icon {
  font-size: 2rem;
  animation: breathe-icon 3s ease-in-out infinite;
}

.logo-flag {
  font-size: 1.4rem;
  display: inline-flex;
  gap: 2px;
}

.gradient-text {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.preloader-text {
  font-size: 1rem;
  color: var(--text-light);
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes breathe {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

@keyframes breathe-icon {
  0%, 100% {
    transform: scale(1) rotate(0deg);
  }
  50% {
    transform: scale(1.15) rotate(5deg);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-enter-active {
  transition: opacity 0.3s ease;
}

.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 640px) {
  .preloader-title {
    font-size: 1.1rem;
    gap: 6px;
  }
  
  .logo-icon {
    font-size: 1.3rem;
  }
  
  .logo-flag {
    font-size: 0.85rem;
  }
  
  .loader-wrapper {
    width: 120px;
    height: 120px;
  }
  
  .spinner {
    width: 100px;
    height: 100px;
  }
}
</style>
