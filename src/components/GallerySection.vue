<template>
  <section class="gallery-section section" id="gallery">
    <div class="container">
      <h2 class="section-title">Наши работы</h2>
      <p class="gallery-subtitle">Результаты, которыми мы гордимся</p>
      
      <div class="slider-container">
        <button 
          class="slider-btn slider-btn-prev" 
          @click="prevSlide"
          :disabled="currentSlide === 0"
        >
          ‹
        </button>
        
        <div class="slider-wrapper">
          <div 
            class="slider-track"
            :style="{ transform: `translateX(-${currentSlide * slideWidth}%)` }"
          >
            <div 
              v-for="(image, index) in images" 
              :key="index"
              class="slide"
            >
              <img :src="image.url" :alt="image.alt" class="slide-image" />
              <div class="slide-caption">{{ image.caption }}</div>
            </div>
          </div>
        </div>
        
        <button 
          class="slider-btn slider-btn-next" 
          @click="nextSlide"
          :disabled="currentSlide >= maxSlide"
        >
          ›
        </button>
      </div>
      
      <div class="slider-dots">
        <button 
          v-for="(_, index) in totalDots" 
          :key="index"
          class="dot"
          :class="{ active: index === currentSlide }"
          @click="goToSlide(index)"
        ></button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const currentSlide = ref(0)
const autoplayInterval = ref(null)

const images = ref([
  {
    url: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&h=600&fit=crop',
    alt: 'Йоркширский терьер',
    caption: 'Йоркширский терьер - модельная стрижка'
  },
  {
    url: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&h=600&fit=crop',
    alt: 'Пудель',
    caption: 'Пудель - комплексный груминг'
  },
  {
    url: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=600&fit=crop',
    alt: 'Шпиц',
    caption: 'Шпиц - гигиеническая стрижка'
  },
  {
    url: 'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=800&h=600&fit=crop',
    alt: 'Мальтийская болонка',
    caption: 'Мальтийская болонка - SPA-уход'
  },
  {
    url: 'https://images.unsplash.com/photo-1581888227599-779811939961?w=800&h=600&fit=crop',
    alt: 'Золотистый ретривер',
    caption: 'Золотистый ретривер - экспресс-линька'
  },
  {
    url: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=800&h=600&fit=crop',
    alt: 'Бишон фризе',
    caption: 'Бишон фризе - выставочная стрижка'
  }
])

const slideWidth = computed(() => {
  if (typeof window !== 'undefined') {
    if (window.innerWidth >= 1024) return 33.333
    if (window.innerWidth >= 640) return 50
  }
  return 100
})

const maxSlide = computed(() => {
  const slides = slideWidth.value === 100 ? 1 : slideWidth.value === 50 ? 2 : 3
  return images.value.length - slides
})

const totalDots = computed(() => maxSlide.value + 1)

const nextSlide = () => {
  if (currentSlide.value < maxSlide.value) {
    currentSlide.value++
  } else {
    currentSlide.value = 0
  }
}

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  } else {
    currentSlide.value = maxSlide.value
  }
}

const goToSlide = (index) => {
  currentSlide.value = index
}

const startAutoplay = () => {
  autoplayInterval.value = setInterval(() => {
    nextSlide()
  }, 5000)
}

const stopAutoplay = () => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value)
  }
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<style scoped>
.gallery-section {
  background: linear-gradient(to bottom, var(--bg-white), var(--bg-light));
}

.gallery-subtitle {
  text-align: center;
  color: var(--text-light);
  font-size: 1.125rem;
  margin-bottom: 40px;
}

.slider-container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 50px;
}

.slider-wrapper {
  overflow: hidden;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
}

.slider-track {
  display: flex;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide {
  min-width: 100%;
  position: relative;
}

.slide-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  display: block;
}

.slide-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  color: white;
  padding: 30px 20px 20px;
  font-size: 1.125rem;
  font-weight: 600;
}

.slider-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--bg-white);
  border: none;
  font-size: 2rem;
  color: var(--primary-color);
  cursor: pointer;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slider-btn:hover:not(:disabled) {
  background: var(--primary-color);
  color: white;
  transform: translateY(-50%) scale(1.1);
}

.slider-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.slider-btn-prev {
  left: 0;
}

.slider-btn-next {
  right: 0;
}

.slider-dots {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ddd;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.dot.active {
  background: var(--primary-color);
  transform: scale(1.3);
}

.dot:hover {
  background: var(--secondary-color);
}

@media (min-width: 640px) {
  .slider-track {
    gap: 0;
  }
  
  .slide {
    min-width: 50%;
    padding: 0 10px;
  }
  
  .slide-image {
    height: 350px;
    border-radius: 15px;
  }
}

@media (min-width: 1024px) {
  .slide {
    min-width: 33.333%;
  }
  
  .slide-image {
    height: 400px;
  }
}

@media (max-width: 640px) {
  .slider-container {
    padding: 0 40px;
  }
  
  .slider-btn {
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
  }
  
  .slide-image {
    height: 300px;
  }
  
  .slide-caption {
    font-size: 1rem;
    padding: 20px 15px 15px;
  }
}

@media (max-width: 480px) {
  .slider-container {
    padding: 0 35px;
  }
  
  .slide-image {
    height: 250px;
  }
}
</style>
