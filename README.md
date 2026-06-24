# Internal Ticketing App

A full-stack internal ticketing application built with Next.js, NestJS, and PostgreSQL. This application allows employees to create support tickets while Admin/IT Support can manage, track, and resolve them.

## Tech Stack

### Frontend

* Next.js 15 (App Router)
* TypeScript
* Tailwind CSS
* shadcn/ui
* React Hook Form
* Zod
* Axios

### Backend

* NestJS 11
* Prisma ORM
* PostgreSQL
* JWT Authentication
* bcrypt

---

## Features

### Authentication

* Login
* Logout
* JWT Authentication
* Role-Based Access Control

### Dashboard

#### Admin

* Total Tickets
* Open Tickets
* In Progress Tickets
* Done Tickets
* Rejected Tickets

#### User

* Total My Tickets
* Active Tickets
* Completed Tickets

### Ticket Management

* Create Ticket
* View Ticket List
* Search Ticket
* Filter by Status
* Filter by Category
* Pagination
* View Ticket Detail
* Attachment URL Support

### Comments

* Add Comment
* View Comment History

### Activity Log

* Track Status Changes
* Track User Activities

### UI Enhancements

* Responsive Layout
* Empty States
* Loading States
* Reusable Components

---

## Project Structure

internal-ticketing/

frontend/

backend/

The project is intentionally separated into frontend and backend applications without using Nx Monorepo.

---

## Demo Accounts

### Admin

Email: admin@example.com

Password: password

### User

Email: user@example.com

Password: password

---

## Backend Setup

### 1. Navigate to Backend

cd backend

### 2. Install Dependencies

npm install

### 3. Configure Environment Variables

Create .env file:

DATABASE_URL="postgresql://postgres:postgres@localhost:5432/internal_ticketing"

JWT_SECRET="your-secret-key"

### 4. Run Database Migration

npx prisma migrate dev

### 5. Run Seeder

npx prisma db seed

### 6. Start Backend Server

npm run start:dev

Backend runs on:

http://localhost:3001

---

## Frontend Setup

### 1. Navigate to Frontend

cd frontend

### 2. Install Dependencies

npm install

### 3. Configure Environment Variables

Create .env.local:

NEXT_PUBLIC_API_URL=http://localhost:3001

### 4. Start Frontend Server

npm run dev

Frontend runs on:

http://localhost:3000

---

## API Endpoints

### Authentication

POST /auth/login

GET /auth/me

### Dashboard

GET /dashboard/summary

### Tickets

GET /tickets

POST /tickets

GET /tickets/:id

PATCH /tickets/:id/status

### Comments

POST /tickets/:id/comments

---

## Database

Main tables:

* users
* tickets
* ticket_comments
* ticket_activities

---

## Screenshots

### Login Page
![Dashboard](<img width="959" height="473" alt="Screenshot 2026-06-24 152421" src="https://github.com/user-attachments/assets/85e686fe-7044-4e6b-9b1a-eee8d7d1f5fa" />)

### Dashboard

![Dashboard](<img width="959" height="472" alt="Screenshot 2026-06-24 151540" src="https://github.com/user-attachments/assets/fbc4c463-2a1f-46af-9c20-a75d4e628dc7" />)

### Ticket List

![Ticket List](<img width="959" height="467" alt="Screenshot 2026-06-24 153658" src="https://github.com/user-attachments/assets/bfd7f0ff-9cb7-440c-be6b-e0d04d776b02" />)

### Ticket Detail

![Ticket Detail 1](<img width="948" height="476" alt="Screenshot 2026-06-24 151554" src="https://github.com/user-attachments/assets/235a93f8-f44a-4036-8d55-2a20cac19b4d" />)
![Ticket Detail 2](<img width="950" height="472" alt="Screenshot 2026-06-24 151611" src="https://github.com/user-attachments/assets/361e2b41-9f95-4b17-a25f-31c9ed8ad8bd" />)

### Create Ticket

![Create Ticket](<img width="959" height="470" alt="Screenshot 2026-06-24 153738" src="https://github.com/user-attachments/assets/dfb211bd-5f91-487b-a51d-a1d9467f65f3" /><img width="959" height="467" alt="Screenshot 2026-06-24 153658" src="https://github.com/user-attachments/assets/d7ce7dc8-1bac-40dc-a52a-22c92d5795e1" />
)

---

## AI Usage

This project was developed with assistance from:

* ChatGPT
* Official Next.js Documentation
* Official NestJS Documentation
* Official Prisma Documentation

AI was used for:

* Architecture discussion
* Code review
* Refactoring suggestions
* README preparation
* UI implementation guidance

All implementation, debugging, testing, and integration were performed manually.

---

## Technical Notes

* Clean Architecture principles were applied in a simplified form.
* Backend business logic is separated from controllers.
* Frontend uses reusable UI components.
* Authentication is handled using JWT.
* Passwords are securely hashed using bcrypt.
* Role-based authorization is implemented for User and Admin roles.
* Activity logs are automatically generated when ticket actions occur.

---

## Future Improvements

* File Upload Support
* Export to Excel/PDF
* Docker Setup
* Swagger/OpenAPI Documentation
* Unit Testing
* Email Notifications

---

## Author
Muhammad Hamdan Hariri 

Technical Test Submission – Internal Ticketing App
