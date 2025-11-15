# 🚀 Деплой сайта в интернет

## Бесплатные варианты хостинга

### 1. Vercel (Рекомендуется) ⭐

**Преимущества:**
- ✅ Бесплатно
- ✅ Автоматическое обновление
- ✅ Быстрый CDN
- ✅ SSL сертификат

**Шаги:**

1. Зарегистрируйтесь на [vercel.com](https://vercel.com)

2. Установите Vercel CLI:
```bash
npm install -g vercel
```

3. Деплой:
```bash
cd /Users/equipoise/Grooming
vercel
```

4. Следуйте инструкциям в терминале

**Ваш сайт будет доступен по адресу:** `your-project.vercel.app`

---

### 2. Netlify

**Преимущества:**
- ✅ Бесплатно
- ✅ Простой drag-and-drop
- ✅ Автоматические обновления через Git

**Шаги:**

1. Соберите проект:
```bash
npm run build
```

2. Зарегистрируйтесь на [netlify.com](https://netlify.com)

3. Перетащите папку `dist` на сайт Netlify

**Или через CLI:**
```bash
npm install -g netlify-cli
netlify deploy
```

---

### 3. GitHub Pages

**Преимущества:**
- ✅ Бесплатно
- ✅ Интеграция с GitHub

**Шаги:**

1. Создайте репозиторий на GitHub

2. Добавьте в `vite.config.js`:
```javascript
export default defineConfig({
  plugins: [vue()],
  base: '/название-репозитория/',
  // ...
})
```

3. Установите gh-pages:
```bash
npm install --save-dev gh-pages
```

4. Добавьте в `package.json`:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

5. Деплой:
```bash
npm run deploy
```

---

### 4. Cloudflare Pages

**Преимущества:**
- ✅ Бесплатно
- ✅ Супер быстрый CDN
- ✅ Unlimited bandwidth

**Шаги:**

1. Зарегистрируйтесь на [pages.cloudflare.com](https://pages.cloudflare.com)

2. Подключите GitHub репозиторий

3. Настройки сборки:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`

---

## 📝 Чеклист перед деплоем

### ✅ Обязательно проверьте:

- [ ] Заменены все placeholder данные
- [ ] Изменены номера телефонов
- [ ] Настроены ссылки на WhatsApp и Telegram
- [ ] Загружены реальные фотографии
- [ ] Проверена работа всех ссылок
- [ ] Изменен title в `index.html`
- [ ] Добавлен favicon (иконка сайта)

### 📱 Тестирование:

- [ ] Открывается на мобильном телефоне
- [ ] Все кнопки работают
- [ ] Телефон открывает звонок
- [ ] WhatsApp открывает чат
- [ ] Telegram открывается корректно
- [ ] Слайдер работает плавно
- [ ] Все изображения загружаются

---

## 🔧 Настройка домена

### Купить домен можно на:
- [reg.ru](https://reg.ru) - русский регистратор
- [namecheap.com](https://namecheap.com) - международный
- [timeweb.com](https://timeweb.com) - русский с хостингом

### После покупки домена:

**Для Vercel:**
1. Откройте проект на vercel.com
2. Settings → Domains
3. Добавьте свой домен
4. Следуйте инструкциям по настройке DNS

**Для Netlify:**
1. Site settings → Domain management
2. Add custom domain
3. Настройте DNS записи

---

## 🎯 SEO оптимизация

### Базовая настройка

1. **Откройте `index.html`** и измените:

```html
<title>Груминг салон в Москве | Ваше имя</title>
<meta name="description" content="Профессиональный груминг собак в Москве. Стрижка, уход, SPA процедуры. Опыт 8+ лет. Запись по телефону +7 (999) 123-45-67">
<meta name="keywords" content="груминг, стрижка собак, груминг москва, стрижка собак москва">

<!-- Open Graph для соцсетей -->
<meta property="og:title" content="Груминг салон - Ваше имя">
<meta property="og:description" content="Профессиональный груминг собак">
<meta property="og:image" content="URL_вашего_фото">
<meta property="og:url" content="URL_вашего_сайта">
```

2. **Добавьте favicon:**

Создайте иконку 32x32px и добавьте в `public/favicon.ico`

```html
<link rel="icon" type="image/x-icon" href="/favicon.ico">
```

### Продвинутая настройка:

1. **Google Search Console:**
   - Подтвердите владение сайтом
   - Отправьте sitemap

2. **Яндекс Вебмастер:**
   - Добавьте сайт
   - Настройте индексацию

3. **Google Analytics:**
   - Создайте аккаунт
   - Добавьте код отслеживания в `index.html`

---

## 📊 Аналитика (опционально)

### Google Analytics

Добавьте в `index.html` перед `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Яндекс Метрика

Добавьте в `index.html` перед `</body>`:

```html
<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(XXXXXXXX, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true
   });
</script>
```

---

## 🆘 Частые проблемы

### Проблема: Сайт не открывается после деплоя

**Решение:**
- Проверьте build команду
- Убедитесь, что `dist` папка создалась
- Проверьте настройки выходной папки

### Проблема: Изображения не загружаются

**Решение:**
- Используйте абсолютные URL для изображений
- Проверьте доступность ссылок на изображения
- Загрузите изображения на CDN (Cloudinary, Imgur)

### Проблема: Белый экран после деплоя

**Решение:**
- Проверьте консоль браузера (F12)
- Убедитесь, что `base` в `vite.config.js` настроен правильно
- Пересоберите проект: `npm run build`

---

## 💡 Советы

1. **Оптимизируйте изображения** перед загрузкой (используйте TinyPNG)
2. **Проверяйте скорость** на [PageSpeed Insights](https://pagespeed.web.dev/)
3. **Тестируйте на разных устройствах**
4. **Регулярно обновляйте контент**
5. **Собирайте отзывы** от клиентов

---

## 📱 Продвижение

### Где разместить ссылку:

- ✅ Instagram bio
- ✅ VK группа
- ✅ WhatsApp Business статус
- ✅ Telegram bio
- ✅ Google My Business
- ✅ Яндекс Справочник
- ✅ 2GIS
- ✅ Avito услуги

### QR-код:

Создайте QR-код с ссылкой на сайт:
- [qr-code-generator.com](https://www.qr-code-generator.com/)

Разместите в салоне, визитках, флаерах.

---

**Успехов! 🚀**

Ваш сайт готов покорять интернет!
