# 🚀 AI-Powered URL Shortener Dashboard

A full-stack AI-powered URL Shortener Dashboard built using **React, TypeScript, Express.js, Prisma ORM, and PostgreSQL**.

This application allows users to shorten URLs, manage them through an intuitive dashboard, track click analytics, and organise links using AI-generated metadata such as titles, categories, and summaries.

---

# 📌 Features

- 🔗 Shorten long URLs
- 📊 Dashboard with analytics
- 📈 Click tracking
- 🔍 Search URLs
- ✏️ Edit existing URLs
- 🗑 Delete URLs
- 📋 Copy shortened URLs
- 🤖 AI Metadata Generation
- ⚡ REST API
- 💾 PostgreSQL Database
- 🎨 Modern Responsive UI

---

# 🛠 Tech Stack

## Frontend

- React
- TypeScript
- Vite
- Tailwind CSS

## Backend

- Node.js
- Express.js
- Prisma ORM
- PostgreSQL

## AI

- Google Gemini API (with fallback metadata support)

---

# 📂 Project Structure

```
ai-url-shortener-dashboard
│
├── backend
│   ├── prisma
│   ├── src
│   │   ├── controllers
│   │   ├── repositories
│   │   ├── routes
│   │   ├── services
│   │   ├── ai
│   │   ├── lib
│   │   └── server.ts
│   └── package.json
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── App.tsx
│   │   └── main.tsx
│   └── package.json
│
└── README.md
```

---

# ✨ Features Overview

## URL Shortening

Create short URLs for long website links.

---

## Dashboard

View every shortened URL in a single dashboard.

---

## Analytics

Track

- Total URLs
- Total Clicks
- Average Clicks

---

## AI Metadata

Each URL stores

- Title
- Category
- Summary

If AI metadata generation is unavailable, fallback metadata is stored.

---

## Search

Search by

- Original URL
- Short Code
- Title
- Category

---

## CRUD Operations

- Create
- Read
- Update
- Delete

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/Abhishek-NIT-btech/ai-url-shortener-dashboard.git
```

---

## Backend

```bash
cd backend
npm install
```

Configure your environment variables in `.env`.

Example:

```env
DATABASE_URL=your_postgresql_database_url
PORT=3001
GEMINI_API_KEY=your_gemini_api_key
```

Run database migrations:

```bash
npx prisma migrate deploy
```

Start the backend:

```bash
npm run dev
```

---

## Frontend

```bash
cd frontend
npm install
npm run dev
```

Open

```
http://localhost:5173
```

---

# 📡 API Endpoints

## Create URL

```
POST /api/urls
```

---

## Get All URLs

```
GET /api/urls
```

---

## Update URL

```
PUT /api/urls/:id
```

---

## Delete URL

```
DELETE /api/urls/:id
```

---

## Redirect

```
GET /:shortCode
```

---

# 📊 Dashboard

The dashboard displays

- Total URLs
- Total Clicks
- Average Clicks
- AI Metadata
- Click Analytics
- Search Results

---

# 🧠 AI Integration

The application supports AI-generated metadata using Google Gemini.

Generated information includes

- Website Title
- Website Category
- Short Summary

Fallback metadata is used when AI generation is unavailable.

---

# 🚀 Future Improvements

- User Authentication
- Custom Short URLs
- QR Code Generation
- URL Expiration
- User Accounts
- Advanced Analytics
- Export Reports
- Dark Mode
- Rate Limiting
- Deployment with Docker

---

# 👨‍💻 Author

**Abhishek Reddy Karri**

GitHub

https://github.com/Abhishek-NIT-btech

---

# 📄 License

This project is developed for educational and assessment purposes.
