# Doctor Booking

 Веб-додаток для бронювання медичних консультацій з ролями пацієнт/лікар/адмін. Підтримує створення зустрічей, керування бронюваннями, інтеграцію оплати та панелі управління для лікарів та адміністраторів.

---

## Зміст
- [Огляд](#огляд)
- [Функціонал](#функціонал)
- [Вимоги](#вимоги)
- [Змінні оточення (.env)](#змінні-оточення-env)
- [Запуск](#запуск)
- [API: основні ендпойнти](#api-основні-ендпойнти)
- [База даних та примітки](#база-даних-та-примітки)
- [Скріншоти](#скріншоти)


---

## Огляд
Проєкт Doctor Booking реалізує MERN-стек (MongoDB, Express, React, Node.js). Система дозволяє пацієнтам створювати бронювання, лікарям керувати своїми консультаціями, а адміністраторам контролювати весь процес.

## Функціонал
- Реєстрація/логін пацієнтів та лікарів (JWT або сесії).  
- CRUD-ендпойнти для зустрічей та бронювань.  
- Ролі користувачів: Пацієнт, Лікар, Адмін.  
- Панель адміністратора для контролю бронювань (підтвердження, скасування, завершення) та створенням профіля для нового доктора.  
- Панель лікаря для управління консультаціями.  
- Інтеграція оплати консультацій (Razorpay).  



## Вимоги
- Node.js >=16  
- npm   
- MongoDB 
  
## Змінні оточення (.env)
Приклад `server/.env`:
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

## Запуск

21. Встановити залежності:
```bash
# сервер
cd server
npm install

# клієнт
cd client
npm install
```
3. Налаштувати `.env` у `server/`.  
4. Запустити сервіси:
```bash
# сервер
cd server
npm run dev

# клієнт
cd client
npm run dev
```



## API: основні ендпойнти

### Auth / Користувачі
- `POST /api/user/register` ‒ реєстрація користувача (пацієнт).  
- `POST /api/user/login` ‒ логін користувача, повертає JWT.  
- `GET /api/user/get-profile` ‒ отримати профіль користувача (Bearer token).  
- `POST /api/user/update-profile` ‒ оновити профіль (Bearer token, можна з аватаркою).  

### Appointments / Зустрічі користувача
- `POST /api/user/book-appointment` ‒ забронювати зустріч (Bearer token).  
- `GET /api/user/appointments` ‒ список зустрічей користувача.  
- `POST /api/user/cancel-appointment` ‒ скасувати зустріч.  
- `POST /api/user/payment-razorpay` ‒ ініціювати оплату.  
- `POST /api/user/verifyRazorpay` ‒ підтвердити оплату.

### Doctor / Лікар
- `GET /api/doctor/list` ‒ список лікарів.  
- `POST /api/doctor/login` ‒ логін лікаря, повертає JWT.  
- `GET /api/doctor/appointments` ‒ список зустрічей лікаря (Bearer token).  
- `POST /api/doctor/appointment-complete` ‒ позначити зустріч як завершену.  
- `POST /api/doctor/appointment-cancel` ‒ скасувати зустріч.  
- `GET /api/doctor/dashboard` ‒ інформаційна панель лікаря.

### Admin / Адміністратор
- `POST /api/admin/add-doctor` ‒ додати лікаря (зображення, Bearer token).  
- `POST /api/admin/login` ‒ логін адміністратора.  
- `POST /api/admin/all-doctors` ‒ отримати список усіх лікарів.  
- `POST /api/admin/change-availability` ‒ змінити доступність лікаря.  
- `GET /api/admin/appointments` ‒ список усіх зустрічей.  
- `POST /api/admin/cancel-appointment` ‒ скасувати будь-яку зустріч.  
- `GET /api/admin/dashboard` ‒ інформаційна панель адміністратора.


## База даних та примітки
- Mongoose використовується для роботи з MongoDB: зберігання користувачів, зустрічей, ролей та оплати.
- Моделі: Users, DoctorsDB, Appointments.  

## Скріншоти

<img width="1592" height="933" alt="изображение" src="https://github.com/user-attachments/assets/6c50a727-8850-4759-8c20-61454335bfd8" />
<img width="1644" height="445" alt="изображение" src="https://github.com/user-attachments/assets/cd4d8d0f-4534-4ca3-93f9-8000b6b12d25" />
<img width="1876" height="562" alt="изображение" src="https://github.com/user-attachments/assets/c98cf3d2-83db-4486-ae4f-8a3aea920720" />
<img width="1602" height="704" alt="изображение" src="https://github.com/user-attachments/assets/7ae3a4ab-469b-4f41-a853-8e1c62166294" />
<img width="1849" height="636" alt="изображение" src="https://github.com/user-attachments/assets/45bc0cbc-cba9-42a0-90e5-616bc7b63f4c" />
<img width="1865" height="853" alt="изображение" src="https://github.com/user-attachments/assets/989649f6-26df-4da3-8a4b-baf9cf2fcfcf" />

