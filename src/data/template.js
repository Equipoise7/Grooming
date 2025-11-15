// 📋 Шаблон данных для быстрого заполнения
// Скопируйте этот файл и заполните своими данными

export const siteData = {
  // 👤 Информация о мастере
  master: {
    name: "Анна Иванова",
    position: "Профессиональный грумер",
    experience: "8+",
    experienceLabel: "лет опыта",
    photo: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=400&fit=crop",
    description: "Превращаю каждую встречу с вашим питомцем в комфортную процедуру красоты. Индивидуальный подход, профессиональная косметика и любовь к животным.",
    stats: {
      clients: "500+",
      clientsLabel: "Довольных клиентов",
      services: "15+",
      servicesLabel: "Видов услуг"
    }
  },

  // 📞 Контакты
  contacts: {
    phone: "+7 (999) 123-45-67",
    phoneRaw: "+79991234567", // Для ссылок (без пробелов и скобок)
    whatsapp: "79991234567", // Без + для WhatsApp
    telegram: "username",
    instagram: "username",
    address: "Москва, ул. Примерная, д. 123",
    workingHours: "Пн-Вс: 9:00 - 21:00"
  },

  // 💰 Услуги
  services: [
    {
      title: "Комплексный груминг",
      description: "Полный спектр услуг: стрижка, мытье, сушка, обработка когтей и ушей",
      price: "от 2500 ₽",
      duration: "2-3 часа",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop",
      features: ["Стрижка", "Мытье", "Сушка"]
    },
    {
      title: "Гигиеническая стрижка",
      description: "Стрижка интимных зон, лап, морды. Поддержание гигиены вашего питомца",
      price: "от 1200 ₽",
      duration: "1 час",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop",
      features: ["Быстро", "Аккуратно"]
    },
    {
      title: "Модельная стрижка",
      description: "Креативные и выставочные стрижки по породным стандартам",
      price: "от 3500 ₽",
      duration: "3-4 часа",
      image: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=400&h=300&fit=crop",
      features: ["Выставки", "Породная"]
    },
    {
      title: "SPA-процедуры",
      description: "Уход за шерстью с использованием профессиональной косметики премиум-класса",
      price: "от 1800 ₽",
      duration: "1.5 часа",
      image: "https://images.unsplash.com/photo-1581888227599-779811939961?w=400&h=300&fit=crop",
      features: ["Увлажнение", "Блеск"]
    },
    {
      title: "Экспресс-линька",
      description: "Удаление отмершей шерсти, специальное вычесывание и уход",
      price: "от 1500 ₽",
      duration: "1.5 часа",
      image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=400&h=300&fit=crop",
      features: ["Без шерсти", "Чистота"]
    },
    {
      title: "Уход за когтями и зубами",
      description: "Стрижка когтей, чистка зубов, уход за подушечками лап",
      price: "от 800 ₽",
      duration: "30 мин",
      image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=400&h=300&fit=crop",
      features: ["Здоровье", "Гигиена"]
    }
  ],

  // 🖼️ Галерея работ
  gallery: [
    {
      url: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&h=600&fit=crop",
      alt: "Йоркширский терьер",
      caption: "Йоркширский терьер - модельная стрижка"
    },
    {
      url: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&h=600&fit=crop",
      alt: "Пудель",
      caption: "Пудель - комплексный груминг"
    },
    {
      url: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=600&fit=crop",
      alt: "Шпиц",
      caption: "Шпиц - гигиеническая стрижка"
    },
    {
      url: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=800&h=600&fit=crop",
      alt: "Мальтийская болонка",
      caption: "Мальтийская болонка - SPA-уход"
    },
    {
      url: "https://images.unsplash.com/photo-1581888227599-779811939961?w=800&h=600&fit=crop",
      alt: "Золотистый ретривер",
      caption: "Золотистый ретривер - экспресс-линька"
    },
    {
      url: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=800&h=600&fit=crop",
      alt: "Бишон фризе",
      caption: "Бишон фризе - выставочная стрижка"
    }
  ],

  // 🎉 Акция
  promo: {
    title: "Первое посещение со скидкой 15%! 🎉",
    text: "Запишитесь сейчас и получите специальное предложение для новых клиентов"
  },

  // 🎨 Цветовая схема (опционально)
  colors: {
    primary: "#ff6b9d",
    secondary: "#c44569",
    accent: "#ffa502"
  }
}
