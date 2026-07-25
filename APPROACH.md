# Development Approach

## Project Goal

The objective of this project was to build a modern AI-powered URL Shortener Dashboard that provides more than basic URL shortening by combining analytics, metadata generation, and a clean user interface.

The application was designed as a full-stack solution with a clear separation between the frontend, backend, business logic, and database.

---

# Planning

Before implementation, the project was divided into the following modules:

1. Frontend UI
2. Backend REST API
3. Database Design
4. URL Redirection
5. Analytics
6. AI Metadata Integration
7. Documentation

This modular approach allowed each feature to be implemented and tested independently.

---

# Backend Development

The backend was developed using Express.js with TypeScript.

The API was organised into separate layers:

- Routes
- Controllers
- Services
- Repositories
- Prisma ORM

This structure keeps responsibilities separated and improves maintainability.

---

# Database Design

PostgreSQL was selected because it provides reliable relational storage and integrates well with Prisma ORM.

Each URL record stores:

- Original URL
- Short Code
- AI Title
- AI Category
- AI Summary
- Click Count
- Created Time
- Updated Time

---

# Frontend Development

The frontend was built using React, TypeScript, Vite, and Tailwind CSS.

The interface focuses on simplicity and usability.

Key components include:

- URL Form
- Statistics Cards
- URL Table
- Navigation Bar
- Dashboard

Each component has a single responsibility, making the codebase easier to maintain.

---

# AI Integration

The application attempts to generate metadata for submitted URLs using Google Gemini.

Generated metadata includes:

- Website title
- Category
- Summary

To improve reliability, the system falls back to default metadata if AI generation is unavailable.

This ensures the application remains fully functional even when the external AI service cannot be reached.

---

# Analytics

The dashboard provides useful statistics including:

- Total URLs
- Total Clicks
- Average Clicks

Analytics are calculated dynamically from stored records.

---

# Code Quality

The project emphasises:

- Modular architecture
- Reusable components
- Type safety with TypeScript
- Clear folder structure
- RESTful API design
- Error handling
- Separation of concerns

---

# Testing

The application was manually tested for:

- Creating URLs
- Redirecting short URLs
- Updating records
- Deleting records
- Searching URLs
- Click tracking
- Dashboard statistics
- AI metadata fallback

---

# Challenges

Some challenges encountered during development included:

- Integrating the AI metadata service
- Designing a reusable API structure
- Managing frontend and backend communication
- Maintaining a clean project architecture

Each challenge was addressed through incremental development and testing.

---

# Future Enhancements

Potential improvements include:

- User authentication
- Custom aliases
- QR code generation
- URL expiration
- Docker deployment
- Role-based access control
- Advanced analytics
- Automated testing
- Cloud deployment

---

# Conclusion

The project demonstrates the implementation of a complete full-stack web application using modern technologies. The architecture was designed to be modular, maintainable, and extensible, allowing future features to be added with minimal changes.