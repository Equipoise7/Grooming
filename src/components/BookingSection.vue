<template>
  <section class="booking-section section" id="booking">
    <div class="container">
      <h2 class="section-title">Онлайн запись</h2>
      <p class="booking-subtitle">Заполните форму и мы свяжемся с вами для подтверждения</p>
      
      <div class="booking-form-wrapper">
        <form @submit.prevent="handleSubmit" class="booking-form">
          <div class="form-row">
            <div class="form-group">
              <label for="name" class="form-label">
                <span class="label-icon">👤</span>
                Ваше имя
              </label>
              <input
                type="text"
                id="name"
                v-model="formData.name"
                class="form-input"
                placeholder="Введите ваше имя"
                required
              />
            </div>
            
            <div class="form-group">
              <label for="phone" class="form-label">
                <span class="label-icon">📞</span>
                Телефон
              </label>
              <input
                type="tel"
                id="phone"
                v-model="formData.phone"
                @input="formatPhone"
                class="form-input"
                placeholder="+7 (999) 123-45-67"
                maxlength="18"
                required
              />
            </div>
          </div>
          
          <div class="form-row">
            <div class="form-group">
              <label for="date" class="form-label">
                <span class="label-icon">📅</span>
                Дата записи
              </label>
              <input
                type="date"
                id="date"
                v-model="formData.date"
                class="form-input"
                required
              />
            </div>
            
            <div class="form-group">
              <label for="time" class="form-label">
                <span class="label-icon">⏰</span>
                Время
              </label>
              <input
                type="time"
                id="time"
                v-model="formData.time"
                class="form-input"
                required
              />
            </div>
          </div>
          
          <div class="form-group">
            <label for="service" class="form-label">
              <span class="label-icon">✂️</span>
              Выберите услугу
            </label>
            <select
              id="service"
              v-model="formData.service"
              class="form-input form-select"
              required
            >
              <option value="">Выберите услугу</option>
              <option value="complex">Комплексный груминг</option>
              <option value="hygiene">Гигиеническая стрижка</option>
              <option value="model">Модельная стрижка</option>
              <option value="spa">SPA-процедуры</option>
              <option value="deshedding">Экспресс-линька</option>
              <option value="nails">Уход за когтями и зубами</option>
            </select>
          </div>
          
          <div class="form-group">
            <label for="comment" class="form-label">
              <span class="label-icon">💭</span>
              Комментарий
            </label>
            <textarea
              id="comment"
              v-model="formData.comment"
              class="form-input form-textarea"
              placeholder="Расскажите о вашем питомце, особых пожеланиях..."
              rows="4"
            ></textarea>
          </div>
          
          <button type="submit" class="submit-btn">
            <span class="btn-text">Записаться</span>
            <span class="btn-icon">✨</span>
          </button>
          
          <p class="form-note">
            После отправки заявки мы свяжемся с вами для подтверждения записи
          </p>
        </form>
        
        <div class="booking-benefits">
          <div class="benefit-item">
            <div class="benefit-icon">⚡</div>
            <div class="benefit-text">
              <h3>Быстрая запись</h3>
              <p>Всего 2 минуты</p>
            </div>
          </div>
          
          <div class="benefit-item">
            <div class="benefit-icon">✅</div>
            <div class="benefit-text">
              <h3>Гарантия времени</h3>
              <p>Строго по записи</p>
            </div>
          </div>
          
          <div class="benefit-item">
            <div class="benefit-icon">🎁</div>
            <div class="benefit-text">
              <h3>Первый визит -15%</h3>
              <p>Специальное предложение</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  phone: '',
  date: '',
  time: '',
  service: '',
  comment: ''
})

