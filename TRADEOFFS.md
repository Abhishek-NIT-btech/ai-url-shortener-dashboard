# Engineering Trade-offs

## Overview

During the development of the AI-Powered URL Shortener Dashboard, several engineering decisions were made to balance simplicity, maintainability, and extensibility. This document explains the reasoning behind those choices.

---

# 1. Monolithic Architecture vs Microservices

### Chosen

Monolithic Architecture

### Reason

The application is relatively small and consists of closely related functionality.

Using a single backend service:

- reduces deployment complexity
- simplifies development
- avoids unnecessary infrastructure

### Future

The architecture can be split into independent services if the application grows.

---

# 2. PostgreSQL vs NoSQL

### Chosen

PostgreSQL

### Reason

The application stores structured relational data.

A relational database provides:

- strong consistency
- reliable indexing
- easy querying
- Prisma integration

NoSQL databases would become more useful only if handling large amounts of unstructured data.

---

# 3. Prisma ORM vs Raw SQL

### Chosen

Prisma ORM

### Reason

Prisma provides:

- Type safety
- Schema migrations
- Cleaner code
- Reduced SQL boilerplate

The trade-off is a small abstraction overhead compared with writing raw SQL.

---

# 4. REST API vs GraphQL

### Chosen

REST API

### Reason

The project performs straightforward CRUD operations.

REST offers:

- simplicity
- easy debugging
- predictable endpoints
- broad tooling support

GraphQL would add unnecessary complexity for this use case.

---

# 5. React Component Structure

### Chosen

Reusable Components

The frontend is divided into:

- Navbar
- URL Form
- Statistics Cards
- URL Table
- Dashboard

This improves readability, testing, and future scalability.

---

# 6. AI Metadata Generation

### Chosen

AI with Fallback

The application attempts to generate metadata using Google Gemini.

If AI generation fails:

- fallback values are stored
- URL creation still succeeds
- the user experience is preserved

This prioritises application reliability over optional AI functionality.

---

# 7. Click Analytics

### Chosen

Increment Click Count During Redirect

Each successful redirect increments the click counter immediately.

Benefits:

- simple implementation
- minimal database operations
- real-time statistics

---

# 8. Search Strategy

### Chosen

Client-side Search

Current dataset sizes are expected to be small.

Advantages:

- faster UI response
- simpler backend
- reduced API complexity

For larger datasets, server-side search and pagination would be more appropriate.

---

# 9. Styling

### Chosen

Tailwind CSS

Benefits include:

- rapid development
- consistent design
- utility-first workflow
- responsive layouts

---

# 10. Error Handling

The application uses structured error handling to:

- validate requests
- handle missing resources
- avoid application crashes
- return meaningful HTTP responses

---

# Future Improvements

Possible enhancements include:

- JWT authentication
- Role-based access control
- Rate limiting
- Docker support
- Unit and integration tests
- CI/CD pipeline
- Cloud deployment
- Monitoring and logging

---

# Conclusion

The chosen architecture prioritises simplicity, maintainability, and a clean developer experience while leaving room for future growth. For the scope of this project, these trade-offs provide a balanced solution between functionality and implementation complexity.