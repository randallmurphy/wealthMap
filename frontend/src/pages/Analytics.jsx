import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography, Paper, LinearProgress, Chip, Container } from '@mui/material';
import analyticsService from '../services/analyticsServices';


const Analytics = () => {
  const [income, setIncome] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [assets, setAssets] = useState([]);
  const [liabilities, setLiabilities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [incomeData, expenseData, assetData, liabilityData] = await Promise.all([
          analyticsService.getAllIncome(),
          analyticsService.getAllExpenses(),
          analyticsService.getAllAssets(),
          analyticsService.getAllLiabilities(),
        ]);
        setIncome(incomeData);
        setExpenses(expenseData);
        setAssets(assetData);
        setLiabilities(liabilityData);
      } catch (err) {
        console.error("Error fetching analytics data:", err);
      }
    };

    fetchData();
  }, []);

  const totalIncome = income.reduce((acc, item) => acc + Number(item.amount || 0), 0);
  const totalExpenses = expenses.reduce((acc, item) => acc + Number(item.amount || 0), 0);
  const totalAssets = assets.reduce((acc, item) => acc + Number(item.value || 0), 0);
  const totalLiabilities = liabilities.reduce((acc, item) => acc + Number(item.amount || 0), 0);

  const netWorth = totalAssets - totalLiabilities;
  const cashFlow = totalIncome - totalExpenses;

  const wealthGoal = 100000;
  const wealthProgress = Math.min((netWorth / wealthGoal) * 100, 100);

  const riskLevel =
    cashFlow < 0 ? 'High Risk' :
    cashFlow < totalIncome * 0.3 ? 'Moderate Risk' :
    'Low Risk';

  const riskColors = {
    'High Risk': '#ff4d4d',
    'Moderate Risk': '#ffa500',
    'Low Risk': '#4caf50',
  };

  const cardStyle = {
    p: 3,
    borderRadius: 3,
    background: '#1a1a1a',
    border: '2px solid #FFD70033',
    boxShadow: '0 0 12px #FFD70055',
    color: '#fff',
    textAlign: 'center',
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#121212',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', color: 'white' }}>
          <Typography variant="h3" sx={{ color: '#FFD700', fontWeight: 800, mb: 4 }}>
            💰 WealthMap Analytics
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {[
              { title: 'Income', value: totalIncome, color: '#66bb6a' },
              { title: 'Expenses', value: totalExpenses, color: '#ef5350' },
              { title: 'Assets', value: totalAssets, color: '#42a5f5' },
              { title: 'Liabilities', value: totalLiabilities, color: '#fdd835' },
            ].map(({ title, value, color }) => (
              <Grid item xs={12} sm={6} md={3} key={title}>
                <Paper sx={{ ...cardStyle, borderLeft: `6px solid ${color}` }}>
                  <Typography variant="h6" sx={{ color }}>{title}</Typography>
                  <Typography variant="h4" sx={{ mt: 1 }}>
                    ${value.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Grid container spacing={4} mt={5} justifyContent="center">
            <Grid item xs={12} md={6}>
              <Paper sx={{ ...cardStyle, background: '#512da8' }}>
                <Typography variant="h6" sx={{ color: '#b39ddb' }}>Cash Flow</Typography>
                <Typography variant="h4" sx={{ mt: 1, color: cashFlow >= 0 ? '#66bb6a' : '#ef5350' }}>
                  ${cashFlow.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, color: '#ddd' }}>
                  Positive cash flow fuels your freedom.
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper sx={{ ...cardStyle, background: '#00897b' }}>
                <Typography variant="h6" sx={{ color: '#80cbc4' }}>Net Worth</Typography>
                <Typography variant="h4" sx={{ mt: 1, color: '#e0f2f1' }}>
                  ${netWorth.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, color: '#ccc' }}>
                  Level up that empire, one move at a time.
                </Typography>
              </Paper>
            </Grid>
          </Grid>

          <Box mt={6}>
            <Typography variant="h6" sx={{ color: '#FFD700', mb: 1 }}>
              Wealth Goal Progress
            </Typography>
            <LinearProgress
              variant="determinate"
              value={wealthProgress}
              sx={{
                height: 10,
                borderRadius: 5,
                backgroundColor: '#333',
                '& .MuiLinearProgress-bar': {
                  background: 'linear-gradient(to right, #FFD700, #FF8C00)',
                  boxShadow: '0 0 12px #FF8C00',
                },
              }}
            />
            <Typography variant="body2" sx={{ mt: 1, color: '#fff' }}>
              ${netWorth.toLocaleString()} / ${wealthGoal.toLocaleString()} ({wealthProgress.toFixed(2)}%)
            </Typography>
          </Box>

          <Box
            mt={5}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              background: '#1e1e1e',
              p: 3,
              borderRadius: 3,
              border: '1px solid #444',
              boxShadow: '0 0 8px #FFD70022',
            }}
          >
            <Typography variant="h6" sx={{ color: '#fff' }}>Risk Level</Typography>
            <Chip
              label={riskLevel}
              sx={{
                fontWeight: 'bold',
                backgroundColor: riskColors[riskLevel],
                color: '#000',
                boxShadow: `0 0 8px ${riskColors[riskLevel]}`,
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Analytics;