const formatPhone = (event) => {
  let value = event.target.value.replace(/\D/g, '')
  
  // Если первая цифра не 7, добавляем 7
  if (value.length > 0 && value[0] !== '7') {
    value = '7' + value
  }
  
  // Ограничиваем до 11 цифр (7 + 10 цифр номера)
  if (value.length > 11) {
    value = value.slice(0, 11)
  }
  
  // Форматируем номер
  let formatted = '+7'
  
  if (value.length > 1) {
    formatted += ' (' + value.slice(1, 4)
  }
  if (value.length >= 5) {
    formatted += ') ' + value.slice(4, 7)
  }
  if (value.length >= 8) {
    formatted += '-' + value.slice(7, 9)
  }
  if (value.length >= 10) {
    formatted += '-' + value.slice(9, 11)
  }
  
  formData.value.phone = formatted
}

const handleSubmit = () => {
  // Здесь можно добавить отправку данных на сервер
  alert(`Спасибо за запись, ${formData.value.name}! Мы свяжемся с вами в ближайшее время.`)
  
  // Очистка формы
  formData.value = {
    name: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    comment: ''
  }
}
</script>

<style scoped>
.booking-section {
  background: linear-gradient(135deg, var(--bg-light) 0%, #fff9f0 100%);
}

.booking-subtitle {
  text-align: center;
  color: var(--text-light);
  font-size: 1.125rem;
  margin-bottom: 50px;
}

.booking-form-wrapper {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
}

.booking-form {
  background: var(--bg-white);
  padding: 40px;
  border-radius: 25px;
  box-shadow: var(--shadow-hover);
  animation: fadeInUp 0.8s ease-out;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  color: var(--text-dark);
  font-size: 1rem;
}

.label-icon {
  font-size: 1.25rem;
}

.form-input {
  padding: 15px 20px;
  border: 2px solid #f0f0f0;
  border-radius: 15px;
  font-size: 1rem;
  font-family: 'Montserrat', sans-serif;
  transition: all 0.3s ease;
  background: var(--bg-white);
}

.form-input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 4px rgba(255, 107, 157, 0.1);
  transform: translateY(-2px);
}

.form-select {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23ff6b9d' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 20px center;
  padding-right: 50px;
}

.form-textarea {
  resize: vertical;
  min-height: 100px;
  font-family: 'Montserrat', sans-serif;
}

.submit-btn {
  width: 100%;
  padding: 18px 40px;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1.25rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 30px rgba(255, 107, 157, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}

.submit-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(255, 107, 157, 0.4);
}

.submit-btn:active {
  transform: translateY(-1px);
}

.btn-icon {
  font-size: 1.5rem;
  animation: pulse 2s ease-in-out infinite;
}

.form-note {
  text-align: center;
  color: var(--text-light);
  font-size: 0.875rem;
  margin-top: 15px;
}

.booking-benefits {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.benefit-item {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 25px;
  background: var(--bg-white);
  border-radius: 20px;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
  animation: fadeInUp 0.8s ease-out;
}

.benefit-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
}

.benefit-icon {
  font-size: 3rem;
  line-height: 1;
  animation: float 3s ease-in-out infinite;
}

.benefit-item:nth-child(2) .benefit-icon {
  animation-delay: 0.5s;
}

.benefit-item:nth-child(3) .benefit-icon {
  animation-delay: 1s;
}

.benefit-text h3 {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 5px;
}

.benefit-text p {
  font-size: 0.9375rem;
  color: var(--text-light);
}

@media (min-width: 640px) {
  .form-row {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 768px) {
  .booking-form-wrapper {
    grid-template-columns: 2fr 1fr;
  }
  
  .booking-benefits {
    align-self: start;
    position: sticky;
    top: 100px;
  }
}

@media (max-width: 640px) {
  .booking-form {
    padding: 25px 20px;
  }
  
  .submit-btn {
    font-size: 1.125rem;
    padding: 16px 30px;
  }
  
  .benefit-item {
    padding: 20px;
  }
  
  .benefit-icon {
    font-size: 2.5rem;
  }
}
</style>
