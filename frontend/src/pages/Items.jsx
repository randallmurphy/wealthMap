import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography, Paper, Divider } from '@mui/material';
//import axios from 'axios';

import ExpenseForm from '../components/ExpenseForm';
import AssetForm from '../components/AssetForm';
import LiabilityForm from '../components/LiabilitiesForm';
import IncomeForm from '../components/IncomeForm';
import instance from '../utils/axios';

const tabLabels = ['Income', 'Expenses', 'Assets', 'Liabilities'];

const Items = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [incomeItems, setIncomeItems] = useState([]);
  const [expenseItems, setExpenseItems] = useState([]);
  const [assetItems, setAssetItems] = useState([]);
  const [liabilityItems, setLiabilityItems] = useState([]);

  const handleTabChange = (event, newValue) => setTabIndex(newValue);

  // Helper: Post item to backend and update state
  const handleAddItem = async (type, item) => {
    try {
      const res = await instance.post(`http://localhost:5000/api/items`, { ...item, category: type.toLowerCase() });
      const saved = res.data;

      switch (type) {
        case 'Income':
          setIncomeItems((prev) => [...prev, saved]);
          break;
        case 'Expenses':
          setExpenseItems((prev) => [...prev, saved]);
          break;
        case 'Assets':
          setAssetItems((prev) => [...prev, saved]);
          break;
        case 'Liabilities':
          setLiabilityItems((prev) => [...prev, saved]);
          break;
        default:
          break;
      }
    } catch (err) {
      console.error(`Error adding ${type} item:`, err);
      alert(`Failed to add ${type} item`);
    }
  };

  // Render form and item list per tab
  const renderTabContent = () => {
    switch (tabIndex) {
      case 0:
        return (
          <>
            <IncomeForm onSubmit={(data) => handleAddItem('Income', data)} />
            <ItemList items={incomeItems} type="Income" />
          </>
        );
      case 1:
        return (
          <>
            <ExpenseForm onSubmit={(data) => handleAddItem('Expenses', data)} />
            <ItemList items={expenseItems} type="Expense" />
          </>
        );
      case 2:
        return (
          <>
            <AssetForm onSubmit={(data) => handleAddItem('Assets', data)} />
            <ItemList items={assetItems} type="Asset" />
          </>
        );
      case 3:
        return (
          <>
            <LiabilityForm onSubmit={(data) => handleAddItem('Liabilities', data)} />
            <ItemList items={liabilityItems} type="Liability" />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Paper sx={{ p: 3, maxWidth: 1000, margin: 'auto', mt: 4, bgcolor: '#121212', color: '#fff' }}>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold', color: '#FFD700', textAlign: 'center' }}>
        💼 Manage Your Wealth Items
      </Typography>

      <Tabs
        value={tabIndex}
        onChange={handleTabChange}
        variant="fullWidth"
        textColor="inherit"
        indicatorColor="primary"
        sx={{ mb: 3 }}
      >
        {tabLabels.map((label) => (
          <Tab key={label} label={label} sx={{ fontWeight: 'bold' }} />
        ))}
      </Tabs>

      <Divider sx={{ mb: 2, borderColor: '#FFD700' }} />
      <Box>{renderTabContent()}</Box>
    </Paper>
  );
};

// 💡 Enhanced item list component
const ItemList = ({ items, type }) => {
  if (!items.length) return <Typography>No {type.toLowerCase()} items added yet.</Typography>;

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h6" sx={{ mb: 1, color: '#FFD700' }}>
        Your {type} Items:
      </Typography>
      {items.map((item, index) => (
        <Paper
          key={index}
          sx={{
            p: 2,
            mb: 2,
            bgcolor: '#1e1e2f',
            boxShadow: '0 0 8px #FFD700',
            borderRadius: 2,
            color: '#fff',
          }}
        >
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#FFD700' }}>
            {item.name || item.source || item.title || 'Untitled'}
          </Typography>
          <Typography>💰 Amount: ${Number(item.amount).toLocaleString()}</Typography>
          {item.date && <Typography>📅 Date: {new Date(item.date).toLocaleDateString()}</Typography>}
          {item.notes && <Typography>📝 Notes: {item.notes}</Typography>}
          {item.description && <Typography>📄 Description: {item.description}</Typography>}
        </Paper>
      ))}
    </Box>
  );
};

export default Items;
