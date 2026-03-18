import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {
  Container,
  Box,
  Card,
  CardContent,
  Typography,
  AppBar,
  Toolbar,
  Button,
  TextField,
  Stack,
  Switch,
  FormControlLabel,
  Divider,
  Alert,
} from '@mui/material'
import { ArrowBack, Settings } from '@mui/icons-material'

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    language: 'hindi',
    notifications: true,
    emailAlerts: true,
    smsAlerts: false,
    twoFactor: false,
  })
  const [saved, setSaved] = useState(false)

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target
    setSettings((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <>
      <Head>
        <title>Settings - e-Gram Panchayat</title>
      </Head>

      <AppBar position="sticky">
        <Toolbar>
          <Link href="/dashboard" passHref>
            <Button color="inherit">
              <ArrowBack sx={{ mr: 1 }} />
              Back
            </Button>
          </Link>
          <Typography variant="h6" sx={{ flex: 1, fontWeight: 700 }}>
            सेटिंग्स (Settings)
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ py: 4 }}>
        {saved && (
          <Alert severity="success" sx={{ mb: 3 }}>
            Settings saved successfully!
          </Alert>
        )}

        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
              भाषा (Language)
            </Typography>
            <TextField
              fullWidth
              select
              label="Preferred Language"
              name="language"
              value={settings.language}
              onChange={handleChange}
              SelectProps={{
                native: true,
              }}
            >
              <option value="hindi">हिंदी (Hindi)</option>
              <option value="english">English</option>
            </TextField>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
              सूचनाएं (Notifications)
            </Typography>
            <Stack spacing={2}>
              <FormControlLabel
                control={
                  <Switch
                    name="notifications"
                    checked={settings.notifications}
                    onChange={handleChange}
                  />
                }
                label="Enable All Notifications"
              />
              <FormControlLabel
                control={
                  <Switch
                    name="emailAlerts"
                    checked={settings.emailAlerts}
                    onChange={handleChange}
                  />
                }
                label="Email Alerts"
              />
              <FormControlLabel
                control={
                  <Switch
                    name="smsAlerts"
                    checked={settings.smsAlerts}
                    onChange={handleChange}
                  />
                }
                label="SMS Alerts"
              />
            </Stack>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
              सुरक्षा (Security)
            </Typography>
            <Stack spacing={2}>
              <FormControlLabel
                control={
                  <Switch
                    name="twoFactor"
                    checked={settings.twoFactor}
                    onChange={handleChange}
                  />
                }
                label="Two-Factor Authentication"
              />
              <Button variant="outlined" color="primary">
                Change Password
              </Button>
            </Stack>
          </CardContent>
        </Card>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSave}
          >
            Save Settings
          </Button>
          <Button variant="outlined" color="primary" size="large">
            Cancel
          </Button>
        </Box>
      </Container>
    </>
  )
}
