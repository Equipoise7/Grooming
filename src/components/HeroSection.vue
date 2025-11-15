<template>
  <div class="hero-section" id="hero">
    <div class="animated-bg">
      <div class="bg-shape shape-1"></div>
      <div class="bg-shape shape-2"></div>
      <div class="bg-shape shape-3"></div>
      <div class="bg-shape shape-4"></div>
    </div>
    
    <div class="hero-content">
      <div class="hero-image-wrapper">
        <div class="image-decoration"></div>
        <img 
          src="../images/user.jpg"
          alt="Мастер грумер"
          class="hero-image"
        />
      </div>
      
      <div class="hero-text">
        <h1 class="hero-title">
          <span class="gradient-text">Натали Кисиева</span>
        </h1>
        <p class="hero-subtitle">Профессиональный грумер</p>
        
        <div class="experience-badge">
          <div class="badge-icon">⭐</div>
          <div class="badge-text">
            <span class="badge-number">Большой опыт</span>
          </div>
        </div>
        
        <p class="hero-description">
          Превращаю каждую встречу с вашим питомцем в комфортную процедуру красоты. 
          Индивидуальный подход, профессиональная косметика и любовь к животным.
        </p>
        
        <div class="hero-stats">
          <div class="stat-item">
            <div class="stat-number" data-target="500">0</div>
            <div class="stat-label">Довольных клиентов</div>
          </div>
          <div class="stat-item">
            <div class="stat-number" data-target="15">0</div>
            <div class="stat-label">Видов услуг</div>
          </div>
          <div class="stat-item">
            <div class="stat-number" data-target="100">0</div>
            <div class="stat-label">Удовлетворенность</div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="scroll-indicator">
      <span>Листайте вниз</span>
      <div class="scroll-arrow">↓</div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const animateCounter = (element, target, suffix = '') => {
  const duration = 2000 // 2 секунды
  const steps = 60
  const increment = target / steps
  let current = 0
  
  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      element.textContent = target + suffix
      clearInterval(timer)
    } else {
      element.textContent = Math.floor(current) + suffix
    }
  }, duration / steps)
}

onMounted(() => {
  const heroSection = document.querySelector('.hero-section')
  heroSection.classList.add('fade-in')
  
  // Анимация счетчиков с задержкой
  setTimeout(() => {
    const statNumbers = document.querySelectorAll('.stat-number')
    animateCounter(statNumbers[0], 500, '+')
    animateCounter(statNumbers[1], 15, '+')
    animateCounter(statNumbers[2], 100, '%')
  }, 500)
})
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 20px 60px;
  background: linear-gradient(135deg, #fff5f7 0%, #ffe8f0 100%);
  position: relative;
  overflow: hidden;
}

/* Анимированный фон */
.animated-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
}

.bg-shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.3;
  animation: float-shape 20s infinite ease-in-out;
}

.shape-1 {
  width: 500px;
  height: 500px;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  top: -15%;
  left: -10%;
  animation-duration: 25s;
}

.shape-2 {
  width: 450px;
  height: 450px;
  background: linear-gradient(135deg, var(--accent-color), var(--secondary-color));
  bottom: -15%;
  right: -10%;
  animation-duration: 30s;
  animation-delay: 2s;
}

.shape-3 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, var(--primary-color), #ffa502);
  top: 25%;
  right: 5%;
  animation-duration: 22s;
  animation-delay: 4s;
}

.shape-4 {
  width: 350px;
  height: 350px;
  background: linear-gradient(135deg, var(--secondary-color), var(--primary-color));
  bottom: 15%;
  left: 10%;
  animation-duration: 28s;
  animation-delay: 1s;
}

@keyframes float-shape {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(40px, -40px) scale(1.15);
  }
  66% {
    transform: translate(-30px, 30px) scale(0.85);
  }
}

.hero-section::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -10%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(255, 107, 157, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
  z-index: 0;
}

.hero-content {
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  z-index: 1;
  position: relative;
}

.hero-image-wrapper {
  position: relative;
  animation: fadeInUp 1s ease-out;
}

.image-decoration {
  position: absolute;
  top: -15px;
  left: -15px;
  right: 15px;
  bottom: 15px;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  border-radius: 30px;
  z-index: -1;
}

.hero-image {
  width: 280px;
  height: 280px;
  border-radius: 30px;
  object-fit: cover;
  box-shadow: var(--shadow-hover);
  border: 5px solid var(--bg-white);
}

.hero-text {
  text-align: center;
  animation: fadeInUp 1s ease-out 0.2s backwards;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 10px;
  line-height: 1.2;
}

.gradient-text {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--text-light);
  margin-bottom: 25px;
  font-weight: 500;
}

.experience-badge {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: var(--bg-white);
  padding: 15px 25px;
  border-radius: 50px;
  box-shadow: var(--shadow);
  margin-bottom: 25px;
  animation: pulse 2s ease-in-out infinite;
}

.badge-icon {
  font-size: 2rem;
}

.badge-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.badge-number {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary-color);
  line-height: 1.2;
}

.badge-label {
  font-size: 0.875rem;
  color: var(--text-light);
}

.hero-description {
  font-size: 1rem;
  line-height: 1.8;
  color: var(--text-dark);
  max-width: 500px;
  margin: 0 auto 30px;
}

.hero-stats {
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-color);
  line-height: 1;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 0.875rem;
  color: var(--text-light);
}

.scroll-indicator {
  position: absolute;
  bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  font-size: 0.875rem;
  font-weight: 600;
  animation: fadeIn 1s ease-out 1s backwards;
  z-index: 1;
}

.scroll-indicator span {
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.scroll-arrow {
  font-size: 1.5rem;
  color: var(--accent-color);
  animation: float 2s ease-in-out infinite;
}

/* Оптимизация для мобильных */
@media (max-width: 768px) {
  .bg-shape {
    filter: blur(60px);
    opacity: 0.25;
  }
  
  .shape-3, .shape-4 {
    display: none;
  }
  
  .shape-1, .shape-2 {
    width: 400px;
    height: 400px;
  }
}

@media (min-width: 768px) {
  .hero-content {
    flex-direction: row;
    gap: 60px;
  }
  
  .hero-text {
    text-align: left;
    flex: 1;
  }
  
  .hero-title {
    font-size: 3rem;
  }
  
  .hero-subtitle {
    font-size: 1.5rem;
  }
  
  .hero-description {
    font-size: 1.125rem;
    margin: 0 0 30px 0;
  }
  
  .hero-stats {
    justify-content: flex-start;
  }
  
  .experience-badge {
    margin-bottom: 30px;
  }
  
  .hero-image {
    width: 350px;
    height: 350px;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 120px 20px 60px;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1.125rem;
  }
  
  .hero-image {
    width: 240px;
    height: 240px;
  }
  
  .stat-number {
    font-size: 1.75rem;
  }
  
  .hero-content {
    margin-bottom: 60px;
  }
  
  .scroll-indicator {
    bottom: 10px;
  }
}
</style>
