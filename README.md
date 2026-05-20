# 🍽️ Bite - AI-Assisted Nutrition Tracker

> A modern, intelligent nutrition tracking application built with the **MERN stack**. Track your meals, analyze nutrition data, and achieve your health goals with ease!

[![Node.js](https://img.shields.io/badge/Node.js-18+-green?logo=node.js)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-19+-blue?logo=react)](https://react.dev/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Latest-green?logo=mongodb)](https://www.mongodb.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

---

## 🎯 Overview

**Bite** is a comprehensive AI-assisted nutrition tracker that empowers users to monitor their dietary intake, track hydration, and view detailed analytics through an intuitive, modern dashboard. With smart barcode scanning, meal logging, and real-time sync capabilities, Bite makes nutrition tracking effortless and engaging.

---

## ✨ Key Features

<details open>
<summary><b>📋 Core Features</b></summary>

- ✅ **User Authentication** - Secure JWT-based authentication system
- ✅ **Smart Meal Logging** - Log meals with detailed nutrition info (calories, protein, carbs, fats, sugar, fiber)
- ✅ **Barcode Scanning** - Scan product barcodes or search by text using Nutritionix integration
- ✅ **Nutrition Lookup** - Smart barcode/text-based nutrition lookup with fallback support
- ✅ **Image Upload** - Cloudinary integration with Base64 fallback for meal photos
- ✅ **Water Tracking** - Daily hydration logging with sync support
- ✅ **Offline Support** - Local sync for meals and water logs (works without internet)
- ✅ **Analytics Dashboard** - Visual insights into nutrition patterns using Recharts

</details>

<details>
<summary><b>🛡️ Security & Admin Features</b></summary>

- 🔐 **Protected Routes** - JWT-secured endpoints for all user operations
- 👤 **User Profile Management** - Update personal nutrition goals and preferences
- 📊 **Admin Dashboard** - View all users, meals, and system statistics
- 🗑️ **Data Management** - Admin-only deletion and moderation tools
- 📈 **System Analytics** - Monitor platform usage and nutrition trends

</details>

<details>
<summary><b>🎨 UI/UX Features</b></summary>

- 🌗 **Theme Support** - Light and dark mode for comfortable viewing
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- ⚡ **Fast Performance** - Optimized with Vite for lightning-fast dev/build
- 🎯 **Intuitive Interface** - Clean, modern UI with Tailwind CSS

</details>

---

## 🏗️ Tech Stack

### Frontend 🎨
| Technology | Purpose |
|-----------|---------|
| **React 19** | Modern UI library with hooks |
| **Vite** | Lightning-fast build tool & dev server |
| **Tailwind CSS** | Utility-first CSS framework |
| **Redux Toolkit** | State management |
| **React Router** | Client-side navigation |
| **Recharts** | Beautiful data visualizations |
| **Lucide React** | Premium icon library |

### Backend ⚙️
| Technology | Purpose |
|-----------|---------|
| **Node.js** | JavaScript runtime |
| **Express.js** | Minimalist web framework |
| **MongoDB** | NoSQL database |
| **Mongoose** | MongoDB ODM |
| **JWT** | Authentication tokens |
| **Multer** | File upload middleware |
| **Cloudinary** | Cloud image hosting (optional) |

### External APIs 🔌
| API | Purpose |
|-----|---------|
| **Nutritionix** | Barcode & text nutrition lookup |
| **Cloudinary** | Image hosting & optimization |

---

## 📁 Project Structure

```
Bite/
├── client/                    # React Frontend Application
│   ├── public/               # Static assets
│   ├── src/
│   │   ├── components/       # Reusable React components
│   │   ├── pages/           # Page components
│   │   ├── store/           # Redux store & slices
│   │   ├── hooks/           # Custom React hooks
│   │   ├── utils/           # Utility functions
│   │   ├── App.jsx          # Root component
│   │   └── main.jsx         # Entry point
│   ├── index.html           # HTML template
│   ├── vite.config.js       # Vite configuration
│   ├── tailwind.config.js   # Tailwind CSS config
│   └── package.json         # Dependencies
│
├── server/                    # Express Backend API
│   ├── config/              # Configuration files
│   ├── controllers/         # Route controllers (business logic)
│   ├── middleware/          # Express middleware
│   ├── models/              # MongoDB Mongoose schemas
│   ├── routes/              # API route definitions
│   ├── app.js               # Express app setup
│   ├── server.js            # Server entry point
│   ├── .env.example         # Environment variables template
│   └── package.json         # Dependencies
│
└── README.md                # This file
```

---

## 🚀 Getting Started

### Prerequisites

<table>
<tr>
<td>

- **Node.js** 18.x or newer
- **npm** 9.x or newer
- **MongoDB** (local or Atlas)
- **Git** for version control

</td>
<td>

```bash
# Check your versions
node --version
npm --version
git --version
```

</td>
</tr>
</table>

### Installation

#### 1️⃣ Clone & Navigate
```bash
git clone https://github.com/yourusername/Bite.git
cd Bite
```

#### 2️⃣ Install Dependencies
```bash
# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

#### 3️⃣ Configure Environment Variables

**Server Setup** - Create `server/.env`:
```env
# Server Configuration
PORT=5001

# MongoDB Connection
MONGO_URI=mongodb://127.0.0.1:27017/bite_db
# Or use MongoDB Atlas:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/bite_db

# JWT Secret (use a strong, random string in production)
JWT_SECRET=your_super_secret_jwt_key_change_me_in_production

# ✅ OPTIONAL: Cloudinary Configuration (for image uploads)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# ✅ OPTIONAL: Nutritionix Configuration (for barcode scanning)
NUTRITIONIX_APP_ID=your_app_id
NUTRITIONIX_APP_KEY=your_app_key
```

**Client Setup** - Create `client/.env` (only if API is not on default):
```env
VITE_API_URL=http://localhost:5001/api
```

> 💡 **Tip**: Find `server/.env.example` for a template!

---

## ⚡ Running the Application

### Development Mode

#### Terminal 1 - Start Backend:
```bash
cd server
npm run dev
```
✅ Backend runs on `http://localhost:5001`

#### Terminal 2 - Start Frontend:
```bash
cd client
npm run dev
```
✅ Frontend runs on `http://localhost:5173`

### Access URLs
| Service | URL | Purpose |
|---------|-----|---------|
| Frontend | `http://localhost:5173` | React dashboard |
| Backend API | `http://localhost:5001/api` | REST API |
| Admin API | `http://localhost:5001/api/admin` | Admin endpoints |

---

## 📚 Available Scripts

### Frontend Scripts 🎨

```bash
cd client

# Start development server with hot reload
npm run dev

# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview

# Run ESLint to check code quality
npm run lint

# Fix ESLint issues automatically
npm run lint:fix
```

### Backend Scripts ⚙️

```bash
cd server

# Start development server with auto-reload (nodemon)
npm run dev

# Start production server
npm start

# View database stats
npm run stats
```

---

## 🔗 API Documentation

### Authentication Endpoints 🔐

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---|
| `POST` | `/api/auth/register` | Create new user account | ❌ No |
| `POST` | `/api/auth/login` | User login & get JWT token | ❌ No |
| `POST` | `/api/auth/logout` | Logout user | ✅ Yes |

### User Profile Endpoints 👤

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---|
| `GET` | `/api/profile` | Get current user profile | ✅ Yes |
| `PUT` | `/api/profile/update` | Update profile info | ✅ Yes |

### Meal Endpoints 🍽️

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---|
| `POST` | `/api/meals/add` | Log a new meal | ✅ Yes |
| `GET` | `/api/meals/today` | Get today's meals | ✅ Yes |
| `GET` | `/api/meals/history` | Get meal history (paginated) | ✅ Yes |
| `DELETE` | `/api/meals/:id` | Delete a meal | ✅ Yes |
| `POST` | `/api/meals/sync` | Sync offline meals | ✅ Yes |

### Water Tracking Endpoints 💧

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---|
| `POST` | `/api/water/add` | Log water intake | ✅ Yes |
| `GET` | `/api/water/today` | Get today's water logs | ✅ Yes |
| `POST` | `/api/water/sync` | Sync offline water logs | ✅ Yes |

### Barcode & Nutrition Endpoints 📦

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---|
| `POST` | `/api/barcode/scan` | Scan barcode for nutrition | ✅ Yes |
| `GET` | `/api/nutrition/search` | Search nutrition data | ✅ Yes |

### Admin Endpoints 🛡️

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---|
| `GET` | `/api/admin/users` | View all users (paginated) | ✅ Admin |
| `GET` | `/api/admin/meals` | View all meals (paginated) | ✅ Admin |
| `DELETE` | `/api/admin/meals/:id` | Delete any meal | ✅ Admin |
| `GET` | `/api/admin/stats` | System statistics | ✅ Admin |
| `PUT` | `/api/admin/users/:id/role` | Update user role | ✅ Admin |

### Authentication Header 🔑

All protected endpoints require:
```bash
Authorization: Bearer <your_jwt_token>
```

---

## 🔧 Configuration Guide

### MongoDB Setup

#### Option 1: Local MongoDB
```bash
# Windows
mongod

# macOS/Linux
brew services start mongodb-community
```

#### Option 2: MongoDB Atlas (Recommended for Production)
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a cluster
4. Get connection string
5. Add to `.env`: `MONGO_URI=mongodb+srv://...`

### Image Upload (Optional)

**Without Cloudinary**: Images are stored as Base64 (works locally, not recommended for production)

**With Cloudinary**:
1. Sign up at [Cloudinary](https://cloudinary.com/)
2. Get your credentials
3. Add to `server/.env`
4. Images are now hosted in the cloud ☁️

### Barcode Scanning (Optional)

**Without Nutritionix**: App has built-in nutrition fallback

**With Nutritionix**:
1. Register at [Nutritionix API](https://www.nutritionix.com/api)
2. Get credentials
3. Add to `server/.env`
4. Full barcode/text nutrition lookup enabled 📦

---

## 📊 Database Schema Overview

### User Model
```
- Email (unique)
- Password (hashed with bcrypt)
- Username
- Role (user/admin)
- Nutrition Goals (calories, protein, etc.)
- Created/Updated timestamps
```

### Meal Model
```
- User ID (reference)
- Food Name
- Quantity
- Calories, Protein, Carbs, Fats, Sugar, Fiber
- Image URL
- Logged Date/Time
```

### Water Log Model
```
- User ID (reference)
- Amount (ml/oz)
- Logged Date/Time
```

---

## 🌐 Offline & Sync Features

Bite includes automatic offline support:

- ✅ Meals logged offline are queued locally
- ✅ Water logs persist without internet
- ✅ Auto-sync when connection is restored
- ✅ No data loss during network issues

---

## 🎨 Customization

### Theming
Edit `client/src/tailwind.config.js` to customize:
- Colors
- Fonts
- Spacing
- Breakpoints

### API Base URL
Modify `client/.env`:
```env
VITE_API_URL=http://your-api-url/api
```

### Port Configuration
Modify `server/.env`:
```env
PORT=your_desired_port
```

---

## 🐛 Troubleshooting

### MongoDB Connection Issues
```bash
# Check MongoDB is running
mongosh

# If Atlas: verify connection string and IP whitelist
```

### Port Already in Use
```bash
# Change port in server/.env
PORT=5002
```

### Dependencies Issues
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
```

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📝 License

This project is licensed under the **MIT License** - see the LICENSE file for details.

---

## 🙋 Support & Contact

- 📧 **Email**: your-email@example.com
- 🐙 **GitHub Issues**: Open an issue for bugs or feature requests
- 💬 **Discussions**: Join our community discussions

---

## 🚀 Roadmap

- [ ] Mobile app (React Native)
- [ ] AI-powered meal recommendations
- [ ] Social features (friend tracking, leaderboards)
- [ ] Export nutrition reports (PDF)
- [ ] Integration with fitness trackers
- [ ] Multi-language support
- [ ] Machine learning for meal recognition

---

## 📌 Quick Reference

| Question | Answer |
|----------|--------|
| **Frontend URL** | `http://localhost:5173` |
| **Backend URL** | `http://localhost:5001` |
| **Default DB** | `mongodb://127.0.0.1:27017/bite_db` |
| **Node version** | 18+ |
| **Package manager** | npm |

---

<div align="center">

**⭐ If you found this project helpful, please consider giving it a star!**

Made with ❤️ by the Bite Team

</div>
