import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from './context/ThemeProvider';
import { AuthProvider } from './context/AuthProvider';
import MainRouter from './mainRouter';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import EntryForm from './components/EntryForm';
import ItemList from './components/ItemList';

import axios from 'axios';

const App = () => {
  const [items, setItems] = useState({ income: [], expense: [], asset: [], liability: [] });

  // Fetch grouped items from backend
  const fetchItems = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/api/items');
      setItems(data);
    } catch (error) {
      toast.error('Failed to load items', error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // Add new entry handler
  const handleAddEntry = newEntry => {
    // Optimistic UI update
    setItems(prev => {
      const category = newEntry.category.toLowerCase();
      return { ...prev, [category]: [newEntry, ...prev[category]] };
    });
    toast.success('Entry added');
  };

  // Delete entry handler
  const handleDelete = async (category, id) => {
    try {
      await axios.delete(`http://localhost:5000/api/items/${category}/${id}`);
      setItems(prev => ({
        ...prev,
        [category]: prev[category].filter(item => item._id !== id),
      }));
      toast.success('Entry deleted');
    } catch {
      toast.error('Delete failed');
    }
  };

  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <MainRouter />
          <div style={{ maxWidth: 700, margin: '2rem auto', padding: '0 1rem' }}>
            <EntryForm onAdded={handleAddEntry} />
            <ItemList items={items} onDelete={handleDelete} />
          </div>
          <ToastContainer position="top-right" autoClose={3000} />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
