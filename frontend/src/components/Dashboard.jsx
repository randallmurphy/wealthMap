import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  Button,
  Divider,
} from '@mui/material';
import { useAuth } from './hooks/useAuth';
import BarChartWidget from './widgets/BarChartWidget';
import PieChartWidget from './widgets/PieChartWidget';
import NetWorthWidget from './widgets/NetWorthWidget';
import BudgetModal from './modals/BudgetModal';
import SummaryWidget from './SummaryWidget';
import ToastNotification from './ToastNotifications';
import BudgetTable from './BudgetTable';

// Drip budget rows data — add more if you want
const budgetRows = [
  { date: '2025-07-01', type: 'Income', category: 'Salary', amount: 3000 },
  { date: '2025-07-05', type: 'Expense', category: 'Groceries', amount: 150 },
  { date: '2025-07-10', type: 'Expense', category: 'Utilities', amount: 200 },
  { date: '2025-07-15', type: 'Income', category: 'Freelance', amount: 800 },
  { date: '2025-07-20', type: 'Expense', category: 'Car Payment', amount: 400 },
  { date: '2025-07-25', type: 'Expense', category: 'Credit Card', amount: 300 },
  { date: '2025-07-28', type: 'Income', category: 'Dividends', amount: 100 },
];

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <Box
      sx={{
        p: 4,
        backgroundColor: '#12121f',
        minHeight: '100vh',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6,
      }}
    >
      <ToastNotification />

      {/* Header */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: 'bold',
          fontFamily: "'Poppins', sans-serif",
          letterSpacing: 3,
          color: '#FFD700',
          textAlign: 'center',
        }}
      >
        Welcome Back, {user?.name || 'Money King'} 👑
      </Typography>

      {/* Main Cards */}
      <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: 960 }}>
        {[
          {
            title: 'Manage Items',
            description: 'View, add, or edit your budget items with ease.',
            link: '/dashboard/items',
          },
          {
            title: 'Recurring Setup',
            description: 'Automate your budget with recurring items & notifications.',
            link: '/dashboard/recurring',
          },
          {
            title: 'Analytics & Reports',
            description: 'Dive into charts and filters to track your money moves.',
            link: '/dashboard/analytics',
          },
        ].map((card, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Paper
              elevation={10}
              sx={{
                p: 3,
                backgroundColor: '#1e1e2f',
                borderRadius: 3,
                textAlign: 'center',
                boxShadow: '0 0 15px #FFD700',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            >
              <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
                {card.title}
              </Typography>
              <Typography sx={{ mb: 2 }}>{card.description}</Typography>
              <Button variant="contained" color="warning" href={card.link}>
                Go
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ borderColor: '#FFD700', width: '100%', maxWidth: 960 }} />

      {/* Current Snapshot Title */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          fontFamily: "'Poppins', sans-serif",
          color: '#FFD700',
          textAlign: 'center',
        }}
      >
        Your Current Snapshot 📊
      </Typography>

      {/* Budget Table full width, centered */}
      <Box sx={{ width: '100%', maxWidth: 960 }}>
        <BudgetTable rows={budgetRows} />
      </Box>

      {/* Visual Charts stacked vertically, centered */}
      <Box sx={{ width: '100%', maxWidth: 960, display: 'flex', flexDirection: 'column', gap: 4 }}>
        <BarChartWidget />
        <PieChartWidget />
      </Box>

      {/* Net Worth and Summary side by side, centered */}
      <Grid container spacing={4} sx={{ maxWidth: 960, width: '100%' }} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={6}>
          <NetWorthWidget />
        </Grid>
        <Grid item xs={12} md={6}>
          <SummaryWidget />
        </Grid>
      </Grid>

      {/* Budget Modal */}
      <Box textAlign="center" mt={6}>
        <BudgetModal />
      </Box>
    </Box>
  );
};

export default Dashboard;
