# Doctor Booking

Web application for booking medical consultations with roles: patient/doctor/admin. Supports creating appointments, managing bookings, payment integration, and dashboards for doctors and administrators.

---

## Contents
- [Overview](#overview)
- [Features](#features)
- [Requirements](#requirements)
- [Environment Variables (.env)](#environment-variables-env)
- [Running](#running)
- [API: Main Endpoints](#api-main-endpoints)
- [Database and Notes](#database-and-notes)
- [Screenshots](#screenshots)

---

## Overview
Doctor Booking implements the MERN stack (MongoDB, Express, React, Node.js). The system allows patients to create bookings, doctors to manage their consultations, and administrators to control the whole process.

## Features
- Patient and doctor registration/login (JWT or sessions).  
- CRUD endpoints for appointments and bookings.  
- User roles: Patient, Doctor, Admin.  
- Admin panel to manage bookings (confirm, cancel, complete) and create profiles for new doctors.  
- Doctor panel to manage consultations.  
- Payment integration for consultations (Razorpay).  

## Requirements
- Node.js >=16  
- npm   
- MongoDB 

## Environment Variables (.env)
Example `server/.env`:
```
VITE_BACKEND_URL=
VITE_RAZORPAY_KEY_ID=
VITE_RAZORPAY_KEY_SECRET=
PORT=5000
MONGO_DB_URI=
MONGODB_DB_NAME=
CLOUDINARY_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
ADMIN_EMAIL=
ADMIN_PASSWORD=
JWT_SECRET=
```

## Running

1. Install dependencies:
```bash
# server
cd server
npm install

# client
cd client
npm install
```
2. Configure `.env` in `server/`.
3. Run services:
```bash
# server
cd server
npm run dev

# client
cd client
npm run dev
```

## API: Main Endpoints

### Auth / Users
- `POST /api/user/register` ‒ register user (patient).  
- `POST /api/user/login` ‒ user login, returns JWT.  
- `GET /api/user/get-profile` ‒ get user profile (Bearer token).  
- `POST /api/user/update-profile` ‒ update profile (Bearer token, can include avatar).  

### Appointments / User Appointments
- `POST /api/user/book-appointment` ‒ book appointment (Bearer token).  
- `GET /api/user/appointments` ‒ list user appointments.  
- `POST /api/user/cancel-appointment` ‒ cancel appointment.  
- `POST /api/user/payment-razorpay` ‒ initiate payment.  
- `POST /api/user/verifyRazorpay` ‒ confirm payment.

### Doctor
- `GET /api/doctor/list` ‒ list of doctors.  
- `POST /api/doctor/login` ‒ doctor login, returns JWT.  
- `GET /api/doctor/appointments` ‒ list of doctor appointments (Bearer token).  
- `POST /api/doctor/appointment-complete` ‒ mark appointment as completed.  
- `POST /api/doctor/appointment-cancel` ‒ cancel appointment.  
- `GET /api/doctor/dashboard` ‒ doctor dashboard.

### Admin
- `POST /api/admin/add-doctor` ‒ add doctor (with image, Bearer token).  
- `POST /api/admin/login` ‒ admin login.  
- `POST /api/admin/all-doctors` ‒ get list of all doctors.  
- `POST /api/admin/change-availability` ‒ change doctor availability.  
- `GET /api/admin/appointments` ‒ list of all appointments.  
- `POST /api/admin/cancel-appointment` ‒ cancel any appointment.  
- `GET /api/admin/dashboard` ‒ admin dashboard.

## Database and Notes
- Mongoose is used to interact with MongoDB: storing users, appointments, roles, and payments.
- Models: Users, DoctorsDB, Appointments.  

## Screenshots
<img width="1592" height="933" alt="screenshot" src="https://github.com/user-attachments/assets/6c50a727-8850-4759-8c20-61454335bfd8" />
<img width="1644" height="445" alt="screenshot" src="https://github.com/user-attachments/assets/cd4d8d0f-4534-4ca3-93f9-8000b6b12d25" />
<img width="1876" height="562" alt="screenshot" src="https://github.com/user-attachments/assets/c98cf3d2-83db-4486-ae4f-8a3aea920720" />
<img width="1602" height="704" alt="screenshot" src="https://github.com/user-attachments/assets/7ae3a4ab-469b-4f41-a853-8e1c62166294" />
<img width="1849" height="636" alt="screenshot" src="https://github.com/user-attachments/assets/45bc0cbc-cba9-42a0-90e5-616bc7b63f4c" />
<img width="1865" height="853" alt="screenshot" src="https://github.com/user-attachments/assets/989649f6-26df-4da3-8a4b-baf9cf2fcfcf" />
