import React from 'react';
import { Box, Typography, Paper, Grid, Button } from '@mui/material';

import Inventory2Icon from '@mui/icons-material/Inventory2';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FlagIcon from '@mui/icons-material/Flag';
import StorefrontIcon from '@mui/icons-material/Storefront';
import HistoryIcon from '@mui/icons-material/History';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { useAuth } from '../components/hooks/useAuth';

const Dashboard = () => {
  const { user } = useAuth();

  const cardData = [
    {
      title: 'Manage Items',
      desc: 'View, add, or edit your budget items.',
      href: '/dashboard/items',
      icon: <Inventory2Icon sx={{ fontSize: 40, color: '#66bb6a' }} />,
      bg: '#1b2e1b',
      borderColor: '#66bb6a',
    },
    {
      title: 'Recurring Setup',
      desc: 'Automate your budget flow.',
      href: '/dashboard/recurring',
      icon: <AutorenewIcon sx={{ fontSize: 40, color: '#42a5f5' }} />,
      bg: '#122737',
      borderColor: '#42a5f5',
    },
    {
      title: 'Analytics & Reports',
      desc: 'Track income, expenses & progress.',
      href: '/dashboard/analytics',
      icon: <AssessmentIcon sx={{ fontSize: 40, color: '#fdd835' }} />,
      bg: '#2b2507',
      borderColor: '#fdd835',
    },
    {
      title: 'Profile / Settings',
      desc: 'Update your user profile and preferences.',
      href: '/dashboard/profile',
      icon: <AccountCircleIcon sx={{ fontSize: 40, color: '#42a5f5' }} />,
      bg: '#1e2a35',
      borderColor: '#42a5f5',
    },
    // {
    //   title: 'Notifications',
    //   desc: 'Stay alert on important account updates.',
    //   href: '/dashboard/notifications',
    //   icon: <NotificationsIcon sx={{ fontSize: 40, color: '#ef5350' }} />,
    //   bg: '#2e1c1c',
    //   borderColor: '#ef5350',
    // },
    // {
    //   title: 'Financial Goals',
    //   desc: 'Define & conquer your money milestones.',
    //   href: '/dashboard/goals',
    //   icon: <FlagIcon sx={{ fontSize: 40, color: '#b39ddb' }} />,
    //   bg: '#2c1a3b',
    //   borderColor: '#512da8',
    // },
    // {
    //   title: 'Vendor Portal',
    //   desc: 'Connect with approved trade vendors.',
    //   href: '/dashboard/vendors',
    //   icon: <StorefrontIcon sx={{ fontSize: 40, color: '#4fc3f7' }} />,
    //   bg: '#102b33',
    //   borderColor: '#4fc3f7',
    // },
    // {
    //   title: 'Payment History',
    //   desc: 'See past payments and records.',
    //   href: '/dashboard/history',
    //   icon: <HistoryIcon sx={{ fontSize: 40, color: '#fdd835' }} />,
    //   bg: '#2b260d',
    //   borderColor: '#fdd835',
    // },
    // {
    //   title: 'Tax Center',
    //   desc: 'Access reports for tax season.',
    //   href: '/dashboard/tax',
    //   icon: <ReceiptLongIcon sx={{ fontSize: 40, color: '#ffb300' }} />,
    //   bg: '#33270a',
    //   borderColor: '#ffb300',
    // },
    // {
    //   title: 'FlexPay Assist',
    //   desc: 'Request extensions or payment terms.',
    //   href: '/dashboard/flexpay',
    //   icon: <MonetizationOnIcon sx={{ fontSize: 40, color: '#FFD700' }} />,
    //   bg: '#2f2a10',
    //   borderColor: '#FFD700',
    // },
  ];

  return (
    <Box
      sx={{
        p: 4,
        background: 'linear-gradient(to bottom, #0a0a0a, #12121f)',
        minHeight: '100vh',
        color: '#fff',
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 'bold',
          mb: 6,
          letterSpacing: 2,
          textAlign: 'center',
          color: '#FFD700',
          textShadow: '0 0 15px #FFD70088, 0 0 30px #FFA50055',
        }}
      >
        Welcome Back, {user?.name || 'Money King'} 👑
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {cardData.map(({ title, desc, href, icon, bg, borderColor }, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Paper
              elevation={15}
              sx={{
                p: 4,
                borderRadius: 4,
                textAlign: 'center',
                background: bg,
                border: `2px solid ${borderColor}`,
                boxShadow: `0 0 25px ${borderColor}66`,
                transition: 'transform 0.35s ease, box-shadow 0.35s ease',
                '&:hover': {
                  transform: 'scale(1.07)',
                  boxShadow: `0 0 45px ${borderColor}`,
                },
              }}
            >
              <Box mb={2}>{icon}</Box>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: borderColor,
                  mb: 1,
                }}
              >
                {title}
              </Typography>
              <Typography
                sx={{
                  fontSize: '0.95rem',
                  color: '#ddd',
                  mb: 3,
                }}
              >
                {desc}
              </Typography>
              <Button
                variant="contained"
                href={href}
                sx={{
                  background: 'linear-gradient(to right, #FFD700, #FFA500)',
                  color: '#000',
                  fontWeight: 'bold',
                  borderRadius: 8,
                  px: 3,
                  py: 1,
                  boxShadow: '0 0 12px #FFA50055',
                  '&:hover': {
                    background: 'linear-gradient(to right, #FFA500, #FFD700)',
                    boxShadow: '0 0 20px #FFD700aa',
                  },
                }}
              >
                Enter
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;
