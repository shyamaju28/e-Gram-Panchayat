import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {
  Container,
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  Typography,
  AppBar,
  Toolbar,
  Stack,
  Chip,
} from '@mui/material'
import {
  HomeOutlined,
  DescriptionOutlined,
  PeopleOutlined,
  SecurityOutlined,
  SpeedOutlined,
  LanguageOutlined,
} from '@mui/icons-material'

export default function Home() {
  const features = [
    {
      icon: <DescriptionOutlined sx={{ fontSize: 40, color: '#FF6B35' }} />,
      title: 'Applications',
      description: 'Submit and track government applications online',
    },
    {
      icon: <PeopleOutlined sx={{ fontSize: 40, color: '#2E7D32' }} />,
      title: 'Community',
      description: 'Connect with your village community members',
    },
    {
      icon: <SecurityOutlined sx={{ fontSize: 40, color: '#1565C0' }} />,
      title: 'Secure',
      description: 'Government-grade security and data protection',
    },
    {
      icon: <SpeedOutlined sx={{ fontSize: 40, color: '#FFD700' }} />,
      title: 'Fast',
      description: 'Quick processing and instant notifications',
    },
    {
      icon: <LanguageOutlined sx={{ fontSize: 40, color: '#FF6B35' }} />,
      title: 'Bilingual',
      description: 'Hindi and English language support',
    },
    {
      icon: <HomeOutlined sx={{ fontSize: 40, color: '#2E7D32' }} />,
      title: 'Local',
      description: 'Designed for Indian villages and panchayats',
    },
  ]

  return (
    <>
      <Head>
        <title>e-Gram Panchayat - Digital Governance Platform</title>
        <meta name="description" content="Transform rural governance with e-Gram Panchayat" />
        <meta property="og:title" content="e-Gram Panchayat" />
        <meta property="og:description" content="Digital Governance Platform for Rural India" />
      </Head>

      {/* Navigation */}
      <AppBar position="sticky">
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
            <HomeOutlined sx={{ fontSize: 32 }} />
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              e-Gram Panchayat
            </Typography>
          </Box>
          <Stack direction="row" spacing={2}>
            <Link href="/login" passHref>
              <Button color="inherit" variant="text">
                Login
              </Button>
            </Link>
            <Link href="/register" passHref>
              <Button color="inherit" variant="contained" sx={{ bgcolor: '#FFD700', color: '#000' }}>
                Register
              </Button>
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #FFF8F0 0%, #E8F5E9 100%)',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h1" sx={{ mb: 2 }}>
            🏛️ e-Gram Panchayat
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, color: '#666' }}>
            Digital Governance Platform for Rural India
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, maxWidth: 600, mx: 'auto', fontSize: '1.1rem' }}>
            Transform village governance with our comprehensive digital platform. Manage applications, grievances, and community engagement in one place.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Link href="/register" passHref>
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ px: 4, py: 1.5 }}
              >
                Get Started
              </Button>
            </Link>
            <Link href="/login" passHref>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                sx={{ px: 4, py: 1.5 }}
              >
                Login
              </Button>
            </Link>
          </Stack>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" sx={{ textAlign: 'center', mb: 6 }}>
          Key Features
        </Typography>
        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ textAlign: 'center', flex: 1 }}>
                  <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Benefits Section */}
      <Box sx={{ background: '#FFF8F0', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ textAlign: 'center', mb: 6 }}>
            Why Choose e-Gram Panchayat?
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 3 }}>
                <Chip label="✓ Transparent" color="primary" sx={{ mb: 2 }} />
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Complete Transparency
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Track every application and grievance in real-time with complete visibility.
                </Typography>
              </Box>
              <Box sx={{ mb: 3 }}>
                <Chip label="✓ Efficient" color="primary" sx={{ mb: 2 }} />
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Faster Processing
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Reduce paperwork and processing time with digital workflows.
                </Typography>
              </Box>
              <Box sx={{ mb: 3 }}>
                <Chip label="✓ Accessible" color="primary" sx={{ mb: 2 }} />
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Easy to Use
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Simple interface designed for all age groups and technical levels.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 3 }}>
                <Chip label="✓ Secure" color="primary" sx={{ mb: 2 }} />
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Data Protection
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Government-grade encryption and security protocols.
                </Typography>
              </Box>
              <Box sx={{ mb: 3 }}>
                <Chip label="✓ Inclusive" color="primary" sx={{ mb: 2 }} />
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Bilingual Support
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Available in Hindi and English for better accessibility.
                </Typography>
              </Box>
              <Box sx={{ mb: 3 }}>
                <Chip label="✓ Mobile" color="primary" sx={{ mb: 2 }} />
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Mobile Friendly
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Access from any device, anytime, anywhere.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ background: 'linear-gradient(135deg, #FF6B35 0%, #2E7D32 100%)', py: 8, color: 'white' }}>
        <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
          <Typography variant="h3" sx={{ mb: 2, color: 'white' }}>
            Ready to Transform Your Village?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem' }}>
            Join thousands of villages already using e-Gram Panchayat
          </Typography>
          <Link href="/register" passHref>
            <Button
              variant="contained"
              size="large"
              sx={{ bgcolor: '#FFD700', color: '#000', px: 4, py: 1.5, fontWeight: 700 }}
            >
              Start Now
            </Button>
          </Link>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ background: '#2C3E50', color: 'white', py: 4 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} sx={{ mb: 4 }}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
                About
              </Typography>
              <Typography variant="body2">
                e-Gram Panchayat is a digital governance platform designed for rural India.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
                Quick Links
              </Typography>
              <Stack spacing={1}>
                <Link href="/login" passHref>
                  <Typography component="a" variant="body2" sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}>
                    Login
                  </Typography>
                </Link>
                <Link href="/register" passHref>
                  <Typography component="a" variant="body2" sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}>
                    Register
                  </Typography>
                </Link>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
                Support
              </Typography>
              <Stack spacing={1}>
                <Typography variant="body2">Email: support@e-gram.gov.in</Typography>
                <Typography variant="body2">Phone: 1800-EGRAM-1</Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
                Follow Us
              </Typography>
              <Typography variant="body2">
                Connect with us on social media for updates and announcements.
              </Typography>
            </Grid>
          </Grid>
          <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', pt: 3, textAlign: 'center' }}>
            <Typography variant="body2">
              © 2026 e-Gram Panchayat. All rights reserved. | Built for Digital India
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  )
}
