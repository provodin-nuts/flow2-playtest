# Flow 1: Earn — Анализ

## Существующий код

- **Стек:** React 18 + Vite + Tailwind CSS 4 + `motion` (framer-motion 12.x) + shadcn/ui + Radix UI
- **Точка входа:** `src/app/App.tsx` → жёстко рендерит `Component01Feed`, нет роутинга
- **Навигация:** отсутствует (один экран)
- **Менеджер пакетов:** pnpm (есть `pnpm.overrides` в `package.json`)

### Ассеты — паттерн
```ts
const imgName = "https://www.figma.com/api/mcp/asset/UUID";
```
Все ассеты — const-переменные в самом начале файла (до компонентов).

### Компоненты в 01Feed.tsx

| Компонент | Строки | Описание |
|-----------|--------|----------|
| `CoinWidget` | 54–134 | Прогресс-ринг (conic-gradient #6eff46) 89×60, inner badge с DOPPY-монетой + балансом "10,0". Анимация ring 0→360° за 12с |
| `FeedSlide` | 136–303 | Один вертикальный слайд с видео, правый action-бар, donation chips |
| `StatusBar` | 306–336 | 24px высота, время "09:30 PM", правые иконки (bluetooth, wifi, signal, battery) |
| `TopNavbar` | 338–401 | LIVE + "For you/Discovery/Dating" + Search + [CoinWidget + WTF!?] |
| `TabBar` | 403–430 | 5 табов: Watch/Create/Earn/Market/Profile, `height: 78px` (`TAB_BAR_H = 78`), backdrop-blur |
| `Component01Feed` | 432–457 | Root: scroll-snap feed + фиксированный TopNavbar (pointer-events-none!) + фиксированный TabBar |

### Критично для навигации
`TopNavbar` рендерится с **`pointer-events-none`** (строка 446):
```tsx
<div className="absolute top-0 left-0 right-0 pointer-events-none" style={{ zIndex: 50 }}>
```
Это сделано чтобы скролл видео работал сквозь хедер. При добавлении клика на CoinWidget нужно добавить `pointer-events-auto` именно на виджет, не на весь wrapper.

### Основные цвета
- Фон: `#161616`, `#0d0d0d`, `#000`
- Акцент (зелёный): `#6eff46`
- TabBar bg: `rgba(22,22,22,0.75)`
- Overlay: `rgba(22,22,22,0.8)`

### Шрифты
- **Russo One** — заголовки, цифры, никнеймы (подключён в `index.html` через Google Fonts)
- **Montserrat Medium** (weight 500) — body text, лейблы
- **Roboto Regular** — StatusBar (время)

---

## Figma-дизайн

### Файл Figma
`Ba8jlZmjd5LT146gOU67gz` (PlayTests)

---

### Экран 1 — Feed с баннером "Начать зарабатывать" (node 216:7133)
- Тот же Feed что в коде, но **CoinWidget показывает зелёную пилюлю** "$ Начать зарабатывать" вместо ring+balance
- Это pre-earn состояние: пользователь ещё не начал зарабатывать
- **Переход:** тап на CoinWidget / зелёный баннер → Экран 2

---

### Экран 2 — UFO "Tap to open" (node 216:7290)
**Размер:** 360×780px, фрейм

**Элементы (сверху вниз):**
- StatusBar (те же иконки что в Feed, 24px)
- Большое пространство (чёрный фон #000)
- **UFO 3D-иллюстрация** — по центру экрана (~300px), радужное свечение, спиральный психоделический фон вокруг НЛО
- Под НЛО: **серая иконка тапа** (палец с двумя дугами) ~40×40px
- **"Tap to open"** — белый текст, по центру, ~16-18px, Montserrat или Russo One
- **AlienTabBar** внизу — другие иконки (см. ниже)

**AlienTabBar иконки (слева направо):**
1. Watch — глаз (зелёный neon, активный цвет)
2. Create — снежинка/мандала/старбёрст
3. Earn — морда инопланетянина (активный таб, белый индикатор)
4. Market — пальма или корзина с alien-стилем
5. Profile — ракушка/спираль

**Поведение:** тап в любое место экрана (кроме TabBar) → `onNavigate("swirl")`

---

### Экран 3 — Психоделический свирл (node 216:7299)
**Размер:** 360×780px

**Элементы:**
- **Полноэкранный психоделический свирл** — занимает ВСЁ, включая зону StatusBar
- Цвета свирла: фиолетовый (dominant), розовый, жёлтый, зелёный, радужный, 3D-глянцевый
- StatusBar сверху (поверх изображения, стандартные иконки)
- **AlienTabBar** внизу (тот же, что на экране 2)
- Никаких других UI-элементов

**Поведение:** тап в любое место ИЛИ авто-переход через 2.5с → `onNavigate("signup")`

---

### Экран 4 — Sign Up + DOPPY (node 216:7305)
**Размер:** 360×780px, чёрный фон

**Элементы (сверху вниз):**
- StatusBar (24px)
- **3D-иллюстрация:** радужные губы (Rolling Stones style) с монетой DOPPY (зелёная, символ D) на языке — верхняя треть экрана, по центру (~200-220px высота)
- `"Sign up and get up to"` — белый, по центру, Montserrat Medium, ~14-15px
- `"≈$3.294"` — белый, очень крупный (~40-48px), Russo One, жирный
- `"in DOPPY"` + маленькая иконка монеты D (inline, ~18px) — серый/белый, Montserrat
- Пустое пространство
- `"Watch the feed, get DOPPY, withdraw to card"` — серый (#999 ≈), по центру, Montserrat, ~12-13px
- `"Sign up to pick up your reward!"` — белый, жирный, Russo One, ~16px
- **Кнопка "SIGN UP"** — полная ширина (16px margin с боков), градиент слева→направо (белый/светлый → мятный/зелёный), текст "SIGN UP" чёрный bold, скруглённые углы ~24px, высота ~52-56px
- **AlienTabBar** внизу

**Поведение:** тап "SIGN UP" → `onNavigate("auth")`

---

### Экран 5 — Auth/Регистрация (node 218:7472)
**Размер:** 360×780px

**Элементы:**
- **Фоновое фото на весь экран:** молодые люди в Лос-Анджелесе + 3D-фигура серебристого инопланетянина, держащего знак `$`
- **Градиентное затемнение снизу:** прозрачный → чёрный, от ~середины вниз
- Нижняя треть:
  - `"Войди или зарегистрируйся, чтобы продолжить"` — белый, по центру, Montserrat Medium, ~16px
  - **3 кнопки авторизации** в ряд, горизонтально, равные отступы:
    - **Google** — белый фон, иконка G, подпись "Google" снизу (мелкий текст)
    - **Email** — тёмный фон (~#2a2a2a), иконка конверта, подпись "Email"
    - **WhatsApp** — зелёный фон (~#25D366), иконка WA, подпись "WhatsApp"
    - Размер кнопок: ~72×72px, скруглённые ~16px
  - **Чекбокс + правовой текст:**
    - Зелёная галочка (✓), предвыбран (checked)
    - "Я соглашаюсь с **пользовательским соглашением**, **условиями использования** и **Политикой конфиденциальности**"
    - Жирные/подчёркнутые части — это ссылки (href="#")
    - Montserrat Medium, ~12px, серый/светлый
- **НЕТ TabBar** на этом экране (подтверждено скриншотом)

**Поведение:** кнопки кликабельны (visual feedback), но без действий (прототип)

---

## Переходы между экранами

| Откуда | Куда | Триггер |
|--------|------|---------|
| Feed (screen 1) | UFO (screen 2) | Тап на CoinWidget / зелёный баннер "Начать зарабатывать" |
| UFO (screen 2) | Swirl (screen 3) | Тап в любое место (кроме TabBar) |
| Swirl (screen 3) | Signup (screen 4) | Тап OR авто через 2.5с |
| Signup (screen 4) | Auth (screen 5) | Тап "SIGN UP" |

**Анимация UFO → Swirl:** dissolve/crossfade из тёмного (#000) в яркий свирл, ~800-1000ms, motion `AnimatePresence` + `opacity` 0→1.

---

## Архитектурное решение

**Выбор: `useState` в App.tsx** ✓ (лучший вариант для clickable-прототипа)

```tsx
type Screen = "feed" | "ufo" | "swirl" | "signup" | "auth";

const [screen, setScreen] = useState<Screen>("feed");
const onNavigate = (s: Screen) => setScreen(s);
```

**Почему не React Router:**
- Избыточен для прототипа без URL-адресации
- useState проще и не требует Provider-обёртки
- Анимации с `motion.AnimatePresence` лучше контролируются через useState

**Структура файлов после выполнения:**
```
src/
├── app/App.tsx                          ← навигация (useState + AnimatePresence)
├── imports/
│   ├── 01Feed/01Feed.tsx                ← + prop onNavigate; pointer-events-auto на CoinWidget
│   ├── EarnUfo/EarnUfo.tsx              ← NEW: экран 2
│   ├── EarnSwirl/EarnSwirl.tsx          ← NEW: экран 3
│   ├── EarnSignup/EarnSignup.tsx        ← NEW: экран 4
│   ├── EarnAuth/EarnAuth.tsx            ← NEW: экран 5
│   └── shared/AlienTabBar.tsx           ← NEW: общий таб-бар для экранов 2-4
└── _flow1-analysis.md                   ← этот файл
```

**Анимации:**
- Переходы: `motion.AnimatePresence` + `motion.div` с `initial/animate/exit`
- По умолчанию: `opacity` fade (0→1 / 1→0), 400-600ms
- UFO → Swirl: более плавный crossfade ~800ms + лёгкий scale 0.98→1

---

## TODO для имплементации

- [ ] Промпт 1: `App.tsx` навигация + `EarnUfo` + onclick на CoinWidget (pointer-events-auto!)
- [ ] Промпт 2: `EarnSwirl` + анимация + `AlienTabBar` shared компонент
- [ ] Промпт 3: `EarnSignup` + кнопка SIGN UP с градиентом
- [ ] Промпт 4: `EarnAuth` + финальный прогон флоу
