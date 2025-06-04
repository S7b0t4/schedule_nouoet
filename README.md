## ✅ Что нужно для запуска

### Установи Node.js и npm

1. Перейди на сайт: [https://nodejs.org/](https://nodejs.org/)
2. Скачай **LTS-версию** (рекомендуется).
3. Установи Node.js — вместе с ним установится и **npm**.
4. Убедись, что у тебя установлен Docker:
https://www.docker.com/products/docker-desktop

Проверь установку:

```bash
node -v
npm -v
```

---

## 📥 Как скачать проект

### Вариант 1 — через Git (рекомендуется)

Открой терминал и введи:

```bash
git clone https://github.com/S7b0t4/schedule_nouoet.git
cd schedule_nouoet
```

### Вариант 2 — если скачал ZIP-архив

1. Нажми на зелёную кнопку **Code** → **Download ZIP**
2. Распакуй архив в удобную папку
3. Переименуй папку (если нужно) в `schedule_nouoet`
4. Открой терминал в этой папке

---

## 📦 Установка зависимостей

### 1. Установи зависимости для бэкенда (NestJS):

```bash
cd backend
npm install
```

## ⚙️ Настройка переменных окружения

Перейди в папку `backend` и создай файл `.env` со следующим содержимым:

```env
PORT=5000

POSTGRES_PORT=5433
POSTGRES_USERNAME=postgres
POSTGRES_PASSWORD=root
POSTGRES_DB=schedule

ADMIN_URL=http://localhost:4000
CLIENT_URL=http://localhost:4001
```

### 🖥️ Запуск бэкенда (NestJS)

1. Открой терминал в папке `schedule_nouoet`:

```bash
docker compose up
```
ctrl + c 

```bash
docker start schedule_nouoet-db-1
```

2. Запусти сервер:

```bash
npm run start:dev
```

3. Бэкенд будет работать по адресу:
   👉 [http://localhost:5000](http://localhost:5000)
