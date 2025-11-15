<template>
  <section class="contacts-section section" id="contacts">
    <div class="container">
      <h2 class="section-title">Свяжитесь со мной</h2>
      <p class="contacts-subtitle">Запишитесь на процедуру прямо сейчас</p>
      
      <div class="contacts-content">
        <div class="contact-info">
          <div class="info-item">
            <div class="info-icon">📍</div>
            <div class="info-text">
              <h3>Адрес</h3>
              <p>Владикавказ, ул. Примерная, д. 123</p>
            </div>
          </div>
          
          <div class="info-item">
            <div class="info-icon">⏰</div>
            <div class="info-text">
              <h3>Режим работы</h3>
              <p>Пн-Вс: 9:00 - 21:00</p>
            </div>
          </div>
          
          <div class="info-item">
            <div class="info-icon">📞</div>
            <div class="info-text">
              <h3>Телефон</h3>
              <a href="tel:+79991234567" class="contact-link">+7 (999) 123-45-67</a>
            </div>
          </div>
        </div>
        
        <div class="contact-buttons">
          <a 
            href="tel:+79991234567" 
            class="contact-btn phone-btn"
          >
            <svg viewBox="0 0 24 24" class="btn-icon">
              <path fill="currentColor" d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
            </svg>
            <span>Позвонить</span>
          </a>
          
          <a 
            href="https://wa.me/79991234567" 
            target="_blank"
            class="contact-btn whatsapp-btn"
          >
            <svg viewBox="0 0 24 24" class="btn-icon">
              <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span>WhatsApp</span>
          </a>
          
          <a 
            href="https://t.me/username" 
            target="_blank"
            class="contact-btn telegram-btn"
          >
            <svg viewBox="0 0 24 24" class="btn-icon">
              <path fill="currentColor" d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            <span>Telegram</span>
          </a>
        </div>
      </div>
      
      <div class="cta-box">
        <h3 class="cta-title">Первое посещение со скидкой 15%! 🎉</h3>
        <p class="cta-text">Запишитесь сейчас и получите специальное предложение для новых клиентов</p>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.contacts-section {
  background: var(--bg-white);
}

.contacts-subtitle {
  text-align: center;
  color: var(--text-light);
  font-size: 1.125rem;
  margin-bottom: 50px;
}

.contacts-content {
  max-width: 900px;
  margin: 0 auto 50px;
}

.contact-info {
  display: grid;
  grid-template-columns: 1fr;
  gap: 25px;
  margin-bottom: 40px;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 25px;
  background: var(--bg-light);
  border-radius: 20px;
  transition: all 0.3s ease;
}

.info-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow);
}

.info-icon {
  font-size: 2.5rem;
  line-height: 1;
}

.info-text h3 {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 8px;
}

.info-text p {
  font-size: 1rem;
  color: var(--text-light);
  line-height: 1.5;
}

.contact-link {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: var(--secondary-color);
}

.contact-buttons {
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  max-width: 500px;
  margin: 0 auto;
}

.contact-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 18px 30px;
  border-radius: 50px;
  font-size: 1.125rem;
  font-weight: 600;
  text-decoration: none;
  color: white;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--shadow);
}

.contact-btn:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-hover);
}

.contact-btn:active {
  transform: translateY(-1px);
}

.btn-icon {
  width: 24px;
  height: 24px;
}

.whatsapp-btn {
  background: linear-gradient(135deg, #25D366, #128C7E);
}

.whatsapp-btn:hover {
  background: linear-gradient(135deg, #128C7E, #075E54);
}

.telegram-btn {
  background: linear-gradient(135deg, #0088cc, #0077b5);
}

.telegram-btn:hover {
  background: linear-gradient(135deg, #0077b5, #006699);
}

.phone-btn {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
}

.phone-btn:hover {
  background: linear-gradient(135deg, var(--secondary-color), var(--primary-color));
}

.cta-box {
  max-width: 700px;
  margin: 0 auto;
  padding: 40px 30px;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  border-radius: 25px;
  text-align: center;
  color: white;
  box-shadow: var(--shadow-hover);
  animation: pulse 3s ease-in-out infinite;
}

.cta-title {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 15px;
}

.cta-text {
  font-size: 1.125rem;
  line-height: 1.6;
  opacity: 0.95;
}

@media (min-width: 640px) {
  .contact-info {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .info-item:last-child {
    grid-column: 1 / -1;
    max-width: 50%;
    margin: 0 auto;
  }
  
  .contact-buttons {
    grid-template-columns: repeat(3, 1fr);
    max-width: 100%;
  }
}

@media (min-width: 768px) {
  .contact-info {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .info-item:last-child {
    grid-column: auto;
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .info-item {
    padding: 20px;
    gap: 15px;
  }
  
  .info-icon {
    font-size: 2rem;
  }
  
  .info-text h3 {
    font-size: 1rem;
  }
  
  .info-text p {
    font-size: 0.9375rem;
  }
  
  .contact-btn {
    padding: 16px 25px;
    font-size: 1rem;
  }
  
  .cta-box {
    padding: 30px 20px;
  }
  
  .cta-title {
    font-size: 1.5rem;
  }
  
  .cta-text {
    font-size: 1rem;
  }
}
</style>
