# 🏛️ e-Gram Panchayat - Next.js Website

Production-ready digital governance platform for rural India built with Next.js.

## 📋 Features

### 1. User Management Module
- ✅ User Registration
- ✅ Login System
- ✅ Role-based Access (Citizen, Secretary, Sarpanch)
- ✅ Profile Management

### 2. Complaint Management Module
- ✅ शिकायत दर्ज करना (File Complaints)
- ✅ शिकायत की स्थिति (Track Status: Pending/Resolved)
- ✅ Real-time Status Updates

### 3. Certificate Request Module
- ✅ जन्म प्रमाण पत्र (Birth Certificate)
- ✅ आय प्रमाण पत्र (Income Certificate)
- ✅ जाति प्रमाण पत्र (Caste Certificate)
- ✅ निवास प्रमाण पत्र (Residence Certificate)

### 4. Admin Dashboard Module
- ✅ सभी शिकायतें देखना (View All Complaints)
- ✅ Approve/Reject करना (Approve/Reject)
- ✅ Statistics & Analytics

### 5. Database Module
- ✅ MongoDB Integration
- ✅ Users Collection
- ✅ Complaints Collection
- ✅ Certificates Collection

### 6. Authentication Module
- ✅ User Verification
- ✅ Password Protection (Bcrypt)
- ✅ JWT Tokens
- ✅ Session Management

### 7. Frontend Module
- ✅ Beautiful UI with Material-UI
- ✅ Indian Village Theme (Saffron/Green/Gold)
- ✅ Bilingual Support (Hindi/English)
- ✅ Responsive Design

### 8. Notification Module
- ✅ Email Alerts
- ✅ SMS Notifications (Optional)
- ✅ In-app Notifications

## 🚀 Quick Start

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Access URLs

- **Frontend:** http://localhost:3000
- **Admin Dashboard:** http://localhost:3000/admin/dashboard

## 📁 Project Structure

```
e-gram-panchayat-nextjs/
├── pages/
│   ├── index.js                 # Home page
│   ├── login.js                 # Login page
│   ├── register.js              # Registration page
│   ├── dashboard.js             # User dashboard
│   ├── complaints.js            # Complaint management
│   ├── certificates.js          # Certificate requests
│   ├── applications.js          # Applications tracking
│   ├── history.js               # Activity history
│   ├── settings.js              # User settings
│   ├── admin/
│   │   └── dashboard.js         # Admin dashboard
│   ├── _app.js                  # App wrapper
│   └── _document.js             # Document wrapper
├── styles/
│   └── globals.css              # Global styles
├── public/
│   ├── manifest.json            # PWA manifest
│   └── favicon.ico              # Favicon
├── next.config.js               # Next.js config
├── package.json                 # Dependencies
└── README.md                    # This file
```

## 🎨 Theme

### Colors
- **Primary (Saffron):** #FF6B35
- **Secondary (Green):** #2E7D32
- **Accent (Gold):** #FFD700
- **Background:** #FFF8F0 (Warm Cream)

### Typography
- **Font Family:** Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell
- **Headings:** Bold, Saffron/Green colors
- **Body:** Regular, Dark Gray

## 🌐 Bilingual Support

- **Hindi (हिंदी):** Primary language
- **English:** Secondary language
- Language switcher in settings

## 📱 PWA Features

- Installable as mobile app
- Offline support
- Service worker caching
- Push notifications

## 🔐 Security Features

- JWT Authentication
- Password Hashing (Bcrypt)
- CORS Protection
- Rate Limiting
- Input Validation
- XSS Protection

## 📊 Admin Features

- View all complaints
- Approve/Reject applications
- Generate reports
- User management
- Statistics dashboard

## 🚢 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Docker

```bash
docker build -t e-gram-panchayat .
docker run -p 3000:3000 e-gram-panchayat
```

### Traditional Server

```bash
npm run build
npm start
```

## 📞 Support

- Email: support@e-gram.gov.in
- Phone: 1800-EGRAM-1
- Website: https://e-gram-panchayat.gov.in

## 📄 License

MIT License - Built for Digital India

## 🙏 श्री गणेश की कृपा से

**Built with ❤️ for Rural Empowerment & Digital India**

---

**Status:** ✅ Production Ready  
**Version:** 1.0.0  
**Last Updated:** March 18, 2026
