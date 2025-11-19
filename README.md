# Inventory Management System (Node.js + Express + MySQL)

## Prereqs
- Node.js (v16+)
- MySQL server
- Optional: nodemon for dev

## Setup

1. Clone/copy project and `cd backend`
2. Install dependencies:
   npm install

3. Create `.env` (copy `.env.example`) and set DB credentials + JWT_SECRET.

4. Create DB + tables + seed:
   - from MySQL client: run `backend/seed.sql`
   OR
   - run: mysql -u root -p < backend/seed.sql

5. Start server:
   npm run dev
   (or `npm start`)

6. Serve frontend:
   - You can open `frontend/index.html` directly in browser OR serve with a static server.
   - By default server expects API at http://localhost:4000/api

## Demo credentials
- username: `admin`
- password: `admin123`

## Notes
- This is a demo app. For production, enforce HTTPS, stronger secrets, CSRF protections, input validation, and rate limiting.
