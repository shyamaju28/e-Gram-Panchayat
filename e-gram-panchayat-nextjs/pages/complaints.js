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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
} from '@mui/material'
import { ArrowBack, Complaint } from '@mui/icons-material'

export default function ComplaintsPage() {
  const [activeTab, setActiveTab] = useState('file')
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    location: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const complaints = [
    {
      id: 1,
      title: 'Road Repair',
      category: 'Infrastructure',
      status: 'Resolved',
      date: '2026-03-15',
    },
    {
      id: 2,
      title: 'Water Supply Issue',
      category: 'Utilities',
      status: 'Pending',
      date: '2026-03-18',
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
      setFormData({ title: '', category: '', description: '', location: '' })
      setLoading(false)
      setTimeout(() => setSuccess(false), 3000)
    }, 1000)
  }

  return (
    <>
      <Head>
        <title>Complaints - e-Gram Panchayat</title>
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
            शिकायत प्रबंधन (Complaint Management)
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ mb: 4 }}>
          <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
            <Button
              variant={activeTab === 'file' ? 'contained' : 'outlined'}
              onClick={() => setActiveTab('file')}
            >
              शिकायत दर्ज करें (File Complaint)
            </Button>
            <Button
              variant={activeTab === 'view' ? 'contained' : 'outlined'}
              onClick={() => setActiveTab('view')}
            >
              मेरी शिकायतें (My Complaints)
            </Button>
          </Stack>
        </Box>

        {activeTab === 'file' && (
          <Card>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
                नई शिकायत दर्ज करें
              </Typography>

              {success && (
                <Alert severity="success" sx={{ mb: 3 }}>
                  शिकायत सफलतापूर्वक दर्ज हो गई! (Complaint filed successfully!)
                </Alert>
              )}

              <form onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  <TextField
                    fullWidth
                    label="शिकायत का विषय (Complaint Title)"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="e.g., Road Repair, Water Supply"
                    required
                  />

                  <TextField
                    fullWidth
                    select
                    label="श्रेणी (Category)"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  >
                    <MenuItem value="infrastructure">Infrastructure</MenuItem>
                    <MenuItem value="utilities">Utilities</MenuItem>
                    <MenuItem value="health">Health</MenuItem>
                    <MenuItem value="education">Education</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </TextField>

                  <TextField
                    fullWidth
                    label="स्थान (Location)"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Where is the issue?"
                    required
                  />

                  <TextField
                    fullWidth
                    multiline
                    rows={5}
                    label="विवरण (Description)"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe your complaint in detail..."
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
                    {loading ? <CircularProgress size={24} /> : 'शिकायत दर्ज करें (Submit)'}
                  </Button>
                </Stack>
              </form>
            </CardContent>
          </Card>
        )}

        {activeTab === 'view' && (
          <Card>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
                मेरी शिकायतें (My Complaints)
              </Typography>

              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow sx={{ backgroundColor: '#FFF8F0' }}>
                      <TableCell sx={{ fontWeight: 700 }}>ID</TableCell>
                      <TableCell sx={{ fontWeight: 700 }}>विषय (Title)</TableCell>
                      <TableCell sx={{ fontWeight: 700 }}>श्रेणी (Category)</TableCell>
                      <TableCell sx={{ fontWeight: 700 }}>स्थिति (Status)</TableCell>
                      <TableCell sx={{ fontWeight: 700 }}>तारीख (Date)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {complaints.map((complaint) => (
                      <TableRow key={complaint.id}>
                        <TableCell>#{complaint.id}</TableCell>
                        <TableCell>{complaint.title}</TableCell>
                        <TableCell>{complaint.category}</TableCell>
                        <TableCell>
                          <Chip
                            label={complaint.status}
                            color={complaint.status === 'Resolved' ? 'success' : 'warning'}
                            size="small"
                          />
                        </TableCell>
                        <TableCell>{complaint.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        )}
      </Container>
    </>
  )
}
