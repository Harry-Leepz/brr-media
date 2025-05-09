# BRR Media Team Dashboard

A lightweight internal dashboard for managing IT tickets, staff, tasks, and requests. Built with React, TypeScript, and Tailwind CSS.

---

## 🛠 Setup Instructions

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the development server:**

   ```bash
   npm run dev
   ```

3. **Run tests:**

   ```bash
   npm run test
   ```

Make sure you're using Node.js version 18+ and have `npm` installed.

---

## ✅ Summary of Features Completed

- [x] Responsive navigation bar with routing via React Router
- [x] Dashboard page with:
  - Summary cards (team members, open tickets, pending tasks)
  - Recent tickets and tasks lists
- [x] Staff Directory with mock data displayed in styled cards
- [x] IT Request Form with file upload and simulated submission
- [x] Tickets page with dynamic cards from JSON
- [x] To-Do List page with full CRUD (Create, Read, Update, Delete) functionality
- [x] Reusable components: `StaffCard`, `TicketCard`, `TodoItem`, `DashboardCard`, etc.
- [x] Mock data loaded asynchronously to simulate API calls
- [x] Unit/component tests using Vitest and Testing Library

---

## 🧠 Assumptions Made

- The project is run locally in a controlled internal environment (no real API or backend).
- All user roles have equal access; no auth/authz system implemented.
- File uploads are not processed, just simulated for submission.
- Mock data is used to simulate tickets, staff, and to-do lists.
- Style and layout choices prioritize clarity over branding.

---

## 🚀 If I Had More Time

- Persist to-dos and requests using localStorage or a mock backend
- Add full user authentication and role-based access (e.g., Admin vs. Staff)
- Improve form validation and error handling
- Add animations and loading indicators (e.g., skeleton loaders)
- Polish responsive design for mobile views
- Create a theme toggle (dark/light mode)
- Export reports (e.g., open tickets summary)
- Add E2E tests (e.g., with Playwright or Cypress)

---
