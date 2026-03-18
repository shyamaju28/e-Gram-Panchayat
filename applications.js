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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
} from '@mui/material'
import { ArrowBack, FileDownload } from '@mui/icons-material'

export default function ApplicationsPage() {
  const applications = [
    {
      id: 1,
      type: 'Scholarship Application',
      status: 'Approved',
      date: '2026-03-01',
      amount: '₹5,000',
    },
    {
      id: 2,
      type: 'Loan Application',
      status: 'Pending',
      date: '2026-03-10',
      amount: '₹50,000',
    },
    {
      id: 3,
      type: 'Pension Application',
      status: 'Approved',
      date: '2026-02-15',
      amount: '₹2,000/month',
    },
  ]

  return (
    <>
      <Head>
        <title>Applications - e-Gram Panchayat</title>
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
            मेरे आवेदन (My Applications)
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Card>
          <CardContent>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: '#FFF8F0' }}>
                    <TableCell sx={{ fontWeight: 700 }}>ID</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Type</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Status</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Amount</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Date</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {applications.map((app) => (
                    <TableRow key={app.id}>
                      <TableCell>#{app.id}</TableCell>
                      <TableCell>{app.type}</TableCell>
                      <TableCell>
                        <Chip
                          label={app.status}
                          color={app.status === 'Approved' ? 'success' : 'warning'}
                          size="small"
                        />
                      </TableCell>
                      <TableCell>{app.amount}</TableCell>
                      <TableCell>{app.date}</TableCell>
                      <TableCell>
                        <Button size="small" startIcon={<FileDownload />}>
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Container>
    </>
  )
}
