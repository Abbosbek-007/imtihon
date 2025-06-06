Abbosbek Zokirov


# 🚀 Imtihon-4 RESTful API

Bu loyiha **Express.js** yordamida yozilgan backend API bo‘lib, foydalanuvchilar, adminlar, transport vositalari, ruxsatlar va filiallarni boshqarish uchun mo‘ljallangan. Loyiha **JWT token asosida autentifikatsiya**, **role-based authorization**, **Joi validatsiya** va **modular arxitektura** asosida qurilgan.

### 🌐 Bosh sahifa (API URL):
> `https://imtihon-4.onrender.com`

---

## 📁 API Endpointlar

### 🔐 Auth (Register va Login)
| Method | URL              | Kirish | Tavsif          |
|--------|------------------|--------|------------------|
| POST   | `/api/register`  | ❌     | Yangi foydalanuvchi qo‘shish |
| POST   | `/api/login`     | ❌     | Tizimga kirish (JWT olish) |

---

### 👤 Users
| Method | URL                    | Role                | Tavsif               |
|--------|------------------------|---------------------|----------------------|
| POST   | `/api/add/user`        | super_admin, admin  | Foydalanuvchi qo‘shish |
| GET    | `/api/all/info/:id`    | super_admin, admin  | ID bo‘yicha foydalanuvchi haqida ma’lumot |
| PUT    | `/api/change/user/:id` | super_admin, admin  | Foydalanuvchini tahrirlash |
| DELETE | `/api/delete/user/:id` | super_admin, admin  | Foydalanuvchini o‘chirish |

---

### 🚗 Transport
| Method | URL                               | Role                | Tavsif |
|--------|-----------------------------------|---------------------|--------|
| GET    | `/api/transport/branch/:branch_id`| super_admin, admin  | Filial bo‘yicha transportlar |
| GET    | `/api/transport/model/:model`     | super_admin, admin  | Model bo‘yicha transportlar |
| POST   | `/api/add/transport`              | super_admin, admin  | Transport qo‘shish |
| PUT    | `/api/change/transport/:id`       | super_admin, admin  | Transportni o‘zgartirish |
| DELETE | `/api/delete/transport/:id`       | super_admin, admin  | Transportni o‘chirish |

---

### 🧾 Permission
| Method | URL                         | Role                | Tavsif |
|--------|-----------------------------|---------------------|--------|
| POST   | `/api/add/permission`       | super_admin, admin  | Ruxsat qo‘shish |
| PUT    | `/api/change/permission/:id`| super_admin, admin  | Ruxsatni o‘zgartirish |
| DELETE | `/api/delete/permision/:id` | super_admin, admin  | Ruxsatni o‘chirish |
| GET    | `/api/all/permission`       | super_admin, admin  | Barcha ruxsatlar |
| GET    | `/api/own/permission/:id`   | super_admin, admin  | Foydalanuvchining ruxsatlari |

---

### 🛠️ Admin Permission
| Method | URL                              | Role         | Tavsif |
|--------|----------------------------------|--------------|--------|
| POST   | `/api/add/admin/permission`      | super_admin  | Admin permission qo‘shish |
| PUT    | `/api/change/admin/permission/:id`| super_admin | Admin permissionni tahrirlash |
| DELETE | `/api/delete/admin/permission/:id`| super_admin | Admin permissionni o‘chirish |
| GET    | `/api/get/admin/permission`      | super_admin  | Barcha admin permissionlar |

---

### 🏢 Branch (Filial)
| Method | URL                              | Role                | Tavsif |
|--------|----------------------------------|---------------------|--------|
| POST   | `/api/add/branch`                | super_admin, admin  | Filial qo‘shish |
| PUT    | `/api/change/branch/:id`         | super_admin, admin  | Filialni o‘zgartirish |
| DELETE | `/api/delete/branch/:id`         | super_admin, admin  | Filialni o‘chirish |
| GET    | `/api/all/branch`                | super_admin, admin  | Barcha filiallar |
| GET    | `/api/get/statistica/branch/:id`| super_admin, admin  | Filial statistikasi |

---

### 🧑‍💼 Admin
| Method | URL                    | Role         | Tavsif |
|--------|------------------------|--------------|--------|
| POST   | `/api/add/admin`       | super_admin  | Yangi admin qo‘shish |
| GET    | `/api/role/admin`      | super_admin  | Admin rollari |
| GET    | `/api/username/admin`  | super_admin  | Admin usernamelari |
| GET    | `/api/info/admin`      | super_admin  | Admin haqida info |
| DELETE | `/api/delete/admin/:id`| super_admin  | Adminni o‘chirish |

---

## 🔑 Autentifikatsiya
- **JWT Token**: Har bir so‘rov `Authorization` header orqali yuboriladi:
```
Authorization: Bearer <your_token>
```

## ✅ Validatsiya
- Barcha `POST` va `PUT` so‘rovlarda `Joi` yordamida ma’lumotlar validatsiya qilinadi.

---

## 🧱 Texnologiyalar
- Node.js (Express)
- JWT (jsonwebtoken)
- Joi (validatsiya)
- PostgreSQL
- Modular MVC architecture

---

## ⚠️ Eslatma
- Token yaroqsiz yoki yo‘q bo‘lsa `401 Unauthorized` qaytariladi.
- Yetarli ruxsat bo‘lmasa `406 Not Acceptable` xatosi qaytariladi.

---

## 📬 Muallif
> Ushbu loyiha Najot Ta’lim imtihoni uchun ishlab chiqilgan.
