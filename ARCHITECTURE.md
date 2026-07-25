# 🏗️ System Architecture

## Overview

The AI-Powered URL Shortener Dashboard follows a layered full-stack architecture that separates presentation, business logic, data access, and persistence. This structure improves maintainability, scalability, and readability.

```
                   +-----------------------+
                   |     React Frontend    |
                   |  (Vite + TypeScript)  |
                   +-----------+-----------+
                               |
                               | HTTP / REST API
                               |
                   +-----------v-----------+
                   |    Express Backend    |
                   |   Controllers/Routes  |
                   +-----------+-----------+
                               |
                   Business Logic (Services)
                               |
                   +-----------v-----------+
                   |     Repositories      |
                   +-----------+-----------+
                               |
                         Prisma ORM
                               |
                   +-----------v-----------+
                   |     PostgreSQL DB     |
                   +-----------------------+

                      Optional AI Layer
                  Google Gemini Metadata API
```

---

# Frontend

The frontend is built using React, TypeScript, Vite, and Tailwind CSS.

Responsibilities include:

- Displaying the dashboard
- Creating short URLs
- Searching URLs
- Editing existing URLs
- Deleting URLs
- Copying short links
- Displaying analytics
- Showing AI-generated metadata

### Main folders

```
frontend/src/
│
├── components/
├── pages/
├── services/
├── App.tsx
└── main.tsx
```

---

# Backend

The backend is built using Express.js with TypeScript.

Responsibilities include:

- Request validation
- URL generation
- Click tracking
- CRUD operations
- Analytics
- AI metadata generation
- Database communication

### Main folders

```
backend/src/

controllers/
routes/
services/
repositories/
ai/
lib/
```

---

# Request Flow

When a user creates a shortened URL:

1. User submits a long URL.
2. Frontend sends a POST request.
3. Express receives the request.
4. Controller validates the request.
5. Service generates a unique short code.
6. AI metadata is generated (or fallback values are used).
7. Repository stores the record using Prisma.
8. PostgreSQL saves the data.
9. Response is returned to the frontend.
10. Dashboard refreshes automatically.

---

# Redirect Flow

1. User opens the short URL.
2. Backend searches for the short code.
3. Click count is incremented.
4. User is redirected to the original URL.

---

# Analytics Flow

Dashboard statistics are calculated from stored URLs:

- Total URLs
- Total Clicks
- Average Clicks

These values are recalculated whenever the dashboard data is refreshed.

---

# AI Metadata Layer

The application supports AI-assisted metadata generation.

For each submitted URL, the system attempts to generate:

- Website title
- Category
- Short summary

If the AI service is unavailable, fallback metadata is stored to ensure the application remains functional.

---

# Database

The application uses PostgreSQL with Prisma ORM.

Each URL record contains:

- Original URL
- Short Code
- Title
- Category
- Summary
- Click Count
- Created Timestamp
- Updated Timestamp

---

# Design Principles

The project follows several software engineering principles:

- Separation of Concerns
- Layered Architecture
- RESTful API Design
- Modular Components
- Reusable Services
- Repository Pattern
- Type Safety with TypeScript

---

# Scalability

The architecture can be extended with minimal changes by adding:

- User authentication
- Role-based access control
- Custom aliases
- QR code generation
- URL expiration
- Rate limiting
- Docker deployment
- Cloud storage
- Advanced analytics
- Monitoring and logging

---

# Conclusion

This layered architecture keeps the frontend, backend, and database independent while allowing new features to be added with minimal impact on existing code.