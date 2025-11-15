<template>
  <section class="services-section section" id="services">
    <div class="container">
      <h2 class="section-title">Наши услуги</h2>
      
      <div class="services-grid">
        <div 
          v-for="(service, index) in services" 
          :key="index"
          class="service-card"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="service-image-wrapper">
            <img :src="service.image" :alt="service.title" class="service-image" />
            <div class="service-overlay">
              <span class="view-details">Подробнее</span>
            </div>
          </div>
          
          <div class="service-content">
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-description">{{ service.description }}</p>
            
            <div class="service-features">
              <span 
                v-for="(feature, idx) in service.features" 
                :key="idx"
                class="feature-tag"
              >
                {{ feature }}
              </span>
            </div>
            
            <div class="service-footer">
              <span class="service-price">{{ service.price }}</span>
              <span class="service-duration">{{ service.duration }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const services = ref([
  {
    title: 'Комплексный груминг',
    description: 'Полный спектр услуг: стрижка, мытье, сушка, обработка когтей и ушей',
    price: 'от 2500 ₽',
    duration: '2-3 часа',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop',
    features: ['Стрижка', 'Мытье', 'Сушка']
  },
  {
    title: 'Гигиеническая стрижка',
    description: 'Стрижка интимных зон, лап, морды. Поддержание гигиены вашего питомца',
    price: 'от 1200 ₽',
    duration: '1 час',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop',
    features: ['Быстро', 'Аккуратно']
  },
  {
    title: 'Модельная стрижка',
    description: 'Креативные и выставочные стрижки по породным стандартам',
    price: 'от 3500 ₽',
    duration: '3-4 часа',
    image: 'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=400&h=300&fit=crop',
    features: ['Выставки', 'Породная']
  },
  {
    title: 'SPA-процедуры',
    description: 'Уход за шерстью с использованием профессиональной косметики премиум-класса',
    price: 'от 1800 ₽',
    duration: '1.5 часа',
    image: 'https://images.unsplash.com/photo-1581888227599-779811939961?w=400&h=300&fit=crop',
    features: ['Увлажнение', 'Блеск']
  },
  {
    title: 'Экспресс-линька',
    description: 'Удаление отмершей шерсти, специальное вычесывание и уход',
    price: 'от 1500 ₽',
    duration: '1.5 часа',
    image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=400&h=300&fit=crop',
    features: ['Без шерсти', 'Чистота']
  },
  {
    title: 'Уход за когтями и зубами',
    description: 'Стрижка когтей, чистка зубов, уход за подушечками лап',
    price: 'от 800 ₽',
    duration: '30 мин',
    image: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?w=400&h=300&fit=crop',
    features: ['Здоровье', 'Гигиена']
  }
])

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up')
      }
    })
  }, { threshold: 0.1 })
  
  document.querySelectorAll('.service-card').forEach(card => {
    observer.observe(card)
  })
})
</script>

<style scoped>
.services-section {
  background: var(--bg-white);
}

.services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 25px;
  max-width: 1200px;
  margin: 0 auto;
}

.service-card {
  background: var(--bg-white);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
}

.service-card.fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-hover);
}

.service-image-wrapper {
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
}

.service-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.service-card:hover .service-image {
  transform: scale(1.1);
}

.service-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.6), transparent);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.service-card:hover .service-overlay {
  opacity: 1;
}

.view-details {
  color: white;
  font-weight: 600;
  font-size: 1rem;
}

.service-content {
  padding: 25px;
}

.service-title {
  font-size: 1.375rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 12px;
}

.service-description {
  font-size: 0.9375rem;
  color: var(--text-light);
  line-height: 1.6;
  margin-bottom: 15px;
}

.service-features {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.feature-tag {
  background: linear-gradient(135deg, rgba(255, 107, 157, 0.1), rgba(255, 165, 2, 0.1));
  color: var(--primary-color);
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.8125rem;
  font-weight: 500;
}

.service-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  border-top: 2px solid var(--bg-light);
}

.service-price {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
}

.service-duration {
  font-size: 0.875rem;
  color: var(--text-light);
  display: flex;
  align-items: center;
  gap: 5px;
}

.service-duration::before {
  content: '⏱';
  font-size: 1rem;
}

@media (min-width: 640px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
}

@media (min-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .service-image-wrapper {
    height: 250px;
  }
}

@media (max-width: 480px) {
  .service-content {
    padding: 20px;
  }
  
  .service-title {
    font-size: 1.25rem;
  }
  
  .service-price {
    font-size: 1.375rem;
  }
}
</style>
