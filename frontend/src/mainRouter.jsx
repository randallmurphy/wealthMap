import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import NavBar from './components/NavBar';
import Login from './components/Login';
import Register from './components/Register';

import Items from './pages/Items';
import Recurring from './pages/Recurring';
import Analytics from './pages/Analytics';

import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

const MainRouter = () => (
  <>
    <NavBar />
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard/items"
        element={
          <ProtectedRoute>
            <Items />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard/recurring"
        element={
          <ProtectedRoute>
            <Recurring />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard/analytics"
        element={
          <ProtectedRoute>
            <Analytics />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </>
);

export default MainRouter;
