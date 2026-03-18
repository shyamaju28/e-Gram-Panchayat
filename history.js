import React from 'react'
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
  Stack,
  Chip,
  Divider,
} from '@mui/material'
import { ArrowBack, CheckCircle, Pending, Error as ErrorIcon } from '@mui/icons-material'

export default function HistoryPage() {
  const history = [
    {
      date: '2026-03-18',
      title: 'Complaint #002 Filed',
      description: 'Water Supply Issue',
      status: 'pending',
    },
    {
      date: '2026-03-15',
      title: 'Complaint #001 Resolved',
      description: 'Road Repair Completed',
      status: 'completed',
    },
    {
      date: '2026-03-10',
      title: 'Birth Certificate Applied',
      description: 'Application Submitted',
      status: 'pending',
    },
    {
      date: '2026-03-05',
      title: 'Income Certificate Approved',
      description: 'Certificate Ready for Download',
      status: 'completed',
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'success'
      case 'pending':
        return 'warning'
      case 'error':
        return 'error'
      default:
        return 'default'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle />
      case 'pending':
        return <Pending />
      case 'error':
        return <ErrorIcon />
      default:
        return <Pending />
    }
  }

  return (
    <>
      <Head>
        <title>History - e-Gram Panchayat</title>
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
            इतिहास (History)
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Card>
          <CardContent>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
              Activity History
            </Typography>
            <Stack spacing={3}>
              {history.map((item, index) => (
                <Box key={index}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 1 }}>
                    <Box sx={{ flex: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        {getStatusIcon(item.status)}
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {item.title}
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                        {item.description}
                      </Typography>
                      <Typography variant="caption" color="textSecondary">
                        {item.date}
                      </Typography>
                    </Box>
                    <Chip
                      label={item.status}
                      color={getStatusColor(item.status)}
                      size="small"
                    />
                  </Box>
                  {index < history.length - 1 && <Divider sx={{ mt: 2 }} />}
                </Box>
              ))}
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </>
  )
}
