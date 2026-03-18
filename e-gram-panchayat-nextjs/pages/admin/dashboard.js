import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  AppBar,
  Toolbar,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material'
import { Logout, CheckCircle, Cancel } from '@mui/icons-material'

export default function AdminDashboard() {
  const [complaints, setComplaints] = useState([
    {
      id: 1,
      title: 'Road Repair',
      citizen: 'राज कुमार',
      status: 'Pending',
      date: '2026-03-18',
    },
    {
      id: 2,
      title: 'Water Supply',
      citizen: 'प्रिया शर्मा',
      status: 'In Progress',
      date: '2026-03-17',
    },
    {
      id: 3,
      title: 'Street Light',
      citizen: 'अमित पटेल',
      status: 'Pending',
      date: '2026-03-16',
    },
  ])

  const [openDialog, setOpenDialog] = useState(false)
  const [selectedComplaint, setSelectedComplaint] = useState(null)
  const [remarks, setRemarks] = useState('')

  const handleApprove = (complaint) => {
    setSelectedComplaint(complaint)
    setOpenDialog(true)
  }

  const handleReject = (id) => {
    setComplaints(complaints.map(c => c.id === id ? { ...c, status: 'Rejected' } : c))
  }

  const handleSave = () => {
    if (selectedComplaint) {
      setComplaints(complaints.map(c =>
        c.id === selectedComplaint.id ? { ...c, status: 'Resolved' } : c
      ))
    }
    setOpenDialog(false)
    setRemarks('')
  }

  const stats = [
    { label: 'Total Complaints', value: complaints.length, color: '#FF6B35' },
    { label: 'Pending', value: complaints.filter(c => c.status === 'Pending').length, color: '#FFD700' },
    { label: 'In Progress', value: complaints.filter(c => c.status === 'In Progress').length, color: '#1565C0' },
    { label: 'Resolved', value: complaints.filter(c => c.status === 'Resolved').length, color: '#2E7D32' },
  ]

  return (
    <>
      <Head>
        <title>Admin Dashboard - e-Gram Panchayat</title>
      </Head>

      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" sx={{ flex: 1, fontWeight: 700 }}>
            🏛️ Admin Dashboard
          </Typography>
          <Button color="inherit">
            <Logout sx={{ mr: 1 }} />
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 4 }}>
          सभी शिकायतें (All Complaints)
        </Typography>

        <Grid container spacing={3} sx={{ mb: 4 }}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    {stat.label}
                  </Typography>
                  <Typography variant="h3" sx={{ color: stat.color, fontWeight: 700 }}>
                    {stat.value}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Card>
          <CardContent>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: '#FFF8F0' }}>
                    <TableCell sx={{ fontWeight: 700 }}>ID</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>शिकायत (Complaint)</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>नागरिक (Citizen)</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>स्थिति (Status)</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>तारीख (Date)</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>कार्रवाई (Action)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {complaints.map((complaint) => (
                    <TableRow key={complaint.id}>
                      <TableCell>#{complaint.id}</TableCell>
                      <TableCell>{complaint.title}</TableCell>
                      <TableCell>{complaint.citizen}</TableCell>
                      <TableCell>
                        <Chip
                          label={complaint.status}
                          color={
                            complaint.status === 'Resolved'
                              ? 'success'
                              : complaint.status === 'In Progress'
                              ? 'info'
                              : 'warning'
                          }
                          size="small"
                        />
                      </TableCell>
                      <TableCell>{complaint.date}</TableCell>
                      <TableCell>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                          <Button
                            size="small"
                            variant="contained"
                            color="success"
                            startIcon={<CheckCircle />}
                            onClick={() => handleApprove(complaint)}
                          >
                            Approve
                          </Button>
                          <Button
                            size="small"
                            variant="outlined"
                            color="error"
                            startIcon={<Cancel />}
                            onClick={() => handleReject(complaint.id)}
                          >
                            Reject
                          </Button>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Container>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>शिकायत को Resolve करें (Resolve Complaint)</DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2 }}>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="टिप्पणी (Remarks)"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              placeholder="Enter resolution details..."
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={handleSave} variant="contained" color="primary">
            Resolve
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
