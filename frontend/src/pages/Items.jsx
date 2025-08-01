import React, { useState, useEffect } from 'react';
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Paper,
  Divider,
  IconButton,
} from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';

import ExpenseForm from '../components/ExpenseForm';
import AssetForm from '../components/AssetForm';
import LiabilityForm from '../components/LiabilitiesForm';
import IncomeForm from '../components/IncomeForm';
import instance from '../utils/axios';

const tabLabels = ['Income', 'Expenses', 'Assets', 'Liabilities'];

const categoryColors = {
  Income: '#66bb6a',       // fresh green
  Expenses: '#ef5350',     // boss red
  Assets: '#42a5f5',       // cool blue
  Liabilities: '#fdd835',  // gold drip
};

const Items = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [incomeItems, setIncomeItems] = useState([]);
  const [expenseItems, setExpenseItems] = useState([]);
  const [assetItems, setAssetItems] = useState([]);
  const [liabilityItems, setLiabilityItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await instance.get('/items');
        const { income, expenses, assets, liabilities } = res.data;
        setIncomeItems(income || []);
        setExpenseItems(expenses || []);
        setAssetItems(assets || []);
        setLiabilityItems(liabilities || []);
      } catch (err) {
        console.error('Error fetching items:', err);
      }
    };
    fetchItems();

    // Force dark mode background for whole page
    document.body.style.backgroundColor = '#121212';
    document.body.style.color = '#e0e0e0';

    return () => {
      // Cleanup on unmount
      document.body.style.backgroundColor = null;
      document.body.style.color = null;
    };
  }, []);

  const handleTabChange = (event, newValue) => setTabIndex(newValue);

  const handleAddItem = async (type, item) => {
    try {
      const res = await instance.post('/items', {
        ...item,
        category: type.toLowerCase(),
      });
      const saved = res.data;
      switch (type) {
        case 'Income':
          setIncomeItems((prev) => [saved, ...prev]);
          break;
        case 'Expenses':
          setExpenseItems((prev) => [saved, ...prev]);
          break;
        case 'Assets':
          setAssetItems((prev) => [saved, ...prev]);
          break;
        case 'Liabilities':
          setLiabilityItems((prev) => [saved, ...prev]);
          break;
        default:
          break;
      }
    } catch (err) {
      console.error(`Error adding ${type} item:`, err);
      alert(`Failed to add ${type} item`);
    }
  };

  const handleDeleteItem = async (type, id) => {
    if (!window.confirm('You sure you want to delete this?')) return;
    try {
      await instance.delete(`/items/${id}`);
      switch (type) {
        case 'Income':
          setIncomeItems((prev) => prev.filter((i) => i._id !== id));
          break;
        case 'Expenses':
          setExpenseItems((prev) => prev.filter((i) => i._id !== id));
          break;
        case 'Assets':
          setAssetItems((prev) => prev.filter((i) => i._id !== id));
          break;
        case 'Liabilities':
          setLiabilityItems((prev) => prev.filter((i) => i._id !== id));
          break;
        default:
          break;
      }
    } catch (err) {
      console.error('Delete failed:', err);
      alert('Failed to delete item');
    }
  };

  const renderTabContent = () => {
    switch (tabIndex) {
      case 0:
        return (
          <>
            <IncomeForm onAdd={(data) => handleAddItem('Income', data)} />
            <ItemList
              items={incomeItems}
              type="Income"
              onDelete={(id) => handleDeleteItem('Income', id)}
            />
          </>
        );
      case 1:
        return (
          <>
            <ExpenseForm onAdd={(data) => handleAddItem('Expenses', data)} />
            <ItemList
              items={expenseItems}
              type="Expenses"
              onDelete={(id) => handleDeleteItem('Expenses', id)}
            />
          </>
        );
      case 2:
        return (
          <>
            <AssetForm onAdd={(data) => handleAddItem('Assets', data)} />
            <ItemList
              items={assetItems}
              type="Assets"
              onDelete={(id) => handleDeleteItem('Assets', id)}
            />
          </>
        );
      case 3:
        return (
          <>
            <LiabilityForm
              onAdd={(data) => handleAddItem('Liabilities', data)}
            />
            <ItemList
              items={liabilityItems}
              type="Liabilities"
              onDelete={(id) => handleDeleteItem('Liabilities', id)}
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        p: 5,
        maxWidth: 1100,
        mx: 'auto',
        mt: 8,
        backgroundColor: '#121212',
        background:
          'linear-gradient(135deg, #0f0f1f 0%, #1a1a3a 50%, #0f0f1f 100%)',
        borderRadius: 5,
        boxShadow:
          '0 0 40px #66ff6aaa, 0 0 60px #4d94ffaa inset, 0 0 80px #42a5f5cc inset',
        color: '#e0e0e0',
        fontFamily: "'Poppins', sans-serif",
        userSelect: 'none',
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{
          mb: 4,
          color: '#66ff66',
          fontWeight: '900',
          letterSpacing: 3,
          textShadow:
            '0 0 12px #66ff6699, 0 0 25px #4dff4dbb, 0 0 40px #32cd32cc',
          userSelect: 'none',
        }}
      >
        💼 Manage Your Wealth Items
      </Typography>

      <Tabs
        value={tabIndex}
        onChange={handleTabChange}
        variant="fullWidth"
        sx={{
          mb: 3,
          '& .MuiTabs-indicator': {
            backgroundColor: '#32cd32',
            height: '4px',
            borderRadius: '4px',
            boxShadow: '0 0 10px 3px #32cd32cc',
          },
          '& .MuiTab-root': {
            fontWeight: 'bold',
            fontSize: '1rem',
            color: '#66ff66cc',
            transition: 'color 0.3s ease',
            '&:hover': {
              color: '#32cd32',
              textShadow: '0 0 12px #32cd32bb',
            },
          },
          '& .Mui-selected': {
            color: '#32cd32 !important',
            fontSize: '1.1rem',
            textShadow: '0 0 18px #32cd3277',
          },
        }}
      >
        {tabLabels.map((label) => (
          <Tab key={label} label={label} />
        ))}
      </Tabs>

      <Divider sx={{ mb: 3, borderColor: '#32cd3266' }} />

      <Box>{renderTabContent()}</Box>
    </Box>
  );
};

