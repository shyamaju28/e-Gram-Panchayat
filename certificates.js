import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {
  Container,
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  AppBar,
  Toolbar,
  Stack,
  Alert,
  CircularProgress,
  MenuItem,
  Grid,
  Chip,
} from '@mui/material'
import { ArrowBack, Description } from '@mui/icons-material'

export default function CertificatesPage() {
  const [activeTab, setActiveTab] = useState('apply')
  const [formData, setFormData] = useState({
    certificateType: '',
    fullName: '',
    fatherName: '',
    motherName: '',
    dob: '',
    reason: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const certificates = [
    {
      id: 1,
      type: 'Birth Certificate',
      name: 'राज कुमार',
      status: 'Approved',
      date: '2026-03-10',
    },
    {
      id: 2,
      type: 'Income Certificate',
      name: 'राज कुमार',
      status: 'Pending',
      date: '2026-03-15',
    },
    {
      id: 3,
      type: 'Caste Certificate',
      name: 'राज कुमार',
      status: 'Rejected',
      date: '2026-03-05',
    },
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setSuccess(true)
      setFormData({
        certificateType: '',
        fullName: '',
        fatherName: '',
        motherName: '',
        dob: '',
        reason: '',
      })
      setLoading(false)
      setTimeout(() => setSuccess(false), 3000)
    }, 1000)
  }

  return (
    <>
      <Head>
        <title>Certificates - e-Gram Panchayat</title>
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
            प्रमाण पत्र (Certificates)
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ mb: 4 }}>
          <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
            <Button
              variant={activeTab === 'apply' ? 'contained' : 'outlined'}
              onClick={() => setActiveTab('apply')}
            >
              आवेदन करें (Apply)
            </Button>
            <Button
              variant={activeTab === 'view' ? 'contained' : 'outlined'}
              onClick={() => setActiveTab('view')}
            >
              मेरे प्रमाण पत्र (My Certificates)
            </Button>
          </Stack>
        </Box>

        {activeTab === 'apply' && (
          <Card>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
                प्रमाण पत्र के लिए आवेदन करें
              </Typography>

              {success && (
                <Alert severity="success" sx={{ mb: 3 }}>
                  आवेदन सफलतापूर्वक जमा हो गया! (Application submitted successfully!)
                </Alert>
              )}

              <form onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  <TextField
                    fullWidth
                    select
                    label="प्रमाण पत्र का प्रकार (Certificate Type)"
                    name="certificateType"
                    value={formData.certificateType}
                    onChange={handleChange}
                    required
                  >
                    <MenuItem value="birth">जन्म प्रमाण पत्र (Birth Certificate)</MenuItem>
                    <MenuItem value="income">आय प्रमाण पत्र (Income Certificate)</MenuItem>
                    <MenuItem value="caste">जाति प्रमाण पत्र (Caste Certificate)</MenuItem>
                    <MenuItem value="residence">निवास प्रमाण पत्र (Residence Certificate)</MenuItem>
                  </TextField>

                  <TextField
                    fullWidth
                    label="पूरा नाम (Full Name)"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />

                  <TextField
                    fullWidth
                    label="पिता का नाम (Father's Name)"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleChange}
                    required
                  />

                  <TextField
                    fullWidth
                    label="माता का नाम (Mother's Name)"
                    name="motherName"
                    value={formData.motherName}
                    onChange={handleChange}
                    required
                  />

                  <TextField
                    fullWidth
                    label="जन्म तारीख (Date of Birth)"
                    name="dob"
                    type="date"
                    value={formData.dob}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                    required
                  />

                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="आवेदन का कारण (Reason for Application)"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    placeholder="Why do you need this certificate?"
                    required
                  />

                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    disabled={loading}
                    sx={{ py: 1.5 }}
                  >
                    {loading ? <CircularProgress size={24} /> : 'आवेदन जमा करें (Submit)'}
                  </Button>
                </Stack>
              </form>
            </CardContent>
          </Card>
        )}

        {activeTab === 'view' && (
          <Grid container spacing={3}>
            {certificates.map((cert) => (
              <Grid item xs={12} md={6} key={cert.id}>
                <Card>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>
                          {cert.type}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {cert.name}
                        </Typography>
                      </Box>
                      <Chip
                        label={cert.status}
                        color={
                          cert.status === 'Approved'
                            ? 'success'
                            : cert.status === 'Pending'
                            ? 'warning'
                            : 'error'
                        }
                        size="small"
                      />
                    </Box>
                    <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                      Applied: {cert.date}
                    </Typography>
                    {cert.status === 'Approved' && (
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        startIcon={<Description />}
                      >
                        Download
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </>
  )
}
