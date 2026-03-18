# 🚀 e-Gram Panchayat Next.js - Complete Setup Guide

## 📋 Prerequisites

- Node.js 16+ installed
- npm or yarn package manager
- MongoDB (local or Atlas)
- Git (optional)

## 🎯 Installation Steps

### Step 1: Install Dependencies

```bash
cd e-gram-panchayat-nextjs
npm install
```

### Step 2: Configure Environment

Create `.env.local` file in root:

```env
# App Configuration
NEXT_PUBLIC_APP_NAME=e-Gram Panchayat
NEXT_PUBLIC_APP_VERSION=1.0.0

# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# Database (if using backend)
MONGODB_URI=mongodb://localhost:27017/e-gram-panchayat

# Authentication
JWT_SECRET=your-secret-key-here
```

### Step 3: Run Development Server

```bash
npm run dev
```

Server will start at: **http://localhost:3000**

### Step 4: Access Application

- **Home:** http://localhost:3000
- **Register:** http://localhost:3000/register
- **Login:** http://localhost:3000/login
- **Dashboard:** http://localhost:3000/dashboard
- **Admin:** http://localhost:3000/admin/dashboard

## 📱 Features Overview

### 1. Home Page (/)
- Beautiful landing page
- Feature showcase
- Call-to-action buttons
- Responsive design

### 2. Authentication
- **Register** (/register) - Create new account
- **Login** (/login) - Sign in with credentials

### 3. User Dashboard (/dashboard)
- Welcome greeting
- Statistics cards
- Quick action buttons
- Recent activity

### 4. Complaint Management (/complaints)
- **File Complaint** - शिकायत दर्ज करें
- **View Complaints** - मेरी शिकायतें
- Status tracking (Pending/Resolved)

### 5. Certificate Requests (/certificates)
- **Apply for Certificate** - आवेदन करें
- **View Certificates** - मेरे प्रमाण पत्र
- Types:
  - Birth Certificate (जन्म प्रमाण पत्र)
  - Income Certificate (आय प्रमाण पत्र)
  - Caste Certificate (जाति प्रमाण पत्र)
  - Residence Certificate (निवास प्रमाण पत्र)

### 6. Applications (/applications)
- Track applications
- View status
- Download documents

### 7. History (/history)
- Activity timeline
- Complaint history
- Certificate history

### 8. Settings (/settings)
- Language preference
- Notification settings
- Security settings

### 9. Admin Dashboard (/admin/dashboard)
- View all complaints
- Approve/Reject applications
- Statistics
- User management

## 🎨 Customization

### Change Theme Colors

Edit `pages/_app.js`:

```javascript
const theme = createTheme({
  palette: {
    primary: {
      main: '#FF6B35', // Saffron
    },
    secondary: {
      main: '#2E7D32', // Green
    },
  },
})
```

### Add New Pages

1. Create file in `pages/` folder
2. Use Material-UI components
3. Import theme from `_app.js`

Example:

```javascript
import Head from 'next/head'
import { Container, Box, Typography } from '@mui/material'

export default function NewPage() {
  return (
    <>
      <Head>
        <title>New Page - e-Gram Panchayat</title>
      </Head>
      <Container>
        <Typography variant="h1">Welcome</Typography>
      </Container>
    </>
  )
}
```

## 🔧 Build & Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Upload 'out' folder to Netlify
```

## 📊 Available Scripts

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm start            # Start production server

# Utilities
npm run lint         # Run ESLint
npm run type-check   # Check TypeScript types
npm run export       # Export static site
npm run analyze      # Analyze bundle size
```

## 🐛 Troubleshooting

### Port 3000 Already in Use

```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -i :3000
kill -9 <PID>
```

### Dependencies Issues

```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

```bash
npm run build -- --debug
```

## 📚 API Integration

To connect with backend API:

1. Update `NEXT_PUBLIC_API_URL` in `.env.local`
2. Create API service in `lib/api.js`:

```javascript
export const loginUser = async (email, password) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
  return response.json()
}
```

3. Use in components:

```javascript
import { loginUser } from '@/lib/api'

const handleLogin = async () => {
  const data = await loginUser(email, password)
  // Handle response
}
```

## 🌐 Bilingual Support

Add language context in `contexts/LanguageContext.js`:

```javascript
import { createContext, useState } from 'react'

export const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('hi')

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
```

## 📱 PWA Setup

Already configured in `next.config.js`. To enable:

1. Add to `public/manifest.json`:

```json
{
  "name": "e-Gram Panchayat",
  "short_name": "e-Gram",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
```

2. Users can install as app from browser

## 🔐 Security Best Practices

- ✅ Use HTTPS in production
- ✅ Validate all inputs
- ✅ Use environment variables for secrets
- ✅ Implement rate limiting
- ✅ Use secure cookies
- ✅ Enable CORS properly
- ✅ Keep dependencies updated

## 📞 Support

- Documentation: See README.md
- Issues: Check GitHub issues
- Email: support@e-gram.gov.in

## 🎉 You're Ready!

Your e-Gram Panchayat website is now ready to use!

**Happy Coding! 🚀**

---

**Built with ❤️ for Digital India**