const ItemList = ({ items, type, onDelete }) => {
  if (!items.length)
    return (
      <Typography
        sx={{
          mt: 2,
          color: '#888',
          fontStyle: 'italic',
          textAlign: 'center',
          userSelect: 'none',
        }}
      >
        No {type.toLowerCase()} items added yet.
      </Typography>
    );

  const glowColor = categoryColors[type] || '#66ff66';

  return (
    <Box sx={{ mt: 3 }}>
      {items.map((item) => (
        <Paper
          key={item._id}
          sx={{
            p: 3,
            mb: 3,
            backgroundColor: '#1a1a2f',
            borderLeft: `6px solid ${glowColor}`,
            borderRadius: 3,
            color: '#e0e0e0',
            boxShadow: `0 0 20px ${glowColor}aa`,
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'scale(1.03)',
              boxShadow: `0 0 30px ${glowColor}dd`,
              backgroundColor: '#252547',
            },
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 'bold', color: glowColor, mb: 1 }}
            >
              {item.name || item.source || item.title || 'Untitled'}
            </Typography>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              💰 Amount: ${Number(item.amount).toLocaleString()}
            </Typography>
            {item.date && (
              <Typography variant="body2" sx={{ mb: 0.5 }}>
                📅 {new Date(item.date).toLocaleDateString()}
              </Typography>
            )}
            {item.description && (
              <Typography variant="body2" sx={{ mb: 0.5 }}>
                📄 {item.description}
              </Typography>
            )}
            {item.notes && (
              <Typography variant="body2" sx={{ mb: 0.5 }}>
                📝 {item.notes}
              </Typography>
            )}
          </Box>

          <IconButton
            onClick={() => onDelete(item._id)}
            sx={{
              color: '#ff4d4d',
              '&:hover': { color: '#ff9999' },
              transition: 'color 0.3s ease',
            }}
            aria-label={`Delete ${type} item`}
          >
            <DeleteIcon />
          </IconButton>
        </Paper>
      ))}
    </Box>
  );
};

export default Items;
