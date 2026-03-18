import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Stack,
  Chip,
} from '@mui/material'
import {
  Dashboard,
  Description,
  Complaint,
  Settings,
  Logout,
  Menu,
  Close,
  FileDownload,
  History,
} from '@mui/icons-material'

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (!userData) {
      router.push('/login')
    } else {
      setUser(JSON.parse(userData))
      setLoading(false)
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('user')
    router.push('/')
  }

  if (loading) {
    return <Typography>Loading...</Typography>
  }

  const menuItems = [
    { label: 'Dashboard', icon: <Dashboard />, href: '/dashboard' },
    { label: 'File Complaint', icon: <Complaint />, href: '/complaints' },
    { label: 'Certificates', icon: <Description />, href: '/certificates' },
    { label: 'My Applications', icon: <FileDownload />, href: '/applications' },
    { label: 'History', icon: <History />, href: '/history' },
    { label: 'Settings', icon: <Settings />, href: '/settings' },
  ]

  const stats = [
    { label: 'Total Complaints', value: '5', color: '#FF6B35' },
    { label: 'Resolved', value: '3', color: '#2E7D32' },
    { label: 'Pending', value: '2', color: '#FFD700' },
    { label: 'Certificates', value: '2', color: '#1565C0' },
  ]

  return (
    <>
      <Head>
        <title>Dashboard - e-Gram Panchayat</title>
      </Head>

      {/* Navigation */}
      <AppBar position="sticky">
        <Toolbar>
          <Button
            color="inherit"
            onClick={() => setDrawerOpen(true)}
            sx={{ mr: 2 }}
          >
            <Menu />
          </Button>
          <Typography variant="h6" sx={{ flex: 1, fontWeight: 700 }}>
            e-Gram Panchayat
          </Typography>
          <Typography variant="body2" sx={{ mr: 2 }}>
            {user?.name}
          </Typography>
          <Button color="inherit" onClick={handleLogout}>
            <Logout sx={{ mr: 1 }} />
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 280, p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Menu
            </Typography>
            <Button onClick={() => setDrawerOpen(false)}>
              <Close />
            </Button>
          </Box>
          <Divider sx={{ mb: 2 }} />
          <List>
            {menuItems.map((item, index) => (
              <ListItem
                button
                key={index}
                component={Link}
                href={item.href}
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemIcon sx={{ color: '#FF6B35' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
            नमस्कार, {user?.name}! 👋
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Welcome to your e-Gram Panchayat dashboard
          </Typography>
        </Box>

        {/* Statistics */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    {stat.label}
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{ color: stat.color, fontWeight: 700 }}
                  >
                    {stat.value}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Quick Actions */}
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
          Quick Actions
        </Typography>
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ cursor: 'pointer', '&:hover': { boxShadow: 3 } }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Complaint sx={{ fontSize: 40, color: '#FF6B35', mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  File Complaint
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  component={Link}
                  href="/complaints"
                >
                  शिकायत दर्ज करें
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ cursor: 'pointer', '&:hover': { boxShadow: 3 } }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Description sx={{ fontSize: 40, color: '#2E7D32', mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  Get Certificate
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  component={Link}
                  href="/certificates"
                >
                  प्रमाण पत्र लें
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ cursor: 'pointer', '&:hover': { boxShadow: 3 } }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <FileDownload sx={{ fontSize: 40, color: '#1565C0', mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  Applications
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  component={Link}
                  href="/applications"
                >
                  आवेदन देखें
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ cursor: 'pointer', '&:hover': { boxShadow: 3 } }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <History sx={{ fontSize: 40, color: '#FFD700', mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  History
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  component={Link}
                  href="/history"
                >
                  इतिहास देखें
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Recent Activity */}
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
          Recent Activity
        </Typography>
        <Card>
          <CardContent>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    Complaint #001 - Road Repair
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Filed on March 15, 2026
                  </Typography>
                </Box>
                <Chip label="Resolved" color="success" />
              </Box>
              <Divider />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    Birth Certificate Request
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Submitted on March 10, 2026
                  </Typography>
                </Box>
                <Chip label="Pending" color="warning" />
              </Box>
              <Divider />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    Income Certificate
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Approved on March 5, 2026
                  </Typography>
                </Box>
                <Chip label="Approved" color="success" />
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </>
  )
}
