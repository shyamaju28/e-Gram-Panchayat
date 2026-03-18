# 🚀 e-Gram Panchayat - Deployment Guide

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

**Easiest deployment for Next.js**

#### Steps:

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Connect to Vercel**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Configure Environment Variables**
   - Go to Project Settings
   - Add environment variables
   - Redeploy

**Result:** Your site will be live at `your-project.vercel.app`

---

### Option 2: Netlify

#### Steps:

1. **Build the project**
```bash
npm run build
```

2. **Deploy**
   - Go to https://netlify.com
   - Drag and drop the `out` folder
   - Or connect GitHub for auto-deployment

**Result:** Your site will be live at `your-project.netlify.app`

---

### Option 3: AWS (EC2)

#### Steps:

1. **Launch EC2 Instance**
   - Ubuntu 20.04 LTS
   - t2.micro (free tier)

2. **Connect and Setup**
```bash
# SSH into instance
ssh -i your-key.pem ubuntu@your-instance-ip

# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Clone repository
git clone your-repo-url
cd e-gram-panchayat-nextjs

# Install dependencies
npm install

# Build
npm run build
```

3. **Setup PM2 (Process Manager)**
```bash
sudo npm install -g pm2

# Start application
pm2 start npm --name "e-gram" -- start

# Make it persistent
pm2 startup
pm2 save
```

4. **Setup Nginx (Reverse Proxy)**
```bash
sudo apt install nginx

# Create config
sudo nano /etc/nginx/sites-available/default
```

Add:
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

5. **Setup SSL (Let's Encrypt)**
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

---

### Option 4: Docker

#### Create Dockerfile

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

#### Build and Run

```bash
# Build image
docker build -t e-gram-panchayat .

# Run container
docker run -p 3000:3000 e-gram-panchayat

# Or use Docker Compose
docker-compose up
```

---

### Option 5: DigitalOcean App Platform

#### Steps:

1. **Push to GitHub**
2. **Go to DigitalOcean App Platform**
3. **Create New App**
4. **Select GitHub Repository**
5. **Configure Build Settings**
   - Build Command: `npm run build`
   - Run Command: `npm start`
6. **Deploy**

---

## 🔒 Production Checklist

- [ ] Environment variables configured
- [ ] Database connection verified
- [ ] SSL certificate installed
- [ ] CORS configured properly
- [ ] Rate limiting enabled
- [ ] Error logging setup
- [ ] Monitoring enabled
- [ ] Backups configured
- [ ] CDN setup (optional)
- [ ] Analytics integrated

## 📊 Performance Optimization

### 1. Image Optimization
```javascript
import Image from 'next/image'

<Image
  src="/image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority
/>
```

### 2. Code Splitting
```javascript
import dynamic from 'next/dynamic'

const Component = dynamic(() => import('../components/Component'))
```

### 3. Caching Headers
```javascript
// next.config.js
async headers() {
  return [
    {
      source: '/static/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ]
}
```

## 🔍 Monitoring & Logging

### Setup Error Tracking (Sentry)

```bash
npm install @sentry/nextjs
```

Configure in `next.config.js`:
```javascript
const withSentry = require("@sentry/nextjs/withSentry");

module.exports = withSentry({
  // your config
});
```

### Setup Analytics (Google Analytics)

```bash
npm install gtag
```

Add to `pages/_app.js`:
```javascript
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag.pageview({
        page_path: url,
        page_title: document.title,
      })
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => router.events.off('routeChangeComplete', handleRouteChange)
  }, [router.events])

  return <Component {...pageProps} />
}
```

## 🚨 Troubleshooting

### Build Fails
```bash
npm cache clean --force
rm -rf .next
npm run build
```

### Port Already in Use
```bash
# Find process
lsof -i :3000

# Kill process
kill -9 <PID>
```

### Memory Issues
```bash
# Increase Node memory
NODE_OPTIONS=--max-old-space-size=4096 npm run build
```

## 📈 Scaling

### Horizontal Scaling
- Use load balancer (AWS ELB, Nginx)
- Deploy multiple instances
- Use database replication

### Vertical Scaling
- Increase server resources
- Optimize code
- Use caching

## 💰 Cost Estimation

| Platform | Cost | Notes |
|----------|------|-------|
| Vercel | Free-$20/mo | Best for Next.js |
| Netlify | Free-$19/mo | Good alternative |
| AWS | $5-50/mo | More control |
| DigitalOcean | $5-40/mo | Simple & affordable |
| Docker | Variable | Self-hosted |

## 🎯 Next Steps

1. Choose deployment platform
2. Configure environment variables
3. Setup monitoring
4. Configure backups
5. Setup CI/CD pipeline
6. Monitor performance
7. Optimize based on metrics

---

**Ready to Deploy! 🚀**

For more help: support@e-gram.gov.in
